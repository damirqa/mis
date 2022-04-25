import {TaskResponse} from "../../task/response/TaskResponse";

export interface StateResponse {
    id: number,
    name: string,
    status: string,
    serial_number: number,
    tasks: TaskResponse[]
}