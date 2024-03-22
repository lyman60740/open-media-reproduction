import React, {useEffect, useRef} from 'react';
import styles from './Message.module.scss';
import AnimatedButton from '../../components/Button/AnimatedButton';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Message: React.FC = () => {
    const messageRef = useRef<HTMLDivElement>(null);
    const pRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
            gsap.fromTo(pRef.current,{
                y: "70vh",
            }, {
               y: 0,
               duration: 2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: messageRef.current,
                    start: 'top top',
                    end: 'bottom top',
                                  
                    pin: true,
                    toggleActions: "play none none reverse",
                },
            });
            
        }, []);
        
    return (
        <div ref={messageRef} className={styles.message}>
            <div ref={pRef} className={styles.messageBox}>
            <p >In the world of out of home advertising, brands don't just shine; they come alive.</p>
            <AnimatedButton >
            Find out more
            </AnimatedButton>
            </div>
            
        </div>
    );
};

export default Message;