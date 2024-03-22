'use client';
import React, {useEffect, useRef} from 'react';
import { Canvas } from '@react-three/fiber';
import Model2 from '../Model2/Model2';
import { Environment } from '@react-three/drei';
import styles from './Carousel.module.scss';
import AnimatedButton from '../../components/Button/AnimatedButton';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

interface CarouselItem {
    title: string;
    paragraph: string;
    description: string;
    buttonTxt: string;
    image: string;
    image3d: string;
}

const Carousel: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);
    const itemList: CarouselItem[] = [
        {
            title: "People",
            paragraph: "We connect our brands with their target audience by being audience experts.",
            description: "We have a growing team of 22 members, split between our head office in Liverpool’s iconic Royal Liver Building, as well as a national sales team based in London, where the majority of our clients reside.",
            buttonTxt: "Learn more about people",
            image: "https://api.openmedia.uk.com/wp-content/uploads/2024/01/OPEN-Xmas-photo-1030x773.jpg",
            image3d: "https://api.openmedia.uk.com/wp-content/uploads/2024/01/Shape-1-transp_Main_0000_00000-e1705089861653.png"
        },
        {
            title: "Place",
            paragraph: "Our extensive portfolio alongside our in-depth knowledge make us the perfect partner for ambitious brands.",
            description: "We know that our sites are more than just a collection of spaces and screens. we have 5 networks, across 11 key cities that can provide a campaign with coverage and reach across the entire of the UK.",
            buttonTxt: "Discover our places",
            image: "https://api.openmedia.uk.com/wp-content/uploads/2024/02/IMG_2449-1-1030x682.jpg",
            image3d: "https://api.openmedia.uk.com/wp-content/uploads/2024/01/Shape-2-transp_Main_0000_00000-e1705089946540.png"
        },
        {
            title: "Planet",
            paragraph: "We’re incredibly proud to be the first B Corp certified outdoor media owner in the UK & Europe.",
            description: "Our impact on the planet is something we take very seriously and continue to look at ways in which we can have a positive effect on both society and the environment.",
            buttonTxt: "Discover our planet",
            image: "https://api.openmedia.uk.com/wp-content/uploads/2024/01/Group-39.png",
            image3d: "https://api.openmedia.uk.com/wp-content/uploads/2024/01/Shape-3-transp_Main_0000_00000-e1705090000606.png"
        },        
    ]
    useEffect(() => {
            gsap.to(boxRef.current, {
                xPercent: -100,
                ease: "none",
                scrollTrigger: {
                    trigger: carouselRef.current,
                    start: "top top",
                    end: () => `+=${boxRef.current.scrollWidth - carouselRef.current.offsetWidth}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                },
            })

            gsap.to('.image3d', {
                y: -30,
                rotate: 5,
                duration: 3,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
            })
            
        }, []);
        
        return (
            <div ref={carouselRef} className={styles.carousel} id='carousel'>
                <div className={styles.carouselBox} ref={boxRef} id='boxCarousel'>
                {itemList.map((item, index) => (
                    
                    <div key={index} className={styles.carouselItem}>
                        <div className={styles.leftPart}>
                        <h2 className={styles.title}>{item.title}</h2>
                        <p className={styles.paragraph}>{item.paragraph}</p>
                        <p className={styles.description}>{item.description}</p>
                        <AnimatedButton className={styles.blackButton}>
                            {item.buttonTxt}
                        </AnimatedButton>
                        </div>
                        <div className={styles.image} style={{ backgroundImage: `url(${item.image})` }}>

                        </div>
                        
                        <img className='image3d' src={item.image3d} alt={`3D ${item.title}`} />
                    </div>
                ))}
                
                
                    </div>
                    <Canvas style={{background: 'white'}} className='scene' id="sceneBox">
            <directionalLight position={[-30, -3, 3]} intensity={3} />
            <ambientLight intensity={0.3} />
            <Environment files="/medias/envGlass.hdr" />
            <Model2 />
            </Canvas>
            </div>
        );
        
};

export default Carousel;