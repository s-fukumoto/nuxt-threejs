<template>
  <webgl-renderer ref="renderer" :width="width" :height="height" :alpha="alpha" :background="true" @update="update">
    <perspective-camera slot="camera" :aspect="aspect" :fov="50" :near="0.1" :far="10000" :position="position" :rotation="rotation"></perspective-camera>
    <scene slot="scene">
      <mesh ref="cube" slot="object">
        <box-geometry slot="geometry" :width="1" :height="1" :depth="1"></box-geometry>
        <mesh-basic-material slot="material" :color="color"></mesh-basic-material>
      </mesh>
    </scene>
  </webgl-renderer>
</template>

<script>
import Three from './src'
import { Color, Vector3, Euler } from 'three'

export default {
  components: Three,
  data () {
    return {
      width: 0,
      height: 0,
      alpha: true,
      position: new Vector3(0, 0, 5),
      rotation: new Euler(0, 0, 0, 'XYZ'),
      color: new Color(1, 0.5, 0)
    }
  },
  computed: {
    aspect () {
      return this.height ? this.width / this.height : 0
    }
  },
  methods: {
    animate () {
      requestAnimationFrame(this.animate)
      this.$refs.renderer.render()
    },
    update () {
      this.$refs.cube.object.rotation.x += 0.02
      this.$refs.cube.object.rotation.y += 0.02
    },
    setSize () {
      this.width = window.innerWidth
      this.height = window.innerHeight
    }
  },
  mounted () {
    window.addEventListener('resize', this.setSize, true)
    this.setSize()
    this.animate()
  }
}
</script>
