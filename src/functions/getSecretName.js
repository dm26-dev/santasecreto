import axios from 'axios'

import { urlApi } from '../helpers/urlApi'

export const getSecretName = () => {

    axios.get(urlApi + '/names').then(res => {
        const data = res.data.usersNames
        const dataAleatorio = data[Math.floor(Math.random() * data.length)]
        console.log("dataAleatorio", dataAleatorio)
        return dataAleatorio
    })


} 