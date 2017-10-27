<template>
  <div>
    <slot name="alphaMap"></slot>
    <slot name="aoMap"></slot>
    <slot name="envMap"></slot>
    <slot name="lightMap"></slot>
    <slot name="map"></slot>
    <slot name="specularMap"></slot>
  </div>
</template>

<script>
import { MeshBasicMaterial, Color, MultiplyOperation } from 'three'
import Material from './Material'

export default {
  extends: Material,
  props: {
    aoMapIntensity: {
      type: Number,
      default: 1
    },
    color: {
      type: Color,
      default: () => new Color(0xffffff)
    },
    combine: {
      type: Number,
      default: MultiplyOperation
    },
    isMeshBasicMaterial: {
      type: Boolean,
      default: true
    },
    lightMapIntensity: {
      type: Number,
      default: 1
    },
    lights: {
      type: Boolean,
      default: false
    },
    morphTargets: {
      type: Boolean,
      default: false
    },
    reflectivity: {
      type: Number,
      default: 1
    },
    refractionRatio: {
      type: Number,
      default: 0.98
    },
    skinning: {
      type: Boolean,
      default: false
    },
    wireframe: {
      type: Boolean,
      default: false
    },
    wireframeLinecap: {
      type: String,
      default: 'round'
    },
    wireframeLinejoin: {
      type: String,
      default: 'round'
    },
    wireframeLinewidth: {
      type: Number,
      default: 1
    }
  },
  methods: {
    instantiate () {
      this.material = new MeshBasicMaterial({
        color: this.color
      })
    }
  }
}
</script>
