import st from './../app.module.css'
import { BsReplyAll } from "react-icons/bs";

export const SantaSecreto = ({ userName, setStep }) => {

    return (
        <div className={st.santasecreto}>
            <h4>Santa Secreto <BsReplyAll onClick={() => setStep(0)} /></h4>
            <br />
            <p>
                Hola <span>{userName.user}</span>, esta fecha esta llena de amor y deseos,
                te invitamos en esta <span>Navidad</span> a levantar nuestras copas en honor a
                todos los momentos que nos han fortalezido como <span>Familia</span>
            </p>
            <p>
                Te esperamos este 24 de Diciembre a las <span>7:00 pm </span>
                en la Calle 23a N 55 - 135 Cabañas
            </p>
            <p>Valor del detalle <span>$30.000</span></p>
            {/* <p><span>No olvides tu regalo ;D</span></p> */}
            <p>Ahora si llego tu turno de escojer tu <span>Santa Secreto</span> </p>
            <p className={st.alert}>Solo puedes intentarlo una vez </p>
            <div className={st.santasecreto__button}>
                <button onClick={() => setStep(2)}>Escojer Santa Secreto</button>
            </div>
        </div>
    )
}
