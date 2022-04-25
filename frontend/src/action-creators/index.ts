import * as UserActionCreators from './user'
import * as AuthActionCreators from './auth'
import * as ProjectActionCreators from './project'
import * as StateActionCreators from './state'
import * as TaskActionCreators from './task'

export default {
    ...AuthActionCreators,
    ...UserActionCreators,
    ...ProjectActionCreators,
    ...StateActionCreators,
    ...TaskActionCreators,
}