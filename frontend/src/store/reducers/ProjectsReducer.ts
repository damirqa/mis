import {ProjectsAction, ProjectsActionTypes, ProjectsState} from "../../types/projects";

const initialState: ProjectsState = {
    projects: null,
    loading: false,
}

export const ProjectsReducer = (state = initialState, action: ProjectsAction): ProjectsState => {
    switch (action.type) {
        case ProjectsActionTypes.FETCH_PROJECTS_DATA:
            return {...state, loading: true}
        case ProjectsActionTypes.FETCH_PROJECTS_DATA_ERROR:
            return {...state, loading: false}
        case ProjectsActionTypes.FETCH_PROJECTS_DATA_SUCCESS:
            return {...state, projects: action.payload}
        default:
            return state
    }
}