import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Sphere = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const geometry = new THREE.SphereGeometry(3, 64, 64);

    //used to load any texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("../../earth.jpg");

    const material = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.5
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    //width and height of canvas
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    // const light = new THREE.PointLight(0xffffff, 1, 100);
    // light.position.set(10, 10, 10); // Change the light position to the center of the scene
    // light.intensity = 2; // Increase the light intensity for a brighter effect
    // scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Adjust the intensity as needed
scene.add(ambientLight);


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
    renderer.setPixelRatio(2);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 10;

    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      //the rendeer size is updated
      renderer.setSize(sizes.width, sizes.height);
    };

    window.addEventListener("resize", handleResize);

    const t1 = gsap.timeline({
      defaults: { duration: 1 }
    });
    t1.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });

    let mouseDown = false;
    window.addEventListener("mousedown", () => (mouseDown = true));
    window.addEventListener("mouseup", () => (mouseDown = false));

    let rgb = [];
    window.addEventListener("mousemove", (e) => {
      if (mouseDown) {
        rgb = [
          Math.round((e.pageX / sizes.width) * 255),
          Math.round((e.pageY / sizes.height) * 255),
          120
        ];

        const new_color = new THREE.Color(`rgb(${rgb.join(",")})`);
        gsap.to(mesh.material.color, {
          r: new_color.r,
          g: new_color.g,
          b: new_color.b
        });
      }
    });

    const animate = () => {
      renderer.render(scene, camera);
      controls.update();

      //calling animate recursively
      window.requestAnimationFrame(animate);
    };
    animate();
  });

  return <canvas className="webgl" ref={canvasRef}></canvas>;
};

export default Sphere;
