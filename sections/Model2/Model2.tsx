import React, { useRef, useEffect } from "react";
import { useGLTF, MeshTransmissionMaterial,OrbitControls  } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as THREE from "three";


gsap.registerPlugin(ScrollTrigger);

export default function Model2() {
  const sphereR2 = useRef();
  const { viewport, camera } = useThree();

  // Utilisation de useRef pour OrbitControls afin de pouvoir accéder à ses propriétés et méthodes
  const orbitControlsRef = useRef();

  const startPos = { x: 10, y: -1, z: 5 };
  const endPos = { x: -1, y: .3, z: -.5 };

  const startRot = { x: -10, y: -22, z: -65 };
  const endRot = { x: 0, y: -22, z: -65 };

  useEffect(() => {
    if (!sphereR2.current) return;
    const boxScroll = document.getElementById('boxCarousel').scrollWidth ;
    const carouselWidth = document.getElementById('carousel').offsetWidth ;
    
    camera.rotation.set(0.24489956244979763, -0.41075186017197196, 0.09946184849396295);

    ScrollTrigger.create({
      trigger: "#carousel",
      start: `top top` ,
      end: () => `+=${boxScroll - carouselWidth}`,
      scrub: true,
      markers: true,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(sphereR2.current.position, {
          x: startPos.x + (endPos.x - startPos.x) * progress,
          y: startPos.y + (endPos.y - startPos.y) * progress,
          z: startPos.z + (endPos.z - startPos.z) * progress,
          immediateRender: false,
        });

        gsap.to(sphereR2.current.rotation, {
          x: THREE.MathUtils.degToRad(startRot.x + (endRot.x - startRot.x) * progress),
          y: THREE.MathUtils.degToRad(startRot.y + (endRot.y - startRot.y) * progress),
          z: THREE.MathUtils.degToRad(startRot.z + (endRot.z - startRot.z) * progress),
          immediateRender: false,
        });
        if (progress === 1) {
          console.log(`Coordonnées finales - Position: (${endPos.x}, ${endPos.y}, ${endPos.z}), Rotation: (${endRot.x}, ${endRot.y}, ${endRot.z})`);
        }
      },
    });

    console.log(`Caméra Position: ${camera.position.x}, ${camera.position.y}, ${camera.position.z}`);
    console.log(`Caméra Rotation: ${camera.rotation.x}, ${camera.rotation.y}, ${camera.rotation.z}`);
    
    // Lorsque les OrbitControls changent, log la position et rotation actuelle de la caméra
    // orbitControlsRef.current.addEventListener('change', () => {
    //   console.log(`Après ajustement - Position: ${camera.position.x}, ${camera.position.y}, ${camera.position.z}`);
    //   console.log(`Après ajustement - Rotation: ${camera.rotation.x}, ${camera.rotation.y}, ${camera.rotation.z}`);
    // });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [sphereR2]); // Ajoutez d'autres dépendances si nécessaire

  // useFrame n'est plus nécessaire car GSAP gère l'animation
  // Assurez-vous de supprimer toute logique de `useFrame` qui pourrait interférer avec l'animation de GSAP

  const { nodes: nodesOpen } = useGLTF("/medias/logoSceneOpen.glb");

  const materialProps = useControls('Material Properties', {
    thickness: { value: 0.25, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.1, min: 1, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.27, min: 0, max: 1 },
    backside: { value: true },
    distortionScale: { value: 0.5, min: 0, max: 1, step: 0.1 },
  });
  
  return (
    <group scale={viewport.width / 3.5}>
      {/* <OrbitControls ref={orbitControlsRef} /> */}
      <group ref={sphereR2} position={[startPos.x, startPos.y, startPos.z]} rotation={[THREE.MathUtils.degToRad(startRot.x), THREE.MathUtils.degToRad(startRot.y), THREE.MathUtils.degToRad(startRot.z)]}>
        <mesh {...nodesOpen.Cylinder}>
          <MeshTransmissionMaterial {...materialProps} color={"#FFFFFF"}/>
        </mesh>
      </group>
    </group>
  );
}
