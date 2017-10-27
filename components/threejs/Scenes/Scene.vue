<template>
  <div>
    <slot name="light"></slot>
    <slot name="object"></slot>
  </div>
</template>

<script>
import { Scene } from 'three'
import Object3D from '../Core/Object3D'

export default {
  extends: Object3D,
  methods: {
    instantiate () {
      this.object = new Scene()
      if (this.$slots.object && this.$slots.object.length) {
        for (let i = 0; i < this.$slots.object.length; i++) {
          this.object.add(this.$slots.object[i].componentInstance.object)
        }
      }
    }
  }
}
</script>