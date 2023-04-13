import { useEffect, useRef, useState } from 'react'
import styles from './ContactMe.module.css'
import { FormContact } from './Form/Form';
import { Modal } from '../common/Modal/Modal';

const ContactMe: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
        const msgicon = document.getElementById('msg-icon');
        if (showModal){
            msgicon!.classList.add('fill-black')

        } else {
            msgicon!.classList.remove('fill-black')
        }
    }, [showModal])

    const handleSvgClick = () => {
        if (!showModal) setShowModal(true);
        else {
            setShowModal(false)
        }
    };
    return (
        <>
            <div className={ styles.float_msg_icon } onClick={handleSvgClick}>
                <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" id='msg-icon'>
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="layer1"> <path d="M 0 4 L 0 17 L 20 17 L 20 4 L 0 4 z M 1.6621094 5 L 18.337891 5 L 10.376953 11 L 9.6230469 11 L 1.6621094 5 z M 1 5.9335938 L 9.0488281 12 L 10.951172 12 L 19 5.9335938 L 19 15.246094 L 13.533203 11.128906 L 13.53125 11.126953 L 12.701172 11.751953 L 12.703125 11.753906 L 18.337891 16 L 1.6621094 16 L 7.296875 11.753906 L 7.2988281 11.751953 L 6.46875 11.126953 L 6.4667969 11.128906 L 1 15.246094 L 1 5.9335938 z "></path> </g> </g>
                </svg>
            </div>

            <Modal showModal={ showModal }>
                <FormContact />
            </Modal>
        
        </>
        
    )
}

export default ContactMe