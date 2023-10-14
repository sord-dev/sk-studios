import React, { useState, useContext, createContext, useEffect } from 'react';

const MSFContext = createContext();

export const MSFProvider = ({ components = [], children }) => {
    const [stage, setStage] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [formHistory, setFormHistory] = useState([])

    const stepTo = (i, required) => {
        if (stage >= i) {
            setStage(i)
        } else {
            if (required && !formHistory[stage]?.completed) {
            } else {
                setStage(i)
            }
        }
    }

    const stages = { stage, stepTo };

    useEffect(() => {
        // Add a delay to allow the component to be removed from the DOM and then re-added
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 50); // Adjust the delay as needed

        // Clear the timeout if the component unmounts or when the stage changes
        return () => clearTimeout(timeout);
    }, [stage]);

    return (
        <MSFContext.Provider value={{ stages }}>
            {children}
        </MSFContext.Provider>
    );
};

export const useMSF = () => useContext(MSFContext);