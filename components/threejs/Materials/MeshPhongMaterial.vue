<template>
  <div>
    <slot name="alphaMap"></slot>
    <slot name="aoMap"></slot>
    <slot name="bumpMap"></slot>
    <slot name="displacementMap"></slot>
    <slot name="emissiveMap"></slot>
    <slot name="envMap"></slot>
    <slot name="lightMap"></slot>
    <slot name="map"></slot>
    <slot name="normalMap"></slot>
    <slot name="specularMap"></slot>
  </div>
</template>

<script>
import { MeshPhongMaterial, Color, MultiplyOperation } from 'three'
import Material from './Material'

export default {
  extends: Material,
  props: {
    aoMapIntensity: {
      type: Number,
      default: 1
    },
    bumpScale: {
      type: Number,
      default: 1
    },
    color: {
      type: Color,
      default: () => new Color(0xFFFFFF)
    },
    combine: {
      type: Number,
      default: MultiplyOperation
    },
    displacementScale: {
      type: Number,
      default: 1
    },
    displacementBias: {
      type: Number,
      default: 0
    },
    emissive: {
      type: Color,
      default: () => new Color(0xFFFFFF)
    },
    emissiveIntensity: {
      type: Number,
      default: 1
    },
    isMeshPhongMaterial: {
      type: Boolean,
      default: true
    },
    lightMapIntensity: {
      type: Number,
      default: 1
    },
    morphNormals: {
      type: Boolean,
      default: false
    },
    morphTargets: {
      type: Boolean,
      default: false
    },
    normalScale: {
      type: Number,
      default: 1
    },
    reflectivity: {
      type: Number,
      default: 1
    },
    refractionRatio: {
      type: Number,
      default: 0.98
    },
    shininess: {
      type: Number,
      default: 30
    },
    skinning: {
      type: Boolean,
      default: false
    },
    specular: {
      type: Color,
      default: () => new Color(0x111111)
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
      this.material = new MeshPhongMaterial({
        color: this.color
      })
    }
  }
}
</script>
