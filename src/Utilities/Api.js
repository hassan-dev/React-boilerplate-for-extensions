import Constants from './Constants';
import axios from 'axios'
export default function api(path, method, params, token) {
    return axios({
        method: method,
        url: `${Constants.apiBaseUrl}${path}`,
        ...(params && { data: params })
    })
        .then((response) => response).catch((error) => error);
}


