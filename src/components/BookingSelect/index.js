import React from 'react';
import styles from './index.module.css'; // Import your CSS module

export const BookingSelect = ({ options = [], handleOptionClick }) => {
    return (
        <div className={styles.selectionMenu}>
            <div className={styles.options}>
                {options?.map((o, i) => <Option key={i} {...o} {...{ i }} handleOptionClick={() => handleOptionClick(o)} />)}
            </div>
        </div>
    );
};

const Option = ({ option_name, price = null, description, handleOptionClick, i }) => {
    return (
        <div className={styles.option} onClick={handleOptionClick} >
            <div className={styles.optionMeta}>
                <div>
                    <h3>{option_name}</h3>
                    <p>{description}</p>
                </div>
            </div> <span className={styles.bold}>£{price}</span>
        </div>
    )
}
