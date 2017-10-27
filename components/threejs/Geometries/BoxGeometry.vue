<template>
  
</template>

<script>
import { BoxGeometry } from 'three'
import Geometry from '../Core/Geometry'

export default {
  extends: Geometry,
  props: {
    width: {
      type: Number,
      default: 1
    },
    height: {
      type: Number,
      default: 1
    },
    depth: {
      type: Number,
      default: 1
    },
    widthSegments: {
      type: Number,
      default: 1
    },
    heightSegments: {
      type: Number,
      default: 1
    },
    depthSegments: {
      type: Number,
      default: 1
    }
  },
  methods: {
    instantiate () {
      this.geometry = new BoxGeometry(this.width, this.height, this.depth, this.widthSegments, this.heightSegments, this.depthSegments)
    }
  }
}
</script>
