import { Action } from "@ngrx/store";
import { UserLogin } from "../models/user-login";
import { UserRegistration } from "../models/user-registration";

export enum UserActionType {
	UserLogin = 'user.login',
	UserRegister = 'user.register',
	UserInitialization = 'user.initialization'
}

export class UserLoginAction implements Action {
	readonly type: UserActionType.UserLogin
	constructor(public payload: UserLogin) { }
}

export class UserRegisterAction implements Action {
	readonly type: UserActionType.UserRegister
	constructor(public payload: UserRegistration) { }
}

export class UserInitialAction implements Action {
	readonly type: UserActionType.UserInitialization
}

export type UserActions = UserLoginAction | UserRegisterAction | UserInitialAction