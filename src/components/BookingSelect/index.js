import React, { useState } from 'react';
import styles from './index.module.css'; // Import your CSS module

export const BookingSelect = ({ options = [{ option_name: 'option1', price: '50' }] }) => {
    const [selectedOption, setSelectedOption] = useState('option1');
    const [totalPrice, setTotalPrice] = useState(50); // Default price for option1

    const handleOptionClick = (option, price) => {
        setSelectedOption(option);
        setTotalPrice(price);
    };

    return (
        <div className={styles.selectionMenu}>
            <div className={styles.options}>
                {options.map((o, i) => <Option key={i} {...o} {...{ handleOptionClick, selectedOption }} />)}

                <div
                    className={`${styles.option} ${selectedOption === "Custom" ? styles.selected : ''}`}
                    onClick={() => handleOptionClick("Custom", 0)}
                >
                    Custom option
                </div>
            </div>
            <div className={styles.totalPrice}>Total Price: £{totalPrice}</div>
        </div>
    );
};

const Option = ({ option_name, price, handleOptionClick, selectedOption }) => {
    return (
        <div
            className={`${styles.option} ${selectedOption === option_name ? styles.selected : ''}`}
            onClick={() => handleOptionClick(option_name, price)}
        >
            {option_name} - <span className={styles.bold}>£{price}</span>
        </div>
    )
}