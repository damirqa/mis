import {StateAction, StateActionTypes} from "../types/state";
import {Dispatch} from "redux";
import StateService from "../services/StateService";

export const fetchStatesProject = (project_id) => {
    return async (dispatch: Dispatch<StateAction>) => {
        try {
            dispatch({type: StateActionTypes.FETCH_STATES_DATA})
            const response = await StateService.getStates(project_id)
            dispatch({type: StateActionTypes.FETCH_STATES_DATA_SUCCESS, payload: response})
        }
        catch (e) {
            dispatch({type: StateActionTypes.FETCH_STATES_DATA_ERROR, payload: e})
        }
    }
}