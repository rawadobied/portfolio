import axios from "axios";

const BaseUrl = ''
let token = 'rawad'
const AxiosInstance = axios.create({

    baseURL: BaseUrl,
    headers: {
        Authorization: `Berer ${token}`
    }
});


AxiosInstance.interceptors.response.use(async res => {

    return res;
})

export default AxiosInstance;
