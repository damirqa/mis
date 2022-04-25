import {TaskAction, TaskActionTypes, TaskState} from "../../types/task";

const initialState: TaskState = {
    taskResponse: null,
    loading: false
}

export const TaskReducer = (state = initialState, action: TaskAction) => {
    switch (action.type) {
        case TaskActionTypes.CREATE_TASK_DATA:
            return {...state, loading: true}
        case TaskActionTypes.CREATE_TASK_DATA_ERROR:
            return {...state, loading: false}
        case TaskActionTypes.CREATE_TASK_DATA_SUCCESS:
            return {...state, loading: false, taskResponse: action.payload}

        case TaskActionTypes.FETCH_ALL_TASKS_STATE_DATA:
            return {...state, loading: true}
        case TaskActionTypes.FETCH_ALL_TASKS_STATE_DATA_ERROR:
            return {...state, loading: false}
        case TaskActionTypes.FETCH_ALL_TASKS_STATE_DATA_SUCCESS:
            return {...state, loading: false, taskResponse: action.payload}
        default:
            return state
    }
}