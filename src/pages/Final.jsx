import { useState, useEffect } from 'react'
import axios from 'axios'
import { urlApi } from '../helpers/urlApi'
import st from './../app.module.css'

const usersNames = [
    'David', 'Papa David', 'Mama David',
    'Ruddy', 'Papa Ruddy', 'Mama Ruddy', 'Daniel',
    'Diana', 'Alfredo', 'Nana', 'Pipe Hijo Diana',
    'Fanny', 'Sebas', 'Pipe Hijo Fanny',
    'Ricardo', 'Novio Ricardo'
]

export const Final = ({ userName }) => {

    const [counter, setCounter] = useState(16)
    const [friend, setFriend] = useState('')

    useEffect(() => {

        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter - 1);
        }, 1000);

        if (counter === 0) {
            clearInterval(interval);

            axios.get(urlApi + '/names').then(res => {
                const data = res.data.usersNames
                const secret = data[Math.floor(Math.random() * data.length)]
                setFriend(secret)            
                const newData = { name: userName, enabled: false, secretSanta: secret }
                axios.post(urlApi + '/users', newData).then(res => {
                    console.log(res)
                    localStorage.setItem('secret', userName)
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
                    : <h4 className={st.final__number}>{usersNames[counter]}</h4>
            }

        </div>
    )
}
