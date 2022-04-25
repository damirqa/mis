import {combineReducers} from "redux";
import {UserReducer} from "./UserReducer";
import {AuthReducer} from "./AuthReducer";
import {ProjectReducer} from "./ProjectReducer";
import {ProjectsReducer} from "./ProjectsReducer";
import {StateReducer} from "./StateReducer";
import {TaskReducer} from "./TaskReducer";


export const rootReducer = combineReducers({
    user: UserReducer,
    auth: AuthReducer,
    project: ProjectReducer,
    projects: ProjectsReducer,
    states: StateReducer,
    tasks: TaskReducer,
})

export type RootState = ReturnType<typeof rootReducer>