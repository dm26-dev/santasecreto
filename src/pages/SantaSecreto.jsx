import st from './../app.module.css'

export const SantaSecreto = ({ userName, setStep }) => {
    
    return (
        <div className={st.santasecreto}>
            <h4>Santa Secreto</h4>
            <br />
            <p>
                Hola <span>{userName} </span> en esta Navidad estas invitado a una
                celebracion de   <span>Navidad en Familia</span>
            </p>
            <p>El Regalo debe de ser de <span>$30.000</span></p>
            <p>
                Te esperamos este 24 de Diciembre a las <span>7:00 pm</span>
            </p>
            <p><span>No olvides tu regalo ;D</span></p>
            <p>Ahora si llego tu turno de escojer tu <span>Santa Secreto</span> </p>
            <p className={st.alert}>Solo puedes intentarlo una vez </p>

            <div className={st.santasecreto__button}>
                <button onClick={() => setStep(3)}>Escojer Santa Secreto</button>
            </div>

        </div>
    )
}
