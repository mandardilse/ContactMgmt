import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from '@ngrx/effects';
import { UserService } from "../user.service";
import { UserActionType, UserLoginAction, UserLogOutAction } from "./user.actions";
import { tap } from "rxjs/operators";

Injectable({ providedIn: 'root' })
export class UserEffectService {
	constructor(private action$: Actions, private userService: UserService) { }
	@Effect({ dispatch: false })
	loginLoad$ = this.action$.pipe(
		ofType<UserLoginAction>(UserActionType.UserLogin),
		tap(action => localStorage.setItem('user', JSON.stringify(action.payload)))
	)
	@Effect({ dispatch: false })
	logout$ = this.action$.pipe(
		ofType<UserLogOutAction>(UserActionType.UserLogOut),
		tap(() => { localStorage.removeItem('user') })
	)






}