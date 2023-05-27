import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./Planet.css";

import skyboxTexturee from "../../public/star2.jpg";

const Planet = () => {
  const canvasRef = useRef(null);
  const rotateRef = useRef(true);

  useEffect(() => {
    const scene = new THREE.Scene();
    const geometry = new THREE.SphereGeometry(3, 64, 64);

    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("../../earth.jpg");

    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthTexture
    });

    const mesh = new THREE.Mesh(geometry, earthMaterial);
    scene.add(mesh);

    const moonTexture = textureLoader.load("../../moon.jpg");
    const moonMaterial = new THREE.MeshStandardMaterial({
      map: moonTexture
    });

    const moonGeometry = new THREE.SphereGeometry(1, 64, 64);
    const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
    scene.add(moonMesh);

    //setting inital moon and earth positions
    mesh.position.set(0, 0, 0);
    moonMesh.position.set(10, 0, 0);

    const skyboxTextureLoader = new THREE.TextureLoader();
    const skyboxTexture = skyboxTextureLoader.load(skyboxTexturee);
    skyboxTexture.mapping = THREE.EquirectangularReflectionMapping;
    skyboxTexture.magFilter = THREE.NearestFilter;

    scene.background = skyboxTexture;
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.02);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xfafacc, 1);
    directionalLight.position.set(3, 0, 2);
    scene.add(directionalLight);

    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.set(0, 0, 20);
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;

    const moonDiv = document.querySelector(".moon");
    const earthDiv = document.querySelector(".earth");
    moonDiv.addEventListener("click", () => {
     ;
      mesh.position.set(10, 0, 0);
      moonMesh.position.set(0, 0, 0);
      rotateRef.current = false;
     
    });

    earthDiv.addEventListener("click", () => {
      rotateRef.current = true;
      mesh.position.set(0, 0, 0);
      moonMesh.position.set(10, 0, 0);

    });

    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    };

    window.addEventListener("resize", handleResize);

    const t1 = gsap.timeline({
      defaults: { duration: 1 }
    });
    t1.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
    t1.fromTo("span", { y: "-100%" }, { y: "0%" });

    const animate = () => {
      mesh.rotation.y += 0.0005;
      moonMesh.rotation.y += 0.01;

      // rotation algo
      console.log("rotation")
      console.log(rotateRef.current)
      if (rotateRef.current) {
        const distance = 10;
        const angle = moonMesh.rotation.y;
        moonMesh.position.x = Math.cos(angle) * distance;
        moonMesh.position.z = Math.sin(angle) * distance;
      } 
      

      renderer.render(scene, camera);
      controls.update();

      window.requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div>
      <span className="navbar">
        <div className="earth">Earth</div>
        <div className="moon">Moon</div>
      </span>
      <canvas className="webgl" ref={canvasRef}></canvas>
    </div>
  );
};

export default Planet;
