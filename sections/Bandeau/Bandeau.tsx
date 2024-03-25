import React, {useRef, useEffect} from 'react';
import styles from './Bandeau.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface Props {
    // Define your component's props here
}

const Bandeau: React.FC = () => {
    // Implement your component's logic here
    const bandeauBox = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Créer une timeline avec GSAP
        let tl = gsap.timeline({
            repeat: -1, // Répéter l'animation indéfiniment
            defaults: {ease: "none"} // Appliquer une facilité par défaut à toutes les animations
        });
    
        // Boucle pour créer 10 animations de déplacement de 10%
        for(let i = 1; i <= 5; i++) {
            tl.to(bandeauBox.current, {
                xPercent: -10 * i, // Déplace de -10% à chaque itération
                duration: .4 // Durée de chaque déplacement
            }).to(bandeauBox.current, {
                duration: 2 // Durée du délai entre chaque déplacement
                // Pas de changement de propriétés ici, juste un délai
            });
        }
    }, []);
    

    return (
        <div className={styles.bandeau}>
            <h2>Our partners</h2>
            <div className={styles.bandeauBox} ref={bandeauBox}>
                <div className={styles.stack}>
                <img src="https://api.openmedia.uk.com/wp-content/uploads/2024/01/outsmart.png" alt="partner" />
                <img src="https://api.openmedia.uk.com/wp-content/uploads/2024/01/britishLand-1.png" alt="partner" />
                <img src="https://api.openmedia.uk.com/wp-content/uploads/2024/01/b_lab.png" alt="partner" />
                <img src="https://api.openmedia.uk.com/wp-content/uploads/2024/01/futureproof.png" alt="partner" />
                <img src="https://api.openmedia.uk.com/wp-content/uploads/2024/01/rouyte-1.png" alt="partner" />
                <img src="https://api.openmedia.uk.com/wp-content/uploads/2024/01/savills.png" alt="partner" />
                <img src="https://api.openmedia.uk.com/wp-content/uploads/2024/01/ad.png" alt="partner" />
                <img src="https://api.openmedia.uk.com/wp-content/uploads/2024/01/cbre.png" alt="partner" />
                </div>
                
                <div className={styles.stack}>
                <img src="https://api.openmedia.uk.com/wp-content/uploads/2024/01/outsmart.png" alt="partner" />
                <img src="https://api.openmedia.uk.com/wp-content/uploads/2024/01/britishLand-1.png" alt="partner" />
                <img src="https://api.openmedia.uk.com/wp-content/uploads/2024/01/b_lab.png" alt="partner" />
                <img src="https://api.openmedia.uk.com/wp-content/uploads/2024/01/futureproof.png" alt="partner" />
                <img src="https://api.openmedia.uk.com/wp-content/uploads/2024/01/rouyte-1.png" alt="partner" />
                <img src="https://api.openmedia.uk.com/wp-content/uploads/2024/01/savills.png" alt="partner" />
                <img src="https://api.openmedia.uk.com/wp-content/uploads/2024/01/ad.png" alt="partner" />
                <img src="https://api.openmedia.uk.com/wp-content/uploads/2024/01/cbre.png" alt="partner" style={{marginRight: '0 !important'}} />
                </div>
            </div>
        </div>
    );
};
 
export default Bandeau;