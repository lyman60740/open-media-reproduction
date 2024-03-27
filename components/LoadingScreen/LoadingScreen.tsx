// LoadingScreen.jsx
import React, { useRef, useEffect } from 'react';
import styles from './LoadingScreen.module.scss';
import gsap from 'gsap';


const LoadingScreen: React.FC = () => {
  
const logoRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    gsap.to(logoRef.current, {
      rotation: 360,
      duration: 2, 
      ease: "linear", 
      repeat: -1,
      repeatDelay: 0.5, 
    });
  }, []);

  return (
    <div className={styles.loadingScreen}>
        <img ref={logoRef} src="https://openmedia.uk.com/om_icon.png" alt="" />
      </div>
  );
};

export default LoadingScreen;
