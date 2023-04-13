import { useEffect, useRef, useState } from 'react'
import styles from './Form.module.css'

export const FormContact: React.FC = () => {
    const [disabled, setDisabled] = useState<boolean>(false)

    const handleSubmit = (event:React.FormEvent) => {
        setTimeout(()=>{setDisabled(true)}, 0)
        setTimeout(()=>{setDisabled(false)}, 5000)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={ styles.contact_form } action="https://formsubmit.co/enriqueansa@gmail.co" method="POST" target="_blank">

                <h3>Enviame un Mensaje!</h3>
                <h5 style={{fontSize: ".75rem", zIndex: 10, color:"darkgray"}}>Este formulario se envia a traves de https://formsubmit.co/</h5>

                <input type="text" required name="name" 
                    placeholder="Nombre Completo" 
                    title="El Nombre solo acepta letras sin espacios"
                    pattern="^([A-Za-z0-9]){1,50}$" />


                <input type="email" required name="correo" 
                    placeholder="Email" 
                    title="Email incorrecto"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />

                <textarea name="comment"
                    placeholder="Escribe tus comentarios"
                    required
                    data-pattern="^(\n|.){1,255}$"></textarea>

                <input type="submit" value="Enviar" 
                    className={ styles.btn_submit }
                    disabled = { disabled }
                />
            </form>
        </>
    )
}