//Import THREE.js library
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

//Create Three.JS Scenes
const scene = new THREE.Scene();
const scene1 = new THREE.Scene();
const scene2 = new THREE.Scene();
const scene3 = new THREE.Scene();

// scene we are starting at
let currentScene = scene;

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
let object12;

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

// fourth star
loader.load(
  `./models/${objToRender}/star.gltf`,
  function (gltf) {
    //file loaded, add it to the scene
    object5 = gltf.scene;
    scene.add(object5);
  }
);

// fifth star
loader.load(
  `./models/${objToRender}/star.gltf`,
  function (gltf) {
    //file loaded, add it to the scene
    object6 = gltf.scene;
    scene.add(object6);
  }
);

// sixth star
loader.load(
  `./models/${objToRender}/star.gltf`,
  function (gltf) {
    //file loaded, add it to the scene
    object7 = gltf.scene;
    scene.add(object7);
  }
);

// senventh star
loader.load(
  `./models/${objToRender}/star.gltf`,
  function (gltf) {
    //file loaded, add it to the scene
    object8 = gltf.scene;
    scene.add(object8);
  }
);

// eigth star
loader.load(
  `./models/${objToRender}/star.gltf`,
  function (gltf) {
    //file loaded, add it to the scene
    object9 = gltf.scene;
    scene.add(object9);
  }
);

// ninth star
loader.load(
  `./models/${objToRender}/star.gltf`,
  function (gltf) {
    //file loaded, add it to the scene
    object10 = gltf.scene;
    scene.add(object10);
  }
);

//load file for computer
loader.load(
  `./models/${objToRender}/COMPUTER.gltf`,
  function (gltf) {
    //file loaded, add it to the scene
    object3 = gltf.scene;
    object3.name = 'computer';

    // change color of computer
    const newColor = new THREE.Color(0xC2B280);
    // traverse through object so all child have same color
    object3.traverse((child) =>{
      if(child.isMesh){
        if(child.material && child.material.color){
          child.material.color.set(newColor); 
        }
      }
     });

    // changed color for this child only, screen
    object3.children[21].material = object3.children[21].material.clone();
    object3.children[21].material.color.set(0xffffff);
    
    // adding object to scene
    scene.add(object3);    
  }
);

// loaded the desktop view w/folder
loader.load(
  `./models/${objToRender}/desktopView.gltf`,
  function (gltf) {
    //file loaded, add it to the scene
    object11 = gltf.scene;
    scene1.add(object11);
    object11.name = 'desktop';
  }
);

// loads notebook for info
loader.load(
  `./models/${objToRender}/notebook.gltf`,
  function (gltf) {
    //file loaded, add it to the scene
    object12 = gltf.scene;
    object12.name = 'notebook';

    scene2.add(object12);
  }
);

// new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.style.position = "absolute";
renderer.domElement.style.top = "0";
renderer.domElement.style.left = "0"
renderer.domElement.style.zIndex = "1"

// Add the renderer to the DOM
document.getElementById("container3D").appendChild(renderer.domElement);

// renderer for label text into continer3D
const labelRender = new CSS2DRenderer();
labelRender.setSize(window.innerWidth, window.innerHeight);
labelRender.domElement.style.position = 'absolute';
labelRender.domElement.style.top = '0px';
document.getElementById("container3D").appendChild(labelRender.domElement);
labelRender.domElement.style.pointerEvents = 'none';

// text, type, position 
const p = document.createElement('p')
p.textContent = "MY PORTFOLIO";
const cPointLabel = new CSS2DObject(p);
scene.add(cPointLabel);
cPointLabel.position.set(0,0,0);


// Set how far the camera will be from the 3D model
camera.position.z = objToRender === "star" ? 5 : 500;


// scene light
const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500) //light position
topLight.castShadow = true;
scene.add(topLight);

// spotlight for vibe
function createSpotlight(color){
  const newObj = new THREE.SpotLight(color,100);

  newObj.shadow = true;
  newObj.angle = .5;
  newObj.penumbra = .2;
  newObj.decay = 1.3;
  newObj.distance = 50;
  newObj.intensity =100;

  return newObj;
}


// creating white spotlight shining from the side
const spotLight = createSpotlight(0xfffff);
// mystery
spotLight.position.set(10,-10,0);
scene.add( spotLight );


// Render the scene
function animate() {
  requestAnimationFrame(animate);

    // position and rotation changes for each object
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
    if(object12)
    {
        object12.position.set(1,.5,-4);
        object12.rotation.y=6.18;
    }

  renderer.render(currentScene, camera);
  labelRender.render(currentScene, camera);
}


// resize function
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  labelRender.setSize(window.innerWidth, window.innerHeight);

});

//Starts rendering
animate();


// raycaster for click event
const raycaster = new THREE.Raycaster();


document.addEventListener('mousedown', onMouseDown);

// what point mouse is raycast
function onMouseDown(event){

  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / renderer.domElement.clientWidth) *  2 - 1;
  mouse.y = -(event.clientY / renderer.domElement.clientHeight) *  2 + 1;
  raycaster.setFromCamera(mouse, camera);

  // raycast to object that needs to be intersected
  const intersections = raycaster.intersectObjects(currentScene.children, true);

    
  if(intersections.length > 0){  

    console.log("Raycasting against:", currentScene);
    console.log("Hit mesh:", intersections[0].object.name);
    const name = intersections[0].object.name;
    const hit  = intersections[0].object;
    let root = hit;

    while(root.parent && root.parent.type !== "Scene"){
      root= root.parent;
    }

    const rootName = root.name;
      // using mesh name that interseted raycast to change scene 
      switch(rootName){
        case "computer":
          console.log("computer intersected, s1 laoding")
          currentScene = scene1;
          scene1.add(topLight);
          cPointLabel.element.style.display = 'none';
          break;
        case "desktop": 
          console.log("desktop intersected, s2 loading")
          currentScene = scene2;
          scene2.add(topLight);
          break;
        case "notebook":
          console.log("notebook w/contect intersected,s3 loading")
          currentScene = scene3;
           location.href= 'info.html'         
          break;
        default:
          console.log("hit somethin else:", intersections[0].object.name);

      }
    }
}

