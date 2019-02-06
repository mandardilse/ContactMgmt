import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from '@ngrx/effects';
import { UserService } from "../user.service";
import { UserActionType, UserLoginAction, UserLogOutAction, UserLoginFail, UserLoginSuccessAction } from "./user.actions";
import { tap, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { UserLogin } from "../models/user-login";

@Injectable({ providedIn: 'root' })
export class UserEffectService {
	constructor(private action$: Actions, private userService: UserService) { }
	@Effect({ dispatch: false })
	loginLoad$ = this.action$.pipe(
		ofType<UserLoginAction>(UserActionType.UserLogin),
		mergeMap(action => {
			return this.userService.loginUser(action.payload)
				.pipe(
					tap(token => {
						localStorage.setItem('token', token)//On refresh page generated token will persist.
						return of(new UserLoginSuccessAction({
							userName: action.payload.emailId,
							isLogedIn: true
						}))
					}),
					catchError(error => of(new UserLoginFail(error)))
				)
		})
		//tap(action => { console.log(action.payload); /*localStorage.setItem('user', JSON.stringify(action.payload)); */ })
	)
	@Effect({ dispatch: false })
	logout$ = this.action$.pipe(
		ofType<UserLogOutAction>(UserActionType.UserLogOut),
		tap(() => { localStorage.removeItem('user') })
	)






}