import {request} from './request'

export const getBanner= (() =>{
    return request({
        url: '/home/banner'
    })
})