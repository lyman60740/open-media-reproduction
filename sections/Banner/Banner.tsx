import React, {useEffect, useRef} from 'react';
import styles from './Banner.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Banner: React.FC = () => {
    const bannerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
            gsap.to(bannerRef.current.querySelector('p'), {
                y: -20,
                repeat: -1,
                duration: 1.5,
                yoyo: true,
                ease: "sine.out",
            
            })
            gsap.to(bannerRef.current, {
                scrollTrigger: {
                    trigger: bannerRef.current,
                    start: "bottom bottom",
                    end: "+=300",
                    scrub: 1,
                    pin: true,
                },
                opacity: 0,
                
            })
          });
        
    return (
        <div ref={bannerRef} className={styles.banner}>
            <p>Scroll to explore</p>
        </div>
    );
};

export default Banner;