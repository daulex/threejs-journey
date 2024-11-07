import * as THREE from 'three'
import gsap from 'gsap'

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

//animation
let keepAnimating = true
mesh.position.z = 20
gsap.to(mesh.position, { duration: 1, delay: 1, x: -4, z: -1 })
gsap.to(mesh.position, { duration: 1, delay: 2, x: 4 })
gsap.to(mesh.position, { duration: 1, delay: 3, x: -4 })
gsap.to(mesh.position, { duration: 1, delay: 4, x: 0.1, y: -.1 })
gsap.to(mesh.scale, { duration: 1, delay: 4, x: 5, y: 0.8, z: 0.8 })
gsap.to(mesh.scale, { duration: 0, delay: 5, x: 0, y: 0})
gsap.to(mesh.scale, { duration: 0, delay: 5.1, x: 5, y: 0.8, z: 0.8 })
gsap.to(mesh.scale, { duration: 0, delay: 5.2, x: 0, y: 0})
gsap.to(mesh.scale, { duration: 0, delay: 5.3, x: 5, y: 0.8, z: 0.8 })
gsap.to(mesh.scale, { duration: 1, delay: 5.4, x: 1, y: 1, z: 1 })
gsap.to(mesh.position, { duration: .4, delay: 5.6, x: 4 })
gsap.to(mesh.position, { duration: 1, delay: 6, x: -3, z: 20, 
    onComplete: () => {
        keepAnimating = false
    }})


// Animations
const tick = () => {

    // const elapsedTime = clock.getElapsedTime()
    
    // // rotate mesh a little each frame
    // mesh.rotation.y = Math.sin(elapsedTime) * 2
    // mesh.rotation.x = Math.cos(elapsedTime) * 2
    // mesh.position.y = Math.sin(elapsedTime)
    // mesh.position.x = Math.cos(elapsedTime)
    renderer.render(scene, camera)
    if(keepAnimating) {
        window.requestAnimationFrame(tick)
    }
}

tick()