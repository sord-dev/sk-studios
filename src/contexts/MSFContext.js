import React, { useState, useContext, createContext, useEffect } from 'react';

const MSFContext = createContext();

export const MSFProvider = ({ components = [], children }) => {
    const [stage, setStage] = useState(0);
    const [formHistory, setFormHistory] = useState([]);
    const [error, setError] = useState(null)

    const stepTo = (i, required) => {
        setError(null)
        if (stage >= i) {
            setStage(i)
        } else {
            if (required && !formHistory[stage]?.completed) {
                setError('Must choose an option to proceed.')
            } else {
                setStage(i)
            }
        }
    }

    const stages = { stage, stepTo, error };
    const history = { state: formHistory, update: (stage, option) => setFormHistory(prev => [...prev, { stage, option, completed: true }]) }

    return (
        <MSFContext.Provider value={{ stages, history }}>
            {children}
        </MSFContext.Provider>
    );
};

export const useMSF = () => useContext(MSFContext);