<template>
  
</template>

<script>
import { Vector3, Euler, Layers } from 'three'

export default {
  props: {
    position: {
      type: Vector3,
      default: () => new Vector3(0, 0, 0)
    },
    rotation: {
      type: Euler,
      default: () => new Euler(0, 0, 0, 'XYZ')
    },
    scale: {
      type: Vector3,
      default: () => new Vector3(1, 1, 1)
    },
    castShadow: {
      type: Boolean,
      default: false
    },
    frustumCulled: {
      type: Boolean,
      default: true
    },
    layers: {
      type: Layers,
      default: () => new Layers()
    },
    receiveShadow: {
      type: Boolean,
      default: false
    },
    renderOrder: {
      type: Number,
      default: 0
    },
    userData: {
      type: Object,
      default: null
    },
    visible: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      object: null
    }
  },
  watch: {
    position (val) {
      this.object.position.copy(val)
    },
    rotation (val) {
      this.object.rotation.copy(val)
    },
    scale (val) {
      this.object.scale.copy(val)
    }
  },
  methods: {
    instantiate () {
    }
  },
  mounted () {
    this.instantiate()
    this.object.position.copy(this.position)
    this.object.rotation.copy(this.rotation)
    this.object.scale.copy(this.scale)
  }
}
</script>
