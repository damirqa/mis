import $api from './HttpService';
import {AxiosResponse} from 'axios';
import {AuthLogin} from '../modules/authentication/request/AuthLogin'
import {AuthResponse} from "../modules/authentication/response/AuthResponse";

export default class AuthService {

    static async login(data: AuthLogin): Promise<AxiosResponse<AuthResponse>> {
        return $api.post('/auth/login', data)
    }

    static async registration(email: string, password: string, confirm_password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/register', {email, password, confirm_password})
    }

    static async logout(): Promise<void> {
        return $api.post('/auth/logout')
    }

    static async verify(): Promise<AxiosResponse<AuthResponse>> {
        return $api.get('/auth/refresh-token')
    }
}
