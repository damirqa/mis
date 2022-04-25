import {TaskResponse} from "../modules/task/response/TaskResponse";

export interface TaskState {
    taskResponse: null | TaskResponse | TaskResponse[]
    loading: boolean
}

export enum TaskActionTypes {
    CREATE_TASK_DATA = "CREATE_TASK_DATA",
    CREATE_TASK_DATA_ERROR = "CREATE_TASK_DATA_ERROR",
    CREATE_TASK_DATA_SUCCESS = "CREATE_TASK_DATA_SUCCESS",

    FETCH_ALL_TASKS_STATE_DATA = 'FETCH_ALL_TASKS_STATE_DATA',
    FETCH_ALL_TASKS_STATE_DATA_ERROR = 'FETCH_ALL_TASKS_STATE_DATA_ERROR',
    FETCH_ALL_TASKS_STATE_DATA_SUCCESS = 'FETCH_ALL_TASKS_STATE_DATA_SUCCESS'
}

interface CreateTaskData {
    type: TaskActionTypes.CREATE_TASK_DATA
}

interface CreateTaskDataError {
    type: TaskActionTypes.CREATE_TASK_DATA_ERROR
}

interface CreateTaskDataSuccess {
    type: TaskActionTypes.CREATE_TASK_DATA_SUCCESS
    payload: null | TaskResponse
}

interface FetchAllTasksState {
    type: TaskActionTypes.FETCH_ALL_TASKS_STATE_DATA
}

interface FetchAllTasksStateError {
    type: TaskActionTypes.FETCH_ALL_TASKS_STATE_DATA_ERROR
}

interface FetchAllTasksStateSuccess {
    type: TaskActionTypes.FETCH_ALL_TASKS_STATE_DATA_SUCCESS
    payload: null | TaskResponse | TaskResponse[]
}

export type TaskAction =
    CreateTaskData | CreateTaskDataError | CreateTaskDataSuccess |
    FetchAllTasksState | FetchAllTasksStateError | FetchAllTasksStateSuccess