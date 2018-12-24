import { Action } from "@ngrx/store";
import { UserLogin } from "../models/user-login";
import { UserRegistration } from "../models/user-registration";

export enum UserActionType {
	UserLogin = 'user.login',
	UserLoginSuccess = 'user.login.success',
	UserLoginFail = 'user.login.fail',
	UserRegister = 'user.register',
	UserRegisterSuccess = 'user.register.success',
	UserRegisterFail = 'user.register.fail',
	UserInitialization = 'user.initialization'
}

export class UserLoginAction implements Action {
	readonly type: UserActionType.UserLogin
	constructor(public payload: UserLogin) { }
}
export class UserLoginSuccessAction implements Action {
	readonly type: UserActionType.UserLoginSuccess
	constructor(public payload: UserLogin) { }
}
export class UserLoginFail implements Action {
	readonly type: UserActionType.UserLoginFail
}
export class UserRegisterAction implements Action {
	readonly type: UserActionType.UserRegister
	constructor(public payload: UserRegistration) { }
}
export class UserRegisterSuccessAction implements Action {
	readonly type: UserActionType.UserRegisterSuccess
	constructor(public payload: UserRegistration) { }
}
export class UserRegisterFailAction implements Action {
	readonly type: UserActionType.UserRegisterFail
}
export class UserInitialAction implements Action {
	readonly type: UserActionType.UserInitialization
}

export type UserActions = UserLoginAction
	| UserLoginSuccessAction
	| UserLoginFail
	| UserRegisterAction
	| UserRegisterSuccessAction
	| UserRegisterFailAction
	| UserInitialAction
