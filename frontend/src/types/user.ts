export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersError {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string
}

interface FetchUsersSuccess {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

export type UserAction = FetchUsersAction | FetchUsersError | FetchUsersSuccess;