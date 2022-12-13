import st from './../app.module.css'

export const Secret = ({ user }) => {
    return (
        <div className={st.final}>
            <div className={st.final__final}>         
                <img src="./gifarbol.gif" alt="" />
                <h1>Eres el Santa Secreto</h1>
                <p>De {user}</p>
                <button onClick={() => window.location.reload()}>Recargar</button>
            </div>
        </div>
    )
}
