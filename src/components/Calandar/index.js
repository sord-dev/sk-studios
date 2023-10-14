import React, { useEffect, useState } from 'react'
import { InlineWidget } from "react-calendly";

export function Calandar({ selectedOption }) {
    const [url, setUrl] = useState("");

    useEffect(() => {
        if (selectedOption?.url) {
            setUrl(selectedOption?.url)
        }
    }, [selectedOption])

    return (
        <>
            {selectedOption?.url ? <InlineWidget url={url} LoadingSpinner={"true"} /> : 'loading'}
        </>
    )
}

