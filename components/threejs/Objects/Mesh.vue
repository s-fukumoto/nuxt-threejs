<template>
  <div>
    <slot name="geometry"></slot>
    <slot name="material"></slot>
  </div>
</template>

<script>
import { Mesh } from 'three'
import Object3D from '../Core/Object3D'

export default {
  extends: Object3D,
  data () {
    return {
      geometry: null,
      material: null
    }
  },
  methods: {
    instantiate () {
      this.geometry = this.$slots.geometry[0].componentInstance.geometry
      this.material = this.$slots.material[0].componentInstance.material
      this.object = new Mesh(this.geometry, this.material)
    }
  }
}
</script>