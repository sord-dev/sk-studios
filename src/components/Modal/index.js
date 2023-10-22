import React from 'react';
import styles from './index.module.css'

export const Modal = ({ data, close }) => {
    if (!data?.days || !data?.hours) return null; // Return null when data is not available
    const { days, hours } = data;

    return (
        <div onClick={() => close()} className={styles.modalBackground}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <p onClick={() => close()}>X</p>
                <div className={styles.modalContent}>
                    <h3 className={styles.modalHeading}>Custom Request - {days} days, {hours} hours</h3>

                    <div className={styles.container}>
                        <p className={styles.modalText}>What days would you like to put in this request?</p>

                        <AvailabliltyCallander />

                        <form className={styles.emailForm}>
                            <input className={styles.inputField} type="email" name="email" />
                            <button className={styles.submitButton} type="submit">Confirm</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

const AvailabliltyCallander = () => {
    return (
        <div className={styles.calendar}>
            AvailabliltyCallander
        </div>
    )
}
