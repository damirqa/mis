import {ProjectAction, ProjectActionTypes, ProjectState} from "../../types/project";

const initialState: ProjectState = {
    projectResponse: null,
    loading: false,
    error: null
}

export const ProjectReducer = (state = initialState , action: ProjectAction): ProjectState => {
    switch (action.type) {
        case ProjectActionTypes.FETCH_PROJECT_DATA:
            return {...state, loading: true}
        case ProjectActionTypes.FETCH_PROJECT_DATA_ERROR:
            return {...state, loading: false}
        case ProjectActionTypes.FETCH_PROJECT_DATA_SUCCESS:
            return {...state, loading:false, projectResponse: action.payload}

        case ProjectActionTypes.CREATE_PROJECT_DATA:
            return {...state, loading: true}
        case ProjectActionTypes.CREATE_PROJECT_DATA_ERROR:
            return {...state, loading: false, error: action.payload}
        case ProjectActionTypes.CREATE_PROJECT_DATA_SUCCESS:
            return {...state, loading: false, projectResponse: action.payload}
        default:
            return state
    }
}