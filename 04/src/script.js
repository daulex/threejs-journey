import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const group = new THREE.Group()
group.position.y = 0
group.position.x = -2
group.rotation.y = Math.PI * 0.2
group.rotation.x = Math.PI * 0.05

scene.add(group)




let colours = [0xff0000, 0x00ff00, 0x0000ff]
for (let i = 0; i < 3; i++) {
    const cube = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshStandardMaterial({ color: colours[i] })
    )
    cube.position.x = i * 2
    cube.castShadow = true;
    cube.receiveShadow = true;
    group.add(cube)
}

// Light
const light = new THREE.DirectionalLight(0xffffff, 1.5);
light.position.set(0, 10, 10);
light.castShadow = true;
scene.add(light);

// Ground plane to receive shadows
const planeGeometry = new THREE.PlaneGeometry(10, 10);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -1;
plane.receiveShadow = true;
scene.add(plane);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// axes helper
// const axesHelper = new THREE.AxesHelper(2)
// scene.add(axesHelper)

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
camera.position.y = 0
camera.position.x = -1

scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(window.devicePixelRatio * 2);
renderer.shadowMap.enabled = true; // Enable shadow maps

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();