import $api from './HttpService';
import {AxiosResponse} from 'axios';
import {AuthLogin} from '../modules/authentication/request/AuthLogin'
import {AuthResponse} from "../modules/authentication/response/AuthResponse";

export default class AuthService {

    static async login(dataRequest: AuthLogin): Promise<AuthResponse> {
        const {data} = await $api.post('/auth/login', dataRequest)
        return data
    }

    static async registration(email: string, password: string, confirm_password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/register', {email, password, confirm_password})
    }

    static async logout(): Promise<void> {
        return $api.post('/auth/logout')
    }

    static async verify(): Promise<AuthResponse> {
        const {data} = await $api.get('/auth/refresh-token')
        return data
    }
}
