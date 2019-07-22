const axios = require('axios');
axios.defaults.baseURL = 'https://dictionaryapi.com/api/v3/references/collegiate/json/';

const key = process.env.API_KEY_REFERENCE;

axios.interceptors.request.use( config => {
    config.params = { key: key }
    return config
})

const _ = require('lodash');

module.exports = { axios }; 