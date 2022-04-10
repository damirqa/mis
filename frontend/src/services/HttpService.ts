import axios from "axios";
import app_config from '../config.json'
import Toast from "../components/common/toast/Toast";
import DangerIcon from "../components/common/icons/DangerIcon";


const $api = axios.create({
    withCredentials: true,
    baseURL: app_config.API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default $api;

// axios.interceptors.response.use(null, error => {
//     const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
//
//     if (!expectedError) {
//         console.log("Logging the error", error);
//         return <Toast id='unexpected_error' message='An unexpected error occurred.' icon={DangerIcon}/>
//     }
//     return Promise.reject(error);
// });

// function setJwt(jwt) {
//     axios.defaults.headers.common['x-auth-token'] = jwt;
// }
//
// export default {
//     get: axios.get,
//     post: axios.post,
//     put: axios.put,
//     delete: axios.delete,
//     setJwt,
// }