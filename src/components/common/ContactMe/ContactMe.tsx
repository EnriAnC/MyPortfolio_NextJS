import { useEffect, useRef, useState } from 'react'
import styles from './ContactMe.module.css'

const ContactMe: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
        const modal = document.getElementById('contact_modal');
        const msgicon = document.getElementById('msg-icon');
        console.log(modal)
        if (modal){
            if (showModal){
                modal.style.display = 'flex'
                
                modal.animate([{clipPath: 'circle(0% at calc(1rem + 25px) calc(100vh - 1rem - 25px))'}, {clipPath: 'circle(150% at calc(1rem + 25px) calc(100vh - 1rem - 25px))'}], { duration: 350,  fill:'forwards'})
                msgicon!.classList.add('fill-black')

            } else {
                modal.animate([{clipPath: 'circle(150% at calc(1rem + 25px) calc(100vh - 1rem - 25px))'}, {clipPath: 'circle(0% at calc(1rem + 25px) calc(100vh - 1rem - 25px))'}], { duration: 350,  fill:'forwards'})
                // msgicon!.animate({fill: '#a6a98f43'}, {duration: 350,  fill:'forwards'})
                msgicon!.classList.remove('fill-black')
            }
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
          
            <div className={ styles.contact_modal } id='contact_modal'>
                <form className={ styles.contact_form } action="https://formsubmit.co/enriqueansa@gmail.com" method="POST" target="_blank">

                    <h3>Enviame un Mensaje!</h3>
                    <h5 style={{fontSize: ".75rem", zIndex: 10, color:"darkgray"}}>Este formulario se envia a traves de https://formsubmit.co/</h5>
                    
                    <input type="text" required name="name" 
                        placeholder="Nombre Completo" 
                        title="El Nombre solo acepta letras sin espacios"
                        pattern="^([A-Za-z0-9]){1,50}$" />
                
                    
                    <input type="email" required name="correo" 
                        placeholder="Email" 
                        title="Email incorrecto"
                        pattern='/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i' />
                    
                    <textarea name="comment"
                        placeholder="Escribe tus comentarios"
                        required
                        data-pattern="^(\n|.){1,255}$"></textarea>
                    
                    <input type="submit" value="Enviar" className={ styles.btn_submit } />
                
                </form>
            </div>
        
        </>
        
    )
}

export default ContactMe