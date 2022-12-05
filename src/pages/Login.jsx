import st from './../app.module.css'

export const Login = ({ setStep, userName, setUserName }) => {

    const redirectStep1 = (e) => {
        e.preventDefault()
        setStep(1)
    }

    return (
        <div className={st.app}>

            <form className={st.app__form} onSubmit={redirectStep1}>

                <input
                    type="text"
                    placeholder='Ingresa Tu Nombre'
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />

            </form>

        </div>
    )
}
