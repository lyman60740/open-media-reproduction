'use client';

import React, {useEffect, useRef} from 'react';
import styles from './Stats.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Canvas } from '@react-three/fiber';
import Model2 from '../Model2/Model2';
import { Environment } from '@react-three/drei';

gsap.registerPlugin(ScrollTrigger);

const Stats: React.FC = () => {
    const statsRef = useRef<HTMLDivElement>(null);
   
    useEffect(() => {
            gsap.to(statsRef.current, {
                yPercent: -100,
                scrollTrigger: {
                    trigger: '#carousel',
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                    pin: true,
                    markers: true
                }
            });
        }, []);
        
    return (
        <div className={styles.stats} ref={statsRef} id='stats'>
            <Canvas style={{background: 'white'}} className={styles.scene} id="sceneBox">
            <directionalLight position={[3, 3, 2]} intensity={3} />
            <Environment files="/medias/rect.hdr" />
            <Model2 />
        </Canvas>

        </div>
    );
};

export default Stats;