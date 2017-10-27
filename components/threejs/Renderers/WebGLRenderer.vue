<template>
  <canvas :style="styleCanvas">
    <slot name="camera"></slot>
    <slot name="scene"></slot>
  </canvas>
</template>

<script>
import { WebGLRenderer } from 'three'

export default {
  props: {
    canvas: HTMLElement,
    context: WebGLRenderingContext,
    percision: {
      type: String,
      default: 'highp'
    },
    alpha: {
      type: Boolean,
      default: false
    },
    premultipliedAlpha: {
      type: Boolean,
      default: true
    },
    antialias: {
      type: Boolean,
      default: false
    },
    stencil: {
      type: Boolean,
      default: true
    },
    preserveDrawingBuffer: {
      type: Boolean,
      default: false
    },
    depth: {
      type: Boolean,
      default: true
    },
    logarithmicDepthBuffer: {
      type: Boolean,
      default: false
    },
    width: Number,
    height: Number,
    styleCanvas: {}
  },
  data () {
    return {
      camera: null,
      scene: null,
      renderer: null
    }
  },
  watch: {
    width (val) {
      this.resize()
    },
    height (val) {
      this.resize()
    }
  },
  methods: {
    render () {
      this.$emit('update')
      this.renderer.render(this.scene, this.camera)
    },
    resize () {
      this.renderer.setSize(this.width, this.height)
    }
  },
  mounted () {
    this.camera = this.$slots.camera[0].componentInstance.object
    this.scene = this.$slots.scene[0].componentInstance.object
    this.renderer = new WebGLRenderer({
      canvas: this.canvas || this.$el,
      context: this.context,
      percision: this.percision,
      alpha: this.alpha,
      premultipliedAlpha: this.premultipliedAlpha,
      antialias: this.antialias,
      stencil: this.stencil,
      preserveDrawingBuffer: this.premultipliedAlpha,
      depth: this.depth,
      logarithmicDepthBuffer: this.logarithmicDepthBuffer
    })
    this.resize()
    this.render()
  }
}
</script>

<style>
#webgl-bg {
  z-index: -1;
  position: absolute;
}
</style>