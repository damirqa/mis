import $api from "./HttpService";
import {ProjectState} from "../types/project";
import {AxiosResponse} from 'axios'
import {ProjectResponse} from "../modules/project/response/ProjectResponse";
import {IUser} from "../modules/IUser";

export default class ProjectService {

    static async create(data: ProjectState): Promise<AxiosResponse<ProjectResponse>> {
        return $api.post('/project/create', data)
    }

    static async getLastProject(user: IUser): Promise<AxiosResponse<ProjectResponse>> {
        return $api.post('/project/get-last-project', user)
    }
}