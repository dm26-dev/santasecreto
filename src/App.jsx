import { useState } from 'react'

import { getSecretName } from './functions/getSecretName'

import { Login } from './pages/Login'
import { SantaSecreto } from './pages/SantaSecreto'
import { Final } from './pages/Final'

export const App = () => {

  const [step, setStep] = useState(0)

  const [userName, setUserName] = useState('')

  return step === 0
    ? <Login setStep={setStep} setUserName={setUserName} userName={userName} />
    : step === 1
      ? <SantaSecreto setStep={setStep} userName={userName} />
      : <Final />
}
