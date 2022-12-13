import { useState, useEffect } from 'react'
import axios from 'axios'
import { urlApi } from '../helpers/urlApi'
import st from './../app.module.css'

export const Final = ({ userName }) => {

    const [counter, setCounter] = useState(30)
    const [friend, setFriend] = useState('')

    useEffect(() => {

        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter - 1);
        }, 1000);

        if (counter === 0) {
            clearInterval(interval);

            axios.get(urlApi + '/pendientes').then(res => {

                const data = res.data.selectedNames
                const filterData = [...data].filter(user => user !== userName.user)

                const secret = filterData[Math.floor(Math.random() * filterData.length)]
                setFriend(secret)
                const newData = { name: userName.user, enabled: false, secretSanta: secret }
           
                axios.post(urlApi + '/usersdb', newData).then(res => {
                    localStorage.setItem('santasecreto', JSON.stringify({ user: userName.user, secret }))
                })

            })

        }

        return () => clearInterval(interval);

    }, [counter]);


    return (
        <div className={st.final}>

            {
                counter === 0
                    ? <div className={st.final__final}>
                        <img src="./gifarbol.gif" alt="" />
                        <p>{friend}</p>
                    </div>
                    : <h4 className={st.final__number}>{counter}</h4>
            }

        </div>
    )
}
