import { useState, useEffect } from 'react'
import axios from 'axios'
import st from './../app.module.css'

import { urlApi } from '../helpers/urlApi'

export const Login = ({ setStep, setUserName }) => {

    const [names, setNames] = useState([])

    const redirectStep1 = (name) => {
        setUserName({ user: name, secret: '' })
        setStep(1)
    }
  
    useEffect(() => {
        axios.get(urlApi + '/names').then(res => setNames(res.data.pendingNamesforChoose))
    }, [])

    return (
        <div className={st.app}>

            <div className={st.app__form} onSubmit={redirectStep1}>

                <select onChange={e => redirectStep1(e.target.value)}>
                    <option value="0">Selecciona tu Nombre</option>
                    {
                        names.map(user => <option value={user} key={user}>{user}</option>)
                    }
                </select>
              
            </div>

        </div>
    )
}
