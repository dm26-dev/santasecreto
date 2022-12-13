import { useState, useEffect } from 'react'
import axios from 'axios'
import { urlApi } from './helpers/urlApi'
import { Login } from './pages/Login'
import { SantaSecreto } from './pages/SantaSecreto'
import { Final } from './pages/Final'
import { Secret } from './pages/Secret'

const getName = JSON.parse(localStorage.getItem('santasecreto')) || { user: '', secret: '' }

export const App = () => {

  const [step, setStep] = useState(0)
  const [userName, setUserName] = useState(getName)

  useEffect(() => {
    localStorage.setItem('santasecreto', JSON.stringify(userName))
  }, [userName])

  useEffect(() => {
    userName.secret ? setStep(4) : setStep(0)

    const userLs1 = JSON.parse(localStorage.getItem('santasecreto'))

    if (userLs1.user.length > 0) {
      axios.get(urlApi + '/names')
        .then(res => {          
          const pendientes = res.data.pendingNamesforChoose
          const userLs = JSON.parse(localStorage.getItem('santasecreto'))
          const validateUser = pendientes.find(user => user === userLs.user)

          if (!validateUser) {
            setStep(4)
          } else {
            setStep(0)
            localStorage.setItem('santasecreto', JSON.stringify({ user: userLs.user, secret: '' }))
          }

        })
    }

  }, [])

  return step === 0
    ? <Login setStep={setStep} setUserName={setUserName} userName={userName} />
    : step === 1
      ? <SantaSecreto setStep={setStep} userName={userName} />
      : step === 2
        ? <Final userName={userName} />
        : <Secret user={userName.secret} />

}