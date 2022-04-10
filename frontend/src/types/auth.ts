import {AuthResponse} from "../modules/authentication/response/AuthResponse";

export interface AuthState {
    authResponse: null | AuthResponse,
    loading: boolean;
}

export enum AuthActionTypes {
    FETCH_AUTH_DATA = "FETCH_AUTH_DATA",
    FETCH_AUTH_DATA_ERROR = "FETCH_AUTH_DATA_ERROR",
    FETCH_AUTH_DATA_SUCCESS = "FETCH_AUTH_DATA_SUCCESS",
}

interface FetchAuthData {
    type: AuthActionTypes.FETCH_AUTH_DATA
}

interface FetchAuthDataError {
    type: AuthActionTypes.FETCH_AUTH_DATA_ERROR
    payload: AuthResponse
}

interface FetchAuthDataSuccess {
    type: AuthActionTypes.FETCH_AUTH_DATA_SUCCESS
    payload: AuthResponse
}

export type AuthAction = FetchAuthData | FetchAuthDataError | FetchAuthDataSuccess;