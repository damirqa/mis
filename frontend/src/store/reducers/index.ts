import {combineReducers} from "redux";
import {UserReducer} from "./UserReducer";
import {AuthReducer} from "./AuthReducer";

export const rootReducer = combineReducers({
    user: UserReducer,
    auth: AuthReducer
})

export type RootState = ReturnType<typeof rootReducer>