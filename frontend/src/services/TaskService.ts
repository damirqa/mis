import {TaskResponse} from "../modules/task/response/TaskResponse";
import $api from "./HttpService";
import {TaskRequest} from "../modules/task/request/TaskRequest";

export default class TaskService {
    static async create(task: TaskRequest): Promise<TaskResponse> {
        const {data} = await $api.post('/task/create', {task})
        return data
    }

    static async getAllTasksState(state_id): Promise<TaskResponse> {
        const {data} = await $api.post('/task/state/all', {state_id})
        return data
    }
}