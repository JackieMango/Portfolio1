//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, .1,1000);
camera.position.z = 8;
camera.position.y = 1;
camera.position.x = 6;

let object;
//const light = new THREE.AmbientLight(0x404040);
//scene.add(light);
// 0x404040 soft white
// 0xffffff white

const directional = new THREE.DirectionalLight(0x404040, 5);
directional.position.set(10,10,10);
scene.add(directional);

const loader = new GLTFLoader();

loader.load(
    "3d model.glb",
    function(gltf){
        object = gltf.scene;
        scene.add(object);
    },
    function (xhr){
        console.log((xhr.loaded/xhr.total*100) + "%loaded");

    },
    function(error){
        console.error(error);
    }

);

const renderer = new THREE.WebGLRenderer({ alpha:true});
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("container3D").appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = .25;
controls.screenSpacePanning = false;


function animate()
{
    requestAnimationFrame(animate);
    controls.target.set(0,1.5,0);

    controls.update();
    renderer.render(scene, camera);

}
window.addEventListener("resize",function(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();