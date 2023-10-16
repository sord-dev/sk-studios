import React from 'react';
import styles from './index.module.css'; // Import your CSS module
import Link from 'next/link';
import Image from 'next/image';



export const Hero = () => {
    return (
        <header className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <Image src={"/sk-logo-nbg.png"} width={248} height={248} alt='SK Productions Logo' />

                    <h2>test</h2>

                    <Link href={'/book'}><button className={styles.ctaButton}>Book a session</button></Link>
                </div>
            </div>
            <div className={styles.heroContact}>
                <Link href={'mailto:skproductions@gmail.com'}><p className={styles.contactNumber}>Contact us: skproductions@gmail.com</p></Link>
            </div>
        </header>
    );
};
