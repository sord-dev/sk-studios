import React, { useState, useContext, createContext, useEffect } from 'react';

const MSFContext = createContext();

export const MSFProvider = ({ children }) => {
    const [stage, setStage] = useState(0);
    const [formHistory, setFormHistory] = useState([]);
    const [error, setError] = useState(null)

    const resetStage = () => setStage(0);
    const updateStage = (newStage) => setStage(newStage);

    const stepTo = (i, required) => {
        setError(null);

        const shouldResetStage = stage === 2; // if stage is custom form, reset
        const shouldUpdateStage = !required || formHistory[stage]?.completed || stage > i; // if form stage needs is required and hasn't been completed

        if (shouldResetStage) {
            resetStage();
            setFormHistory([])
        } else if (shouldUpdateStage) {
            updateStage(i);
        } else {
            setError('Must choose an option to proceed.');
        }
    };

    const stages = {
        stage,
        stepTo,
        error,
        reset: () => { setFormHistory([]); setStage(0); setError(null) }
    };

    const history = {
        state: formHistory,
        update: (stage, option) => setFormHistory(prev => [...prev, { stage, option, completed: true }])
    }

    return (
        <MSFContext.Provider value={{ stages, history }}>
            {children}
        </MSFContext.Provider>
    );
};

export const useMSF = () => useContext(MSFContext);