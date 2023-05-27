import * as THREE from "three";
import "./style.css"
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { render } from "react-dom";
import gsap from "gsap"

//Scene
const scene = new THREE.Scene();

//3 is radius , 64 and 64 are width and height segments
//this adds shape
const geometry = new THREE.SphereGeometry(3, 64, 64);

//this determines the looks and material
const material = new THREE.MeshStandardMaterial({
  color: "red",

    roughness: .2,
    wireframe:false,

});

//this combines the shape and material
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);


//setting up size variables to window height and width
const sizes={
    width:window.innerWidth,
    height:window.innerHeight
}




//adding light
//position are x y and z positions
const light=new THREE.PointLight(0xffffff,1,100)
light.position.set(0,10,10)
light.intensity=1.25
scene.add(light)

//this sets the prospective.
//45 sets the field of view , 800*600 is aspect raitio
//0.1 and 100 are near and far clipping point . closer and further from that point
//will cause object to disappear
const camera = new THREE.PerspectiveCamera(45, sizes.width/ sizes.height,0.1,100);
camera.position.z = 20;
scene.add(camera);



//now to render the scene . use canvas in index.html . and .webgl as classname
//selecting the canvas class in index.hmtl using .webgl class
//rendering canvas using WebGLRenderer
//setpixelratio helps to soften the edges
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2 )
renderer.render(scene, camera);


//controls
//helps to move the planet using cursor
//enablepan false stops moving planet on right click
//autorotate helps render to rotate automatically 
const controls=new OrbitControls(camera,canvas);
controls.enableDamping=true;
controls.enablePan=false;
controls.autoRotate=true;
controls.autoRotateSpeed=5;


//resizing when windows size change
//updating sizes variables , the camera and render aspects
window.addEventListener("resize",()=>{
    
    sizes.width=window.innerWidth,
    sizes.height=window.innerHeight

  
    camera.aspect=sizes.width/sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width,sizes.height)

})


const loop=()=>{
 
    renderer.render(scene,camera)
    window.requestAnimationFrame(loop)

    //to add smooth effect to controls so it continues even after letting go
    controls.update()
}
loop()


//timeline 
//sync multiple animations
const t1=gsap.timeline({
    defaults:{duration:1}
})
t1.fromTo(mesh.scale,{z:0,x:0,y:0},{z:1,x:1,y:1})


//colour changing effect
let mouseDown=false
window.addEventListener('mousedown',()=>(mouseDown=true))
window.addEventListener('mouseup',()=>(mouseDown=false))

let rgb=[]
window.addEventListener('mousemove',(e)=>{
    if(mouseDown)
    {
        rgb=[
            Math.round((e.pageX/sizes.width)*255),
            Math.round((e.pageY/sizes.height)*255),
            120
        ]

        let new_color=new THREE.Color(`rgb(${rgb.join(',')})`)
        gsap.to(mesh.material.color,{
            r:new_color.r,
            g:new_color.g,
            b:new_color.b
        })
    }
})
