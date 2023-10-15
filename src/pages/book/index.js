import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css';
import { BookingSelect, Navbar, Calandar, MSF, Footer, SEO, CustomForm } from '@/components';
import { useMSF } from '@/contexts/MSFContext';
import options from '../../config/session-options.json';

const BookingPreview = () => {
    const { stages, history } = useMSF();
    const [selectedOption, setSelectedOption] = useState(null);

    const selectOptionAndNavigate = (option, step) => {
        setSelectedOption(option);
        history.update(stages.stage, option);
        stages.stepTo(step);
    };

    const handleOptionClick = (option) => {
        if (option.option_name === 'Custom Studio Session') {
            selectOptionAndNavigate(option, 2);
        } else {
            selectOptionAndNavigate(option, 1);
        }
    };

    const components = [
        {
            render: <BookingSelect key={"stage-1"} options={options} handleOptionClick={handleOptionClick} selectedOption={selectedOption} />,
            required: true
        },
        {
            render: <Calandar key={"stage-2"} selectedOption={selectedOption} />,
            required: true
        },
        {
            render: <CustomForm />,
            required: false,
            ethemeral: true
        }
    ];

    useEffect(() => {
        stages.reset()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <SEO title="SK Studios - Booking a Session" description="Your custom description here." />
            <Navbar />
            <main className={styles.container}>
                <MSF components={components} stages={stages} />
            </main>
            <Footer />
        </>
    );
};

export default BookingPreview;
