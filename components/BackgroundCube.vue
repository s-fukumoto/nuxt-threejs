<template>
  <webgl-renderer ref="renderer" :width="width" :height="height" :alpha="alpha" :styleCanvas="styleCanvas" @update="update">
    <perspective-camera slot="camera" :aspect="aspect" :fov="50" :near="0.1" :far="10000" :position="position" :rotation="rotation"></perspective-camera>
    <scene slot="scene">
      <mesh ref="cube" slot="object">
        <box-geometry slot="geometry" :width="0.5" :height="0.5" :depth="0.5"></box-geometry>
        <mesh-phong-material slot="material" :color="color"></mesh-phong-material>
      </mesh>
      <directional-light slot="object" :color="lightColor" :position="lightPosition"></directional-light>
    </scene>
  </webgl-renderer>
</template>

<script>
import Three from './threeComponents'
import { Color, Vector3, Euler } from 'three'

export default {
  components: Three,
  data () {
    return {
      width: 0,
      height: 0,
      alpha: true,
      styleCanvas: {
        position: 'absolute',
        'z-index': -1
      },
      position: new Vector3(0, 0, 5),
      rotation: new Euler(0, 0, 0, 'XYZ'),
      color: new Color(0x0000FF),
      lightColor: new Color(0xFFFFFF),
      lightPosition: new Vector3(10, 0, 25),
      sign: { x: 1, y: 1, z: 1 },
      interval: { x: 0.005, y: 0.005, z: 0.005 }
    }
  },
  computed: {
    aspect () {
      return this.height ? this.width / this.height : 0
    }
  },
  methods: {
    animate () {
      requestAnimationFrame(this.animate)
      this.$refs.renderer.render()
    },
    update () {
      this.$refs.cube.object.rotation.x += 0.01
      this.$refs.cube.object.rotation.y += 0.01
      if (this.$refs.cube.object.position.x >= 2 || this.$refs.cube.object.position.x <= -2) {
        this.sign.x *= -1
        this.interval.x = Math.random() * 0.01
      }
      if (this.$refs.cube.object.position.y >= 2 || this.$refs.cube.object.position.y <= -2) {
        this.sign.y *= -1
        this.interval.y = Math.random() * 0.01
      }
      this.$refs.cube.object.position.x += this.sign.x * this.interval.x
      this.$refs.cube.object.position.y += this.sign.y * this.interval.y
    },
    setSize () {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.sign = { x: 1, y: 1, z: 1 }
      this.interval = { x: 0.005, y: 0.005, z: 0.005 }
    }
  },
  mounted () {
    window.addEventListener('resize', this.setSize, true)
    this.setSize()
    this.animate()
  }
}
</script>
