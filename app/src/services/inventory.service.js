import axios from 'axios';
import config from '../config';

export const loadInventories = (callback)=>{
    return axios({
        method:'get',
        url: `${config.api}/api/inventories`,
    }).then(response=>{
        callback(response.data)
    })
}

export const loadAggregations = (term, callback)=>{
    return axios({
        method:'get',
        url: `${config.api}/api/aggregate/${term}`,
    }).then(response=>{
        callback(response.data)
    })
}