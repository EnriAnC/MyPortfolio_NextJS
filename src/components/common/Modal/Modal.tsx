import { ReactElement, useEffect, useRef } from 'react'
import styles from './Modal.module.css'

interface ModalProps{
    showModal: boolean;
    children: ReactElement
}

export const Modal = ( {showModal, children} : ModalProps ) => {
    const modalDOM = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        const modal = modalDOM.current
        if (modal){
            if (showModal){
                modal.style.display = 'flex'
                modal.animate([{clipPath: 'circle(0% at calc(1rem + 25px) calc(100vh - 1rem - 25px))'}, {clipPath: 'circle(150% at calc(1rem + 25px) calc(100vh - 1rem - 25px))'}], { duration: 350,  fill:'forwards'})

            } else {
                modal.animate([{clipPath: 'circle(150% at calc(1rem + 25px) calc(100vh - 1rem - 25px))'}, {clipPath: 'circle(0% at calc(1rem + 25px) calc(100vh - 1rem - 25px))'}], { duration: 350,  fill:'forwards'})
            }
        }
        
    }, [showModal])

    return (
        <div className={ styles.modal } ref={modalDOM}>
            {children}
        </div>
    )
}