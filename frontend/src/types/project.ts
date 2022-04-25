import {ProjectResponse} from "../modules/project/response/ProjectResponse";

export interface ProjectState {
    projectResponse: null | ProjectResponse;
    loading: boolean;
    error: null | string | string[];
}

export enum ProjectActionTypes {
    FETCH_PROJECT_DATA = 'FETCH_PROJECT_DATA',
    FETCH_PROJECT_DATA_ERROR = 'FETCH_PROJECT_DATA_ERROR',
    FETCH_PROJECT_DATA_SUCCESS = 'FETCH_PROJECT_DATA_SUCCESS',

    CREATE_PROJECT_DATA = 'CREATE_PROJECT_DATA',
    CREATE_PROJECT_DATA_ERROR = 'CREATE_PROJECT_DATA_ERROR',
    CREATE_PROJECT_DATA_SUCCESS = 'CREATE_PROJECT_DATA_SUCCESS',
}

interface FetchProjectData {
    type: ProjectActionTypes.FETCH_PROJECT_DATA
}

interface FetchProjectDataError {
    type: ProjectActionTypes.FETCH_PROJECT_DATA_ERROR
}

interface FetchProjectDataSuccess {
    type: ProjectActionTypes.FETCH_PROJECT_DATA_SUCCESS
    payload: null | ProjectResponse
}

interface CreateProjectData {
    type: ProjectActionTypes.CREATE_PROJECT_DATA
}

interface CreateProjectDataError {
    type: ProjectActionTypes.CREATE_PROJECT_DATA_ERROR,
    payload: null|  string | string[]
}

interface CreateProjectDataSuccess {
    type: ProjectActionTypes.CREATE_PROJECT_DATA_SUCCESS,
    payload: ProjectResponse | null
}

export type ProjectAction =
    CreateProjectData | CreateProjectDataError | CreateProjectDataSuccess|
    FetchProjectData | FetchProjectDataError | FetchProjectDataSuccess
