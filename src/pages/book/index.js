import { useState } from 'react';
import styles from '@/styles/Home.module.css'
import { BookingSelect, Navbar, Calandar, MSF, Footer, SEO } from '@/components'
import { useMSF } from '@/contexts/MSFContext';

const options = [
    { option_name: '1hr Studio Session', description: 'test', price: '20', url: "https://calendly.com/stefansyrett17/studio-session-1hr" },
    { option_name: '2hr Studio Session', description: 'test', price: '40', url: "https://calendly.com/stefansyrett17/2hr-studio-session" },
    { option_name: 'Custom Studio Session', description: 'test', price: '0' },
]

export default function BookingPreview() {
    const { stages, history } = useMSF();
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => { // define handling a booking option click
        setSelectedOption(option);
        history.update(stages.stage, option)
        stages.stepTo(1)
    };

    const components = [ // provide list of components to utilize in the MSF component
        {
            render: <BookingSelect key={"stage-1"} {...{ options, handleOptionClick, selectedOption }} />, // provide the components with their relevant props
            required: true
        },
        {
            render: <Calandar key={"stage-2"} {...{ selectedOption }} />,
            required: true
        }
    ];

    return (
        <>
            <SEO title="SK Studios - Booking a Session" description="Your custom description here." />

            <Navbar />

            <main className={styles.container}>
                <MSF {...{ components, stages }} />
            </main>

            <Footer />
        </>
    )
}
