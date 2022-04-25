import {AuthAction, AuthActionTypes} from "../types/auth";
import {Dispatch} from "redux";
import {AuthLogin} from '../modules/authentication/request/AuthLogin'
import AuthService from "../services/AuthService";

export const login = (data: AuthLogin) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.FETCH_AUTH_DATA})
            const response = await AuthService.login(data)
            dispatch({type: AuthActionTypes.FETCH_AUTH_DATA_SUCCESS, payload: response})
            localStorage.setItem('token', response.accessToken)
        }
        catch (e) {
            dispatch({type: AuthActionTypes.FETCH_AUTH_DATA_ERROR, payload: e?.response?.data?.message})
        }
    }
}

export const verifyAuthentication = ()  => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.FETCH_AUTH_DATA})
            const response = await AuthService.verify()
            dispatch({type: AuthActionTypes.FETCH_AUTH_DATA_SUCCESS, payload: response})
            localStorage.setItem('token', response.accessToken)
        }
        catch (e) {
            dispatch({type: AuthActionTypes.FETCH_AUTH_DATA_ERROR, payload: e?.response?.data?.message})
        }
    }
}