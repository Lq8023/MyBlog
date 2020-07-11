import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'https://result.eolinker.com/ZiF9n8829d2320535551d98661202db110eef198797c4df?uri=',
        timeout: 5000
    })
    return instance(config)
}