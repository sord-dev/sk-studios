import React from 'react';
import styles from './index.module.css'; // Import your CSS module

export const Navbar = () => {
    return (
        <header className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logoSection}>
                    <div className={styles.logo}>
                        <h1 className={styles.logoText}>SK Studios</h1>
                        <p className={styles.subtitle}>Wys here my bro</p>
                    </div>
                </div>
                <div className={styles.contactSection}>
                    <p className={styles.contactNumber}>Contact us: skproductions@gmail.com</p>
                </div>
            </div>
        </header>
    );
};

