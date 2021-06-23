import axios from 'axios'


let baseUrl = 'http://127.0.0.1:8000/'

const Axios = axios.create({
    baseURL: baseUrl
})

Axios.defaults.baseURL = baseUrl
Axios.defaults.headers.post['Content-type'] = 'application/json'

export default Axios
