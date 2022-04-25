import $api from './HttpService';
import {StateResponse} from "../modules/state/response/StateResponse";

export default class StateService {
    static async getStates(project_id): Promise<StateResponse> {
        const {data} = await $api.post('/state/get-all', {project_id})
        return data
    }
}