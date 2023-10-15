const menuItems = document.querySelectorAll('.menu ul li');

menuItems.forEach(item => {
    item.addEventListener('click', function () {
        // Remove 'clicked' class from all menu items
        menuItems.forEach(menuItem => {
            menuItem.classList.remove('clicked');
        });

        // Add 'clicked' class to the clicked menu item
        item.classList.add('clicked');
    });
});

/* This is three.js code to create the animated black and white background */

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set the background color of the canvas to light gray
renderer.setClearColor(0xE0E0E0); // Light Gray

// Set the canvas position to fixed
renderer.domElement.style.position = "fixed";
renderer.domElement.style.top = "0";
renderer.domElement.style.left = "0";

// Create a noise texture for grainy effect
const noiseTexture = new THREE.TextureLoader().load('img/noise.jpg');
noiseTexture.wrapS = THREE.RepeatWrapping;
noiseTexture.wrapT = THREE.RepeatWrapping;

// Modify your material to use the noise texture as a bump map
const material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.013,
    bumpMap: noiseTexture, // Use noise texture as bump map
    bumpScale: 0.7, // Adjust the bump effect strength
});

// Create a random abstract shape
function createRandomShape() {
    const geometry = new THREE.DodecahedronGeometry(Math.random() * 2 + 1);
    const shape = new THREE.Mesh(geometry, material);

    // Randomize position
    shape.position.x = (Math.random() - 0.5) * 20;
    shape.position.y = (Math.random() - 0.5) * 20;
    shape.position.z = (Math.random() - 0.5) * 20;

    return shape;
}

// Create multiple random shapes and add them to the scene
for (let i = 0; i < 50; i++) {
    const shape = createRandomShape();
    scene.add(shape);
}

// Set up the animation
function animate() {
    requestAnimationFrame(animate);

    // Rotate the shapes
    scene.children.forEach(shape => {
        shape.rotation.x += 0.01;
        shape.rotation.y += 0.01;
    });

    renderer.render(scene, camera);
}

// Set camera position
camera.position.z = 5;

// Start the animation
animate();
