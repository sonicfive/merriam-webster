import axios from "axios";
axios.defaults.baseURL = 'https://dictionaryapi.com/api/v3/references/collegiate/json/';

const key = process.env.API_KEY_REFERENCE;

axios.interceptors.request.use( config => {
    config.params = { key: key }
    return config
})

export default axios;