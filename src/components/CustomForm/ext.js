import { useState } from "react";
import { Modal } from "../Modal";

const CustomFormWithModal = ({ CustomForm }) => {
    const [showModal, setShowModal] = useState(true);
    const [result, setResult] = useState(null);

    const submitForm = (data) => {
        setResult(data)
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <>
            {showModal && <Modal data={result} close={closeModal} />}
            <CustomForm setResult={submitForm} />
        </>
    )
}

export default CustomFormWithModal