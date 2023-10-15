import React, { useEffect, useState } from 'react';
import styles from './index.module.css'; // Import your CSS module

export function Services({ data }) {
    const [services, setServices] = useState([]);

    useEffect(() => {
        if (data) {
            setServices(data);
        }
    }, [data]);

    return (
        <div className={styles.servicesContainer}>
            {services.length > 0 ? (
                services.map((service) => (
                    <div className={styles.serviceItem} key={service.id}>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        <p className={styles.serviceDescription}>{service.description}</p>
                    </div>
                ))
            ) : (
                'loading'
            )}
        </div>
    );
}
