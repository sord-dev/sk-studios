import React from 'react';
import styles from './index.module.css'; // Import your CSS module
import Link from 'next/link';
import Image from 'next/image';

export const Hero = () => {
    return (
        <header className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    {/* Set max-width and max-height for the Image component */}
                    <div className={styles.logoContainer}>
                        <Image
                            src={"/sk-logo-nbg.png"}
                            width={320}
                            height={320}
                            alt='SK Productions Logo'
                            sizes='(max-width: 886px) 340px, 400px'
                            draggable='false'
                        />
                    </div>

                    <h1 className={styles.logoText}>SK Studios</h1>

                    <Link href={'/book'}><button className={styles.ctaButton}>Book a session</button></Link>
                </div>
            </div>
            <div className={styles.heroContact}>
                <Link href={'mailto:skproductions@gmail.com'}><p className={styles.contactNumber}>Contact us: skproductions@gmail.com</p></Link>
            </div>
        </header>
    );
};
