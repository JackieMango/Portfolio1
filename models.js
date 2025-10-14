//Import THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
//.gltf file import
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";


let currentScene;

//Create Three.JS Scenes
const scene = new THREE.Scene();
const scene1 = new THREE.Scene();
const scene2 = new THREE.Scene();

// scene we are starting at
currentScene = scene;

// func to switch scenes
function switchScene(){

  // switch first to second
  if(currentScene === scene){
    currentScene = scene1;
    scene1.add(topLight);
    //console.log("object111", object.name);

  }// second to third
  else if(currentScene === scene1){
    currentScene = scene2;
    scene2.add(topLight);
  }
  else{
    currentScene = scene;
  }
}


//create a new camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//create clock for movement
const clock = new THREE.Clock();

//3D objectS, global variables, change names later
let object;
let object2;
let object3;
let object4;
let object5;
let object6;
let object7;
let object8;
let object9;
let object10;
let object11;

//object rendering
let objToRender = 'star';

//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

// ?? find a diff way to load all

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
    //object2.layers.set(2);
    scene.add(object2);
  }
);

// third star
loader.load(
  `./models/${objToRender}/star.gltf`,
  function (gltf) {
    //file loaded, add it to the scene
    object4 = gltf.scene;
    //object4.layers.set(2);

    scene.add(object4);
  }
);

// fourth star
loader.load(
  `./models/${objToRender}/star.gltf`,
  function (gltf) {
    //file loaded, add it to the scene
    object5 = gltf.scene;
       // object5.layers.set(2);

    scene.add(object5);
  }
);

// fifth star
loader.load(
  `./models/${objToRender}/star.gltf`,
  function (gltf) {
    //file loaded, add it to the scene
    object6 = gltf.scene;
   // object6.layers.set(2);

    scene.add(object6);
  }
);

// sixth star
loader.load(
  `./models/${objToRender}/star.gltf`,
  function (gltf) {
    //file loaded, add it to the scene
    object7 = gltf.scene;
    //object7.layers.set(2);

    scene.add(object7);
  }
);

// senventh star
loader.load(
  `./models/${objToRender}/star.gltf`,
  function (gltf) {
    //file loaded, add it to the scene
    object8 = gltf.scene;
       // object8.layers.set(2);

    scene.add(object8);
  }
);

// eigth star
loader.load(
  `./models/${objToRender}/star.gltf`,
  function (gltf) {
    //file loaded, add it to the scene
    object9 = gltf.scene;
    //object9.layers.set(2);

    scene.add(object9);
  }
);

// ninth star
loader.load(
  `./models/${objToRender}/star.gltf`,
  function (gltf) {
    //file loaded, add it to the scene
    object10 = gltf.scene;
      //  object10.layers.set(2);

    scene.add(object10);
  }
);

//load file for computer
loader.load(
  `./models/${objToRender}/COMPUTER.gltf`,
  function (gltf) {
    //file loaded, add it to the scene
    object3 = gltf.scene;
    //object3.layers.set(1);
    scene.add(object3);
  }
);

// loaded the desktop view
loader.load(
  `./models/${objToRender}/desktopView.gltf`,
  function (gltf) {
    //file loaded, add it to the scene
    object11 = gltf.scene;

    scene1.add(object11);

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

    if(object5)
    {
      object5.position.set(-4,0,1);
      object5.rotation.x -= delta;

    }
    if(object6)
    {
      object6.position.set(-5,2,1);
      object6.rotation.x += delta;
      object6.scale.set(.5,.5,.5);
    }
  
    if(object7)
    {
      object7.position.set(-3,-1,3);
      object7.rotation.x += delta;
      object7.scale.set(.2,.2,.2);

    }

if(object8)
    {
      object8.position.set(-1,-1,3);
      object8.rotation.x -= delta;
      object8.scale.set(.2,.2,.2);
    }

if(object9)
    {
      object9.position.set(4,-2,2);
      object9.rotation.x -= delta;
    }

if(object10)
    {
      object10.position.set(3,1,3);
      object10.rotation.x -= delta;
    }

    if(object11)
    {
      object11.position.set(0,0,-2);
      object11.rotation.y = -1.5;
    }

  renderer.render(currentScene, camera);
}

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  //render();
});

//Starts rendering
animate();


// raycaster for click event
const raycaster = new THREE.Raycaster();

document.addEventListener('mousedown', onMouseDown);

// what point mouse is raycast
function onMouseDown(event){

  const coords = new THREE.Vector2(
    (event.clientX / renderer.domElement.clientWidth) *  2 - 1,
    - ((event.clientY / renderer.domElement.clientHeight) *  2 - 1),
  );

  raycaster.setFromCamera(coords, camera);

  // intersections for each object
  const intersections = raycaster.intersectObjects(scene.children, true);
  const intersections1 = raycaster.intersectObjects(object3.children, true);
  const intersections2 = raycaster.intersectObjects(object11.children, true);

  // change to next scene when reached to folder on desktop
if(intersections2.length> 0)
  {    
    document.getElementById("container3D").innerHTML = "To Be Continued..."

    switchScene();
    console.log('screen next folder');
  }

  // switch scene when the computer is clicked 
if(intersections1.length> 0)
  {
    // changes to random color for objects
    switchScene();
    console.log('screen next');

  }

  if(intersections.length> 0)
  {
    // changes to random color for objects
    const selectedObject = intersections[0].object;
    const color = new THREE.Color(Math.random(), Math.random(), Math.random());
    selectedObject.material.color = color;

    console.log('clicked on object');

  }

}

