import axios from 'axios'

const ClienteAxios = axios.create({
    baseURL: "https://beer24-clon.herokuapp.com"
})

export default ClienteAxios