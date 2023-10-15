import React from 'react';
import styles from './index.module.css'; // Import your CSS module
import Link from 'next/link';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h3 className={styles.footerHeading}>Contact Us</h3>
                    <p className={styles.footerText}>123 Studio Lane, Music City</p>
                    <p className={styles.footerText}>Phone: +1 234 567 890</p>
                    <Link href={'mailto:skproductions@gmail.com'}><p className={styles.footerText}>Email: skproductions@gmail.com</p></Link>
                </div>
                <div className={styles.footerSection}>
                    <h3 className={styles.footerHeading}>Links</h3>
                    <ul className={styles.footerList}>
                        <Link href={'/'}><li className={styles.footerListItem}>Home</li></Link>
                        <Link href={'/book'}><li className={styles.footerListItem}>Book</li></Link>
                    </ul>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p className={styles.footerText}>&copy; 2023 SK Productions. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
