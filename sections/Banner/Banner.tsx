import React from 'react';
import styles from './Banner.module.scss';

const Banner: React.FC = () => {
    // Component logic goes here

    return (
        // JSX markup goes here
        <div className={styles.banner}>
            <p>Scroll to explore</p>
        </div>
    );
};

export default Banner;