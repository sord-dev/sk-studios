import React, { useState } from 'react';
import styles from './index.module.css'; // Import your CSS module

const custom_availability = {
    days: [
        {
            quantity: 2, // measured in days
            description: 'Customize Your Session Over A Day'
        },
        {
            quantity: 3, // measured in days
            description: 'Extended Session Over Two Days'
        },
        {
            quantity: 7, // measured in days
            description: 'Book Studio For A Week'
        }
    ],
    hours: 6
}

export const CustomForm = () => {
    const [days, setDays] = useState(1);
    const [hours, setHours] = useState(1);

    const handleDaysChange = (e) => {
        setDays(parseInt(e.target.value));
    };

    const handleHoursChange = (e) => {
        setHours(parseInt(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format form details as an email content
        const emailContent = `
      Custom Studio Session Request:
      Number of Days: ${days}
      Hours per Day: ${hours}
    `;

        // You can now send this email content to the client or perform any desired action with it
        console.log('Modal: To confirm, this is the request you want? ', emailContent);
    };

    return (
        <div className={styles.selectionMenu}>
            <form onSubmit={handleSubmit}>
                <div className={styles.options}>
                    {custom_availability.days.map((cav, i) =>
                        <Option
                            key={i}
                            description={cav.description}
                            quantity={cav.quantity} days={days}
                            handleDaysChange={handleDaysChange} />
                    )}

                    <div className={styles.optionMeta}>
                        <label>
                            <span className={styles.bold}>Hours per Day:</span>
                            <select className={styles.selectDropdown} value={hours} onChange={handleHoursChange}>
                                {Array.from({ length: custom_availability.hours }, (_, i) => (
                                    <option key={i} value={i + 1}>{i + 1} Hour</option>
                                ))}
                            </select>
                        </label>
                    </div>
                </div>

                <button className={styles.btn} type="submit">Submit Request</button>
            </form>
        </div>
    );
};

const Option = ({ quantity, description, days, handleDaysChange }) => {
    return (
        <div className={`${styles.option} ${days === quantity && styles.selected}`}>
            <label className={styles.optionMeta}>
                <input type="radio" value={quantity.toString()} checked={days === quantity} onChange={handleDaysChange} />
                <div>
                    <h3>{quantity} Day</h3>
                    <p>{description}</p>
                </div>
            </label>
        </div>
    )
}