import React, {useEffect} from 'react';
import styles from './Footer.module.scss';
import AnimatedButton from '../../components/Button/AnimatedButton';
import { gsap } from 'gsap';


const Footer: React.FC = () => {

    useEffect(() => {
            
            
        }, []);
        
    return (
        <div className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.top_left}>
                    <img src="https://openmedia.uk.com/om_icon.png" alt="" />
                    <p>We'd love to hear from you.</p>
                </div>
                <div className={styles.top_right}>
                    <AnimatedButton className={styles.buttonNumber}>
                        0151 372 0217
                    </AnimatedButton>
                    <AnimatedButton>
                        enquiries@openmedia.uk.com
                    </AnimatedButton>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottom_left}>
                    <div className={styles.list}>
                        <h4>Liverpool</h4>
                        <ul>
                            <li>Open Media</li>
                            <li>Royal Liver Building</li>
                            <li>Pier Head</li>
                            <li>Liverpool</li>
                            <li>L3 1HU</li>
                        </ul>
                    </div>
                    <div className={styles.list}>
                        <h4>London</h4>
                        <ul>
                            <li>Open Media</li>
                            <li>9-11 Richmond Buildings</li>
                            <li>Soho</li>
                            <li>London</li>
                            <li>W1D 3HF</li>
                        </ul>
                    </div>
                    <div className={styles.list}>
                        <h4>Manchester</h4>
                        <ul>
                            <li>Open Media</li>
                            <li>Blackfriars House</li>
                            <li>St Marys</li>
                            <li>Parsonage</li>
                            <li>M3 2JA</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.bottom_right}>
                    <div className={styles.bottom_right_top}>
                        <div className={styles.list}>
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="">Campaigns</a></li>
                                <li><a href="">Insights</a></li>
                                <li><a href="">Contact Us</a></li>
                                <li><a href="">BCorp</a></li>
                                <li><a href="">Jobs</a></li>
                            </ul>
                        </div>
                        <div className={styles.list}>
                            <h4>Social Media</h4>
                            <ul>
                                <li><a href="">Instagram</a></li>
                                <li><a href="">LinkedIn</a></li>
                                <li><a href="">X</a></li>
                                <li><a href="">YouTube</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.bottom_right_bottom}>
                        <a href="">Privacy Policy</a>
                        <span>Developed by <a href="https://lyman.fr/">Lyman</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;