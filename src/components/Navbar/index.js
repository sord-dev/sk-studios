import React from 'react';
import styles from './index.module.css'; // Import your CSS module
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
    return (
        <header className={styles.navbar}>
            <div className={styles.container}>
                <Link href={'/'}>
                    <div className={styles.logoSection}>
                        <Image src={"https://i.postimg.cc/2V2dtFYP/sk-logo-nbg.png"} width={78} height={78} alt='SK Productions Logo' draggable='false' />
                        <div className={styles.logo}>
                            <h1 className={styles.logoText}>SK Studios</h1>
                            <p className={styles.subtitle}>Wys here my bro</p>
                        </div>
                    </div>
                </Link>
                <div className={styles.contactSection}>
                    <Link href={'mailto:skproductions@gmail.com'}><p className={styles.contactNumber}>Contact us: skproductions@gmail.com</p></Link>
                </div>
            </div>
        </header>
    );
};

