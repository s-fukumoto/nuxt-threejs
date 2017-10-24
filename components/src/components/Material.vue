<template>
  
</template>

<script>
export default {
  data () {
    return {
      material: null
    }
  },
  methods: {
    instantiate () {
    }
  },
  mounted () {
    this.instantiate()
  },
  beforeDestroy () {
    this.material.dispose()
  }
}
</script>
