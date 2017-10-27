<template>
  
</template>

<script>
import { PerspectiveCamera } from 'three'
import Camera from './Camera'

export default {
  extends: Camera,
  props: {
    fov: {
      type: Number,
      default: 75
    },
    aspect: {
      type: Number,
      default: 0
    },
    near: {
      type: Number,
      default: 0.1
    },
    far: {
      type: Number,
      default: 1000
    }
  },
  watch: {
    aspect (val) {
      this.object.aspect = val
      this.object.updateProjectionMatrix()
    }
  },
  methods: {
    instantiate () {
      this.object = new PerspectiveCamera(this.fov, this.aspect, this.near, this.far)
    }
  }
}
</script>