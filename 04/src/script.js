import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  void main() {
    gl_FragColor = vec4(vUv, 0.5, 1.0);
  }
`;

const material = new THREE.ShaderMaterial({
  vertexShader: vertexShader,
  fragmentShader: fragmentShader
});
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
mesh.position.set(0.7, -0.6, 0)
mesh.scale.set(2, 0.5, 0.5)
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.75

// axes helper
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.y = 0
// camera.position.x = 0
camera.lookAt(mesh.position)
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(window.devicePixelRatio * 2);

renderer.render(scene, camera)