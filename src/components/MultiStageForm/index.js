import React, { useEffect, useState } from 'react';
import styles from './index.module.css';

export const MSF = ({ stages, components }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Add a delay to allow the component to be removed from the DOM and then re-added
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 50); // Adjust the delay as needed

        // Clear the timeout if the component unmounts or when the stage changes
        return () => clearTimeout(timeout);
    }, [stages]);

    return (
        <div className={`${styles.msf} ${isVisible ? styles.show : ''}`}>
            <div className={styles.controls}>
                {components.map((c, i) => !c.ethemeral ? <StageDot key={i} {...{ i, stages, c }} /> : null)}
            </div>

            <p className={styles.error}>
                {stages?.error ? stages.error : null}
            </p>

            {components[stages.stage].render}
        </div>
    );
};

const StageDot = ({ i, c, stages }) => {
    return (
        <div onClick={() => stages.stepTo(i, c.required)} className={stages?.stage === i ? `${styles.dot} ${styles.selected}` : styles.dot}></div>
    )
}