import { useState, useEffect } from 'react'
import axios from 'axios'
import st from './../app.module.css'

import { urlApi } from '../helpers/urlApi'

export const Login = ({ setStep, setUserName }) => {

    const [names, setNames] = useState([])

    const redirectStep1 = (name) => {
        setUserName(name)
        setStep(1)
    }

    // PASAR A UNA URL DE VERCEL DESPLEGADO
    // MIENTRAS URL O LOCALHOST
    useEffect(() => {
        axios.get(urlApi + '/names').then(res => setNames(res.data.usersNames))
    }, [])

    return (
        <div className={st.app}>

            <div className={st.app__form} onSubmit={redirectStep1}>

                <select onChange={e => redirectStep1(e.target.value)}>
                    <option value="0">Escojer Participante</option>
                    {
                        names.map(user => <option value={user} key={user}>{user}</option>)
                    }
                </select>
              
            </div>

        </div>
    )
}
