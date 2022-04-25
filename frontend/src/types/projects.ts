import {ProjectState} from "./project";

export interface ProjectsState {
    projects: ProjectState[];
    loading: boolean;
}

export enum ProjectsActionTypes {
    FETCH_PROJECTS_DATA = 'FETCH_PROJECTS_DATA',
    FETCH_PROJECTS_DATA_ERROR = 'FETCH_PROJECTS_DATA',
    FETCH_PROJECTS_DATA_SUCCESS = 'FETCH_PROJECTS_DATA_SUCCESS',
}

interface FetchProjectsData {
    type: ProjectsActionTypes.FETCH_PROJECTS_DATA
}

interface FetchProjectsDataError {
    type: ProjectsActionTypes.FETCH_PROJECTS_DATA_ERROR
    payload: string
}

interface FetchProjectsDataSuccess {
    type: ProjectsActionTypes.FETCH_PROJECTS_DATA_SUCCESS
    payload: ProjectState[] | null
}

export type ProjectsAction = FetchProjectsData | FetchProjectsDataError | FetchProjectsDataSuccess