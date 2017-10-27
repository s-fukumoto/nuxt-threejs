<template>

</template>

<script>
import { Light, Color } from 'three'
import Object3D from '../Core/Object3D'

export default {
  extends: Object3D,
  props: {
    color: {
      type: Color,
      default: () => new Color(0xFFFFFF)
    },
    intensity: {
      type: Number,
      default: 1.0
    }
  },
  methods: {
    instantiate () {
      this.object = new Light(this.color, this.intensity)
    }
  }
}
</script>