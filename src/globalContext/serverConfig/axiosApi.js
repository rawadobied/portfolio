import {Serverpath} from './paths'
import AxiosInstance from "../axiosInstance";



export async function _setVisitor(id,device) {
    const formData = new FormData()
    await formData.append('browserId', id.toString())
    await formData.append('device', JSON.stringify(device))
    return await AxiosInstance.post(`${Serverpath.server}/api/setVisitor`, formData, {
        headers: {
            // "Access-Control-Allow-Origin": "http://localhost:3000",
            // 'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'multipart/form-data'
        },
        withCredentials: true,
    })
}
export async function _setRate(data) {
    return await AxiosInstance.post(`${Serverpath.server}/api/setRate`, data, {
        headers: {
            // "Access-Control-Allow-Origin": "http://localhost:3000",
            // 'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'multipart/form-data'
        },
        withCredentials: true,
    })
}

export async function _getRates(data) {
    return await AxiosInstance.get(`${Serverpath.server}/api/getRates`, {
        headers: {
            // "Access-Control-Allow-Origin": "*",
            // 'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'multipart/form-data'
        },
        withCredentials: true,
    })
}
export async function _sendMessage(data) {
    return await AxiosInstance.post(`${Serverpath.server}/api/sendMessage`, {data},{
        headers: {
            // "Access-Control-Allow-Origin": "http://localhost:3000",
            // 'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'multipart/form-data'
        },
        withCredentials: true,
    })
}
export async function _sendClick(data) {
    return await AxiosInstance.post(`${Serverpath.server}/api/sendClick`, {data},{
        headers: {
            // "Access-Control-Allow-Origin": "http://localhost:3000",
            // 'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'multipart/form-data'
        },
        withCredentials: true,
    })
}
export async function _getStatistics(){
    return await AxiosInstance.get(`${Serverpath.server}/api/getStatistics`,{
        headers: {
            // "Access-Control-Allow-Origin": "*",
            // 'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'multipart/form-data'
        },
        withCredentials: true,
    })

}
export async function _getGoogleKey(){
    return await AxiosInstance.get(`${Serverpath.server}/api/googleKey`,{
        headers: {
            // "Access-Control-Allow-Origin": "*",
            // 'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'multipart/form-data'
        },
        withCredentials: true,
    })

}
export async function _setVisitorName(data){
    return await AxiosInstance.post(`${Serverpath.server}/api/setVisitorName`,{data},{
        headers: {
            // "Access-Control-Allow-Origin": "http://localhost:3000",
            // 'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'multipart/form-data'
        },
        withCredentials: true,
    })

}

export async function _setAboutMeWorking(data){
    return await AxiosInstance.post(`${Serverpath.server}/api/setAboutMeWorking`,{data},{
        headers: {
            // "Access-Control-Allow-Origin": "http://localhost:3000",
            // 'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'multipart/form-data'
        },
        withCredentials: true,
    })

}
export async function _setMyExperience(data){
    return await AxiosInstance.post(`${Serverpath.server}/api/setMyExperience`,{data},{
        headers: {
            // "Access-Control-Allow-Origin": "http://localhost:3000",
            // 'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'multipart/form-data'
        },
        withCredentials: true,
    })

}
export async function _getLastUpdates(){
    return await AxiosInstance.get(`${Serverpath.server}/api/getLastUpdates`,{
        headers: {
            // "Access-Control-Allow-Origin": "*",
            // 'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'multipart/form-data'
        },
        withCredentials: true,
    })

}
