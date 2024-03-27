import React, { useRef, useEffect, useState } from "react";
import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import {  TextureLoader } from "three";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as THREE from "three";

export default function Model() {
  const sphereR = useRef();
  const meshRef = useRef();
  const txtBlocRef = useRef();
  const img = useRef();
  const { viewport, camera } = useThree();

camera.position.z = 20;

  const [rotation, setRotation] = useState(-65); 
  const [rotationY, setRotationY] = useState(-22);
  const [rotationX, setRotationX] = useState(-10);

  const [positionY, setPositionY] = useState(0); 
  const [positionX, setPositionX] = useState(0); 
  const [positionZ, setPositionZ] = useState(-1); 

  const [positionYTxt, setPositionYTxt] = useState(0.4); 

 

  useEffect(() => {
    // Créez un ScrollTrigger pour mettre à jour l'état de rotation et de position
    const trigger = ScrollTrigger.create({
      trigger: "#sceneBox",
      start: "top top",
      end: "+=3000",
      pin: true,
      pinSpacing: false,
      onUpdate: (self) => {
        // Mettre à jour l'état de rotation
        const progress = self.progress;
        setRotation(-65 + progress * 260); 
        setRotationY(-22 + progress*90 ); 
        setRotationX(-10 + progress*90 ); 
        

        setPositionY( progress*-1 ); 
        setPositionX( progress*2 ); 
        setPositionZ(-1 + progress*2 ); 

        setPositionYTxt(progress*10); 
      },
    });
   
    
    // Cleanup
    return () => trigger.kill();
  }, []);

  // Utilisez useFrame pour appliquer la rotation
  useFrame(() => {
    if (sphereR.current) {
      sphereR.current.rotation.z = THREE.MathUtils.degToRad(rotation);
      sphereR.current.rotation.y = THREE.MathUtils.degToRad(rotationY);
      sphereR.current.rotation.x = THREE.MathUtils.degToRad(rotationX);      
      
      sphereR.current.position.y = positionY;
      sphereR.current.position.x = positionX;
      sphereR.current.position.z = positionZ;
      
      txtBlocRef.current.position.y = positionYTxt;
    }
  });

  const materialProps = useControls({
    thickness: { value: 0.25, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.1, min: 1, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.27, min: 0, max: 1 },
    backside: { value: true },
    distortionScale: { value: 0.5, min: 0, max: 1, step: 0.1 },
  });

  const { posObjX, posObjY, posObjZ } = useControls({
    posObjX: { value: 0, min: -10, max: 10, step: 0.1 },
    posObjY: { value: 0, min: -10, max: 10, step: 0.1 },
    posObjZ: { value: 0, min: -10, max: 10, step: 0.1 },
  });
  const { rotObjX, rotObjY, rotObjZ } = useControls({
    rotObjX: { value: 0, min: -10, max: 10, step: 0.1 },
    rotObjY: { value: 0, min: -10, max: 10, step: 0.1 },
    rotObjZ: { value: 0, min: -10, max: 10, step: 0.1 },
  });
  const { CenterX, CenterY, CenterZ } = useControls('font bloc position',{
    CenterX: { value: 0, min: -10, max: 10, step: 0.1 },
    CenterY: { value: 0.4 ,min: -10, max: 10, step: 0.1 },
    CenterZ: { value: -2.6, min: -10, max: 10, step: 0.1 },
  });
  const { positionFont,textFontSize, rotationFont, letterSpace, opacity } = useControls('Font Params', {
    positionFont: { value: { x: 0, y: 0., z: -1.2 }, step: 0.1 },
    rotationFont: { value: { x: 0, y: 0, z: 0 }, step: 0.1 },
    textFontSize: { value: 1.1, min: 0.1, max: 5, step: 0.1 },
    letterSpace: { value: 0.1, min: 0.001, max: 2, step: 0.1 },
    opacity: { value: 1, min: 0, max: 1, step: 0.1 },
  });

  const { nodes: nodesOpen } = useGLTF("/medias/logoSceneOpen.glb");
  

  return (
    <group scale={viewport.width / 3.5}>
      <group position={[CenterX, CenterY, CenterZ]} ref={txtBlocRef} position={[0, positionYTxt, -2.6]}>
      <Text  fontSize={textFontSize} fontWeight="bold" letterSpacing={letterSpace} fillOpacity={opacity}  font="/fonts/degular-regular.otf" >
    there's no place 
  </Text>
  <Text  fontSize={textFontSize} fontWeight="bold" letterSpacing={letterSpace} fillOpacity={opacity}  font="/fonts/degular-regular.otf" position={[0, -1.2, 0]} >
  like out of home
  </Text>
      </group>
      
  <group ref={sphereR} position={[posObjX, posObjY, posObjZ]} rotation={[rotObjX, rotObjY, rotObjZ]}>
    <mesh ref={meshRef} {...nodesOpen.Cylinder}  >
                <MeshTransmissionMaterial {...materialProps}  />
    </mesh>
    </group>
    </group>
  );
}
