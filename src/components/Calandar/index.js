import React, { useEffect, useState } from 'react'
import { InlineWidget } from "react-calendly";
import styles from './index.module.css'

export function Calandar({ selectedOption }) {
    const [url, setUrl] = useState("");

    useEffect(() => {
        if (selectedOption?.url) {
            setUrl(selectedOption?.url)
        }
    }, [selectedOption])

    return (
        <div className={styles.calandar}>
            {selectedOption?.url ? <InlineWidget url={url} LoadingSpinner={"true"} /> : 'loading'}
        </div>
    )
}

