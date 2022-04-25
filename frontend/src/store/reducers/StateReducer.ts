import {StateAction, StateActionTypes, StateProjectState} from "../../types/state";

const initialState: StateProjectState = {
    stateResponse: null,
    loading: false
}

export const StateReducer = (state = initialState, action: StateAction) => {
    switch (action.type) {
        case StateActionTypes.FETCH_STATES_DATA:
            return {...state, loading: true}
        case StateActionTypes.FETCH_STATES_DATA_ERROR:
            return {...state, loading: false}
        case StateActionTypes.FETCH_STATES_DATA_SUCCESS:
            return {...state, loading: false, stateResponse: action.payload}
        default:
            return state
    }
}