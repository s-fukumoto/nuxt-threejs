import WebGLRenderer from './threejs/Renderers/WebGLRenderer'
import PerspectiveCamera from './threejs/Cameras/PerspectiveCamera'
import Scene from './threejs/Scenes/Scene'
import BoxGeometry from './threejs/Geometries/BoxGeometry'
import Mesh from './threejs/Objects/Mesh'
import MeshBasicMaterial from './threejs/Materials/MeshBasicMaterial'
import MeshPhongMaterial from './threejs/Materials/MeshPhongMaterial'
import AmbientLight from './threejs/Lights/AmbientLight'
import DirectionalLight from './threejs/Lights/DirectionalLight'

export default {
  WebglRenderer: WebGLRenderer,
  PerspectiveCamera,
  Scene,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  AmbientLight,
  DirectionalLight
}
