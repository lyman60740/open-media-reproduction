'use client';

import React, { useState,useRef, useEffect, Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import Model from '../Model/Model';
import { Environment } from '@react-three/drei';
import styles from './Scene.module.scss';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default function Scene(){

    const sceneRef = useRef<HTMLDivElement>(null);
    return (
        <div ref={sceneRef} className={styles.sceneBox}>
       
        <Canvas style={{background: '#181818'}} className={styles.scene} id="sceneBox">
            <directionalLight position={[3, 3, 2]} intensity={3} />
            <Environment files="/medias/rect.hdr" />
            <Model />
        </Canvas>
        
        </div>
    );
}