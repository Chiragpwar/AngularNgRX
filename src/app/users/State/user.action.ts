import {Action} from '@ngrx/store';
import {Users} from '../usersmodal';

export  enum  UserActionType {
    LOAD_USERS = 'Load Users',
    LOAD_USERS_SUCCESS = 'Load users success',
    LOAD_USERS_FAIL = 'Load Users Fail',
    LOAD_USER = 'Load User',
    LOAD_USER_SUCCESS = 'Load user success',
    LOAD_USER_FAIL = 'Load User Fail',
    CREATE_USER = 'Create User',
    CREATE_USER_SUCCESS = 'Create user success',
    CREATE_USER_FAIL = 'Create User Fail',
    UPDATE_USER = 'Update User',
    UPDATE_USER_SUCCESS = 'Update user success',
    UPDATE_USER_FAIL = 'Update User Fail',
    DELETE_USER = 'Delete User',
    DELETE_USER_SUCCESS = 'Delete user success',
    DELETE_USER_FAIL = 'Delete User Fail'
}

export class Loadusers implements Action {
     readonly type = UserActionType.LOAD_USERS;
}

export class LoadUsersSuccess implements Action {
    readonly type = UserActionType.LOAD_USERS_SUCCESS;
    constructor(public payload: Users[]) {}
}

export class LoadUsersFail implements Action {
    readonly type = UserActionType.LOAD_USERS_FAIL;
    constructor(public payload: string) {}
}

export class Loaduser implements Action {
     readonly type = UserActionType.LOAD_USER;
     constructor(public payload: number) {}
}

export class LoadUserSuccess implements Action {
    readonly type = UserActionType.LOAD_USER_SUCCESS;
    constructor(public payload: Users) {}
}

export class LoadUserFail implements Action {
    readonly type = UserActionType.LOAD_USER_FAIL;
    constructor(public payload: string) {}
}

export class Createuser implements Action {
    readonly type = UserActionType.CREATE_USER;
    constructor(public payload: Users) {}
}

export class CreateUserSuccess implements Action {
   readonly type = UserActionType.CREATE_USER_SUCCESS;
   constructor(public payload: Users) {}
}

export class CreateUserFail implements Action {
   readonly type = UserActionType.CREATE_USER_FAIL;
   constructor(public payload: string) {}
}

export class Updateuser implements Action {
    readonly type = UserActionType.UPDATE_USER;
    constructor(public payload: Users) {}
}

export class UpdateUserSuccess implements Action {
   readonly type = UserActionType.UPDATE_USER_SUCCESS;
   constructor(public payload: Users) {}
}

export class UpdateUserFail implements Action {
   readonly type = UserActionType.UPDATE_USER_FAIL;
   constructor(public payload: string) {}
}

export class Deleteuser implements Action {
    readonly type = UserActionType.DELETE_USER;
    constructor(public payload: number) {}
}

export class DeleteUserSuccess implements Action {
   readonly type = UserActionType.DELETE_USER_SUCCESS;
   constructor(public payload: number) {}
}

export class DeleteUserFail implements Action {
   readonly type = UserActionType.DELETE_USER_FAIL;
   constructor(public payload: string) {}
}

export type Actions = Loadusers
 | LoadUsersSuccess
 | LoadUsersFail
 | Loaduser
 | LoadUserSuccess
 | LoadUserFail
 | Createuser
 | CreateUserSuccess
 | CreateUserFail
 | Updateuser
 | UpdateUserSuccess
 | UpdateUserFail
 | Deleteuser
 | DeleteUserSuccess
 | DeleteUserFail;
