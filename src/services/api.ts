import axios from 'axios';

const api = axios.create({
    baseURL: 'https://github.com/ElleryAlmeida/Desaf2/blob/main/server.json'
})

export default api;
