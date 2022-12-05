import { useState, useEffect } from 'react'

import { getSecretName } from './../functions/getSecretName'

import st from './../app.module.css'

export const Final = () => {

    const [counter, setCounter] = useState(30)
    const [friend, setFriend] = useState('')

    useEffect(() => {

        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter - 1);
        }, 1000);

        if (counter === 0) {
            clearInterval(interval);
            setFriend(getSecretName())
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
