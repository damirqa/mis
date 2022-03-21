import http from "./HttpService";
import config from "../config.json"
import jwtDecode from "jwt-decode";

const authUrl = config.api_url + '/auth';
const tokenKey = 'token';

http.setJwt(getJwt());

export async function registration(email, password, confirm_password) {
    return await http.post(authUrl + '/register', {email, password, confirm_password})
}

export async function login(email, password) {
    return await http.post(authUrl + '/login', { email, password });
    //localStorage.setItem(tokenKey, jwt.token);
}

export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    } catch (ex) {
        return null;
    }
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}

export default {
    registration,
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt
}