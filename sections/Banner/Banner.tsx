import React, {useEffect, useRef} from 'react';
import styles from './Banner.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Banner: React.FC = () => {
    const bannerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
            gsap.to(bannerRef.current, {
                y: -20,
                repeat: -1,
                duration: 1.5,
                yoyo: true,
                ease: "sine.out"
            })
            gsap.to(bannerRef.current, {
                scrollTrigger: {
                    trigger: bannerRef.current,
                    start: "bottom bottom-=10%",
                    end: "+=100",
                    scrub: 1,
                },
                opacity: 0,
            })
          });
        
    return (
        // JSX markup goes here
        <div ref={bannerRef} className={styles.banner}>
            <p>Scroll to explore</p>
        </div>
    );
};

export default Banner;