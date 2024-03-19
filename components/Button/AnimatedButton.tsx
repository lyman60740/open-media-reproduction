// AnimatedButton.jsx
import React, { useRef, ButtonHTMLAttributes } from 'react';
import styles from './AnimatedButton.module.scss';
import gsap from 'gsap';

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, className, ...props }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const $duration = 0.4;
  const $ease = "sine.out";
  const buttonClassName = `${styles.button} ${className}`;

    const handleMouseEnter = () => {
        if(buttonRef.current === null) return;

        gsap.to(buttonRef.current.children[0], {
        duration: $duration,
        y: "-200%",
        ease: $ease,
        overwrite: true,
        });
        gsap.to(buttonRef.current.children[1], {
            duration: $duration,
            y: 0,
            ease: $ease,
            overwrite: true,
            });
    };

    const handleMouseLeave = () => {
        if(buttonRef.current === null) return;

        gsap.to(buttonRef.current.children[0], {
            duration: $duration,
            y: 0,
            ease: $ease,
            overwrite: true,
            });
            gsap.to(buttonRef.current.children[1], {
                duration: $duration,
                y:"200%",
                ease: $ease,
                overwrite: true,
                });
    };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={buttonClassName}
      {...props}
    >
        <span>{children}</span>
        <span>{children}</span>
      
    </button>
  );
};

export default AnimatedButton;
