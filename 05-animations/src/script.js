import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: window.innerWidth-10,
    height: window.innerHeight-10
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 5
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)

// Clock
const clock = new THREE.Clock()


// Animations
const tick = () => {

    const elapsedTime = clock.getElapsedTime()
    
    // rotate mesh a little each frame
    mesh.rotation.y = Math.sin(elapsedTime) * 2
    mesh.rotation.x = Math.cos(elapsedTime) * 2
    mesh.position.y = Math.sin(elapsedTime)
    mesh.position.x = Math.cos(elapsedTime)
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()