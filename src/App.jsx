import { useState, useEffect } from 'react'
import axios from 'axios'
import { urlApi } from './helpers/urlApi'
import { Login } from './pages/Login'
import { SantaSecreto } from './pages/SantaSecreto'
import { Final } from './pages/Final'
import { Secret } from './pages/Secret'


export const App = () => {

  const [enable, setEnabled] = useState(false)
  const [step, setStep] = useState(0)
  const [userName, setUserName] = useState('')

  const [secret, setSecret] = useState('')

  useEffect(() => {

    const getName = localStorage.getItem('secret') || null

    console.log("Usuario", getName)

    if (getName) {

      axios.get(urlApi + '/users').then(res => {
        const users = res.data
        const user = users.find(us => us.name === getName)
        if (!user.enabled) {
          setEnabled(true)
          setSecret(user.secretSanta)
        }
      })

    }

  }, [])

  if (enable) {
    return <Secret user={secret} />
  }

  return step === 0
    ? <Login setStep={setStep} setUserName={setUserName} userName={userName} />
    : step === 1
      ? <SantaSecreto setStep={setStep} userName={userName} />
      : <Final userName={userName} />
}
