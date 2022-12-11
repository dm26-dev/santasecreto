import st from './../app.module.css'

export const Secret = ({ user }) => {
    return (
        <div className={st.final}>
            <div className={st.final__final}>
                <img src="./gifarbol.gif" alt="" />
                <p>{user}</p>
            </div>
        </div>
    )
}
