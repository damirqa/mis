import {Dispatch} from "redux";
import {ProjectAction, ProjectActionTypes} from "../types/project";
import ProjectService from "../services/ProjectService";
import {IUser} from "../modules/IUser";

export const createProject = (data) => {
    return async (dispatch: Dispatch<ProjectAction>) => {
        try {
            dispatch({type: ProjectActionTypes.CREATE_PROJECT_DATA})
            const response = await ProjectService.create(data)
            dispatch({type: ProjectActionTypes.CREATE_PROJECT_DATA_SUCCESS, payload: response.data})
        }
        catch (e) {
            dispatch({type: ProjectActionTypes.CREATE_PROJECT_DATA_ERROR, payload: e})
        }
    }
}

export const fetchLastProject = (user: IUser) => {
    return async (dispatch: Dispatch<ProjectAction>) => {
        try {
            dispatch({type: ProjectActionTypes.FETCH_PROJECT_DATA})
            const response = await ProjectService.getLastProject(user)
            dispatch({type: ProjectActionTypes.FETCH_PROJECT_DATA_SUCCESS, payload: response.data})
        }
        catch (e) {
            dispatch({type: ProjectActionTypes.FETCH_PROJECT_DATA_ERROR, payload: e})
        }
    }
}