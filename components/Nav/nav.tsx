import React, { useState, useRef, useEffect } from 'react';
import styles from './Nav.module.scss';
import AnimatedButton from '../Button/AnimatedButton';
import Menu from '../Menu/Menu';
import gsap from 'gsap';

const Nav: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const burgerRef = useRef<HTMLDivElement>(null);
    const line1Ref = useRef<HTMLDivElement>(null);
    const line2Ref = useRef<HTMLDivElement>(null);
    const line3Ref = useRef<HTMLDivElement>(null);
    const line4Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isMenuOpen) {
            gsap.to(menuRef.current, { autoAlpha: 1, duration: 0.3 });
            gsap.set(menuRef.current, { display: 'block' });
            gsap.set(document.body, { overflow: 'hidden' });
            gsap.to([line2Ref.current, line3Ref.current], {
                background: '#000000',
                duration: 0.5,
            })
            gsap.to(line1Ref.current, {
                opacity: 0,
                duration: 0.2,
            })
            gsap.to(line4Ref.current, {
                opacity: 0,
                duration: 0.2,
            })
            gsap.to(line2Ref.current, {
                rotate: 45,
                duration: 0.5,
                transformOrigin: 'center'
            })
            gsap.to(line3Ref.current, {
                rotate: -45,
                duration: 0.5,
                transformOrigin: 'center'
            })
            
        } else {
            gsap.to(menuRef.current, { autoAlpha: 0, duration: 0.3, onComplete: () => {
                gsap.set(menuRef.current, { display: 'none' });
            }});
            gsap.set(document.body, { overflow: 'visible' });
            gsap.to([line2Ref.current, line3Ref.current], {
                background: 'white',
                duration: 0.5,
            })
            gsap.to(line1Ref.current, {
                opacity: 1,
                duration: 0.2,
            })
            gsap.to(line4Ref.current, {
                opacity: 1,
                duration: 0.2,
            })
            gsap.to(line2Ref.current, {
                rotate: 0,
                duration: 0.5,
                transformOrigin: 'center'
            })
            gsap.to(line3Ref.current, {
                rotate: 0,
                duration: 0.5,
                transformOrigin: 'center'
            })
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.burger} onClick={toggleMenu} ref={burgerRef}>
                <div ref={line1Ref} className={styles.line1}></div>
                <div>
                <div ref={line2Ref} className={styles.line2}></div>
                <div ref={line3Ref} className={styles.line3}></div>
                </div>
                
                <div ref={line4Ref} className={styles.line4}></div>
            </div>

            <a className={styles.logo}>
                <img src="https://api.openmedia.uk.com/wp-content/uploads/2024/01/Group-2.svg" alt="Company Logo" />
            </a>

            <AnimatedButton className={isMenuOpen ? 'buttonOpen' : ''} >
        Contact us
      </AnimatedButton>

      <div ref={menuRef} className={styles.boxMenu} >
                <Menu isMenuOpen={isMenuOpen} />
        </div>
        </nav>
    );
};

export default Nav;
