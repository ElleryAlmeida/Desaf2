import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/ElleryAlmeida/jsondesafio/db'
})

export default api;
