import React from 'react';
import styles from './index.module.css'; // Import your CSS module

export const Gallery = ({ pictures }) => {
    return (
        <div className={styles.gallery}>
            {pictures.map(({ imageUrl, id, isDouble }) => (
                <div className={`${styles.galleryItem} ${isDouble ? styles.double : ''}`} key={id}>
                    <img draggable='false' src={imageUrl} alt={`gallery-item-${id}`} className={styles.galleryImage} />
                </div>
            ))}
        </div>
    );
};
