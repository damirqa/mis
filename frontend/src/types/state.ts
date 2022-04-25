import {StateResponse} from "../modules/state/response/StateResponse";

export interface StateProjectState { //hahaha
    stateResponse: null | StateResponse | StateResponse[]
    loading: boolean
}

export enum StateActionTypes {
    FETCH_STATES_DATA = "FETCH_STATES_DATA",
    FETCH_STATES_DATA_ERROR = "FETCH_STATES_DATA_ERROR",
    FETCH_STATES_DATA_SUCCESS = "FETCH_STATES_DATA_SUCCESS",
}

interface FetchStatesData {
    type: StateActionTypes.FETCH_STATES_DATA
}

interface FetchStatesDataError {
    type: StateActionTypes.FETCH_STATES_DATA_ERROR
}

interface FetchStatesDataSuccess {
    type: StateActionTypes.FETCH_STATES_DATA_SUCCESS
    payload: null | StateResponse | StateResponse[]
}

export type StateAction = FetchStatesData | FetchStatesDataError | FetchStatesDataSuccess