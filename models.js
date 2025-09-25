//Import THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
//.gltf file import
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

//Create a Three.JS Scene
const scene = new THREE.Scene();
//create a new camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//create clock for movement
const clock = new THREE.Clock();

//3D object global variables
let object;
let object2;
let object3;
let object4;

//object rendering
let objToRender = 'star';

//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

//Load the file of first stat
loader.load(
  `./models/${objToRender}/star.gltf`,
  function (gltf) {
    //file loaded, add it to the scene
    object = gltf.scene;
    scene.add(object);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    //error
    console.error(error);
  }
);

// second star
loader.load(
  `./models/${objToRender}/star.gltf`,
  function (gltf) {
    //file loaded, add it to the scene
    object2 = gltf.scene;
    scene.add(object2);
  }
);
// third star
loader.load(
  `./models/${objToRender}/star.gltf`,
  function (gltf) {
    //file loaded, add it to the scene
    object4 = gltf.scene;
    scene.add(object4);
  }
);

//load file for computer
loader.load(
  `./models/${objToRender}/COMPUTER.gltf`,
  function (gltf) {
    //file loaded, add it to the scene
    object3 = gltf.scene;
    scene.add(object3);
  }
);

//new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

//Add the renderer to the DOM
document.getElementById("container3D").appendChild(renderer.domElement);

//Set how far the camera will be from the 3D model
camera.position.z = objToRender === "star" ? 5 : 500;

//scene light
const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500) //light position
topLight.castShadow = true;
scene.add(topLight);

//Render the scene
function animate() {
  requestAnimationFrame(animate);
    // postitions and rotations changes for each object
    const delta = clock.getDelta();
    
    // wrapped inside if to make sure its loaded before animated
    if(object)
    {
    object.position.x=3;

    object.rotation.x += delta;
    object.rotation.y += delta;
    }
    
    if(object2)
    {
    object2.position.z=2;
    object2.position.y=2;

    object2.position.x= -1;
    object2.rotation.x -= delta;
    object2.rotation.y += delta;

    }
    if(object3)
    {
    object3.position.set(0,0,-6);
    object3.rotation.y=5;
    }
    if(object4)
    {
      object4.position.set(2.2,2);
      object4.scale.set(.5,.5,.5);

      object4.rotation.x -= delta;
    }

  
    

  renderer.render(scene, camera);
}

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer();
});

//Starts rendering
animate();