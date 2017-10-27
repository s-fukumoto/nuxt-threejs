<template>
  
</template>

<script>
import { DirectionalLight, Color } from 'three'
import Light from './Light'

export default {
  extends: Light,
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
      this.object = new DirectionalLight(this.color, this.intensity)
    }
  }
}
</script>