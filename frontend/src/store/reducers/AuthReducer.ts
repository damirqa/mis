import {AuthAction, AuthActionTypes, AuthState} from "../../types/auth";

const initialState: AuthState = {
    authResponse: null,
    loading: false,
}

export const AuthReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.FETCH_AUTH_DATA:
            return {...state, loading: true}

        case AuthActionTypes.FETCH_AUTH_DATA_ERROR:
            return {...state, loading: false, authResponse: action.payload}

        case AuthActionTypes.FETCH_AUTH_DATA_SUCCESS:
            return {...state, loading: false, authResponse: action.payload }
        default:
            return state
    }
}