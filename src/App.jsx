import { useState, useEffect } from 'react'
import axios from 'axios'
import { urlApi } from './helpers/urlApi'
import { Login } from './pages/Login'
import { SantaSecreto } from './pages/SantaSecreto'
import { Final } from './pages/Final'
import { Secret } from './pages/Secret'


export const App = () => {

  const [disabled, setDisabled] = useState(false)
  const [step, setStep] = useState(0)
  const [userName, setUserName] = useState('')

  const [secret, setSecret] = useState('')

  useEffect(() => {

    const getName = localStorage.getItem('secret') || null
    
    if (getName) {

      axios.get(urlApi + '/users').then(res => {
        const users = res.data
        const user = users.find(us => us.name === getName)
        if (!user.enabled) {
          setDisabled(true)
          setSecret(user.secretSanta)
        } else {
          setDisabled(false)
          setSecret('')
          localStorage.clear()
        }
      })

    }

  }, [])

  if (disabled) {
    return <Secret user={secret} />
  }

  return step === 0
    ? <Login setStep={setStep} setUserName={setUserName} userName={userName} />
    : step === 1
      ? <SantaSecreto setStep={setStep} userName={userName} />
      : <Final userName={userName} />
}
