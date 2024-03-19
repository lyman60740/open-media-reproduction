import React, { useRef, useEffect } from 'react';
import styles from './Menu.module.scss';
import AnimatedButton from '../Button/AnimatedButton';
import gsap from 'gsap';

// Définition de l'interface pour les éléments du menu
interface MenuItem {
    title: string;
    url: string;
}

// Mise à jour du tableau des éléments du menu pour inclure les URLs
const menuItems: MenuItem[] = [
    { title: "About", url: "/about" },
    { title: "Campaigns", url: "/campaigns" },
    { title: "Insights", url: "/insights" },
    { title: "Locations", url: "/locations" },
    { title: "Spec Sheets", url: "/spec-sheets" },
];

interface MenuProps {
    isMenuOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ isMenuOpen }) => {
    // Tableau de références pour stocker les références de chaque ligne
    const lineRefs = useRef<Array<React.MutableRefObject<HTMLDivElement>>>([]);

    useEffect(() => {
        // Initialiser les références avec des éléments vides
        lineRefs.current = menuItems.map(() => React.createRef<HTMLDivElement>());
    }, [menuItems.length]);

    // Fonction pour gérer l'animation de la ligne
    const handleHover = (index: number) => {
        if (lineRefs.current[index].current) {
            gsap.to(lineRefs.current[index].current, { scaleX: 1, duration: 0.5, transformOrigin: "left"});
        }
    };

    // Fonction pour gérer la fin de l'animation de la ligne
    const handleHoverOut = (index: number) => {
        if (lineRefs.current[index].current) {
            gsap.to(lineRefs.current[index].current, { scaleX: 0, duration: 0.5, transformOrigin: "right"});
        }
    };

    return (
        <div className={styles.menu}>
            <div className={styles.listBox}>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index} onMouseEnter={() => handleHover(index)} onMouseLeave={() => handleHoverOut(index)}>
                            <a href={item.url}>{item.title}</a>
                            <div ref={lineRefs.current[index]} className={styles.line}></div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.rightSide}>
                <div className={styles.rightSide_top}>
                    <p>Featured:</p>
                    <a href='#' className={styles.imgBox}></a>

                </div>
                <AnimatedButton className={isMenuOpen ? 'buttonOpen' : ''} >
                    Open launches one of the North West’s biggest OOH opportunities with BOXPARK
                </AnimatedButton>
            </div>
        </div>
    );
};

export default Menu;
