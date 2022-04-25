import {Dispatch} from "redux";
import {TaskAction, TaskActionTypes} from "../types/task";
import TaskService from "../services/TaskService";
import {TaskRequest} from "../modules/task/request/TaskRequest";

export const createTask = (task: TaskRequest) => {
    return async (dispatch: Dispatch<TaskAction>) => {
        try {
            dispatch({type: TaskActionTypes.CREATE_TASK_DATA})
            const response = await TaskService.create(task)
            dispatch({type: TaskActionTypes.CREATE_TASK_DATA_SUCCESS, payload: response})
        }
        catch (e) {
            dispatch({type: TaskActionTypes.CREATE_TASK_DATA_ERROR})
        }
    }
}

export const setDefaultTaskStatus = () => {
    return (dispatch: Dispatch<TaskAction>) => {
        dispatch({type: TaskActionTypes.CREATE_TASK_DATA_SUCCESS, payload: null})
    }
}

export const getAllTaskState = (state_id: number) => {
    return async (dispatch: Dispatch<TaskAction>) => {
        try {
            dispatch({type: TaskActionTypes.FETCH_ALL_TASKS_STATE_DATA})
            const response = await TaskService.getAllTasksState(state_id)
            dispatch({type: TaskActionTypes.FETCH_ALL_TASKS_STATE_DATA_SUCCESS, payload: response})
        }
        catch (e) {
            dispatch({type: TaskActionTypes.FETCH_ALL_TASKS_STATE_DATA_ERROR, payload: e})
        }
    }
}