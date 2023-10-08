import React from 'react';
import styles from './index.module.css'; // Import your CSS module
import Link from 'next/link';

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <h1 className={styles.heroTitle}>SK Studios</h1>
                    <p className={styles.heroSubtitle}>Wys here my bro</p>
                    <Link href={'/book'}><button className={styles.ctaButton}>Book a session</button></Link>
                </div>
                <div className={styles.heroContact}>
                    <p className={styles.contactNumber}>Contact us: +1 234 567 890</p>
                </div>
            </div>
        </div>
    );
};
