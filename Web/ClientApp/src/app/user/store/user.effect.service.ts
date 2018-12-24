import { Injectable } from "@angular/core";
import { Actions, ofType } from '@ngrx/effects';
import { UserService } from "../user.service";
import { UserActionType } from "./user.action";
import { mergeMap, switchMap, } from 'rxjs/operators';

Injectable({ providedIn: 'root' })
export class UserEffectService {
	constructor(private action$: Actions, private userService: UserService) { }
	// loginLoad$ = this.action$.pipe(
	// 	ofType(UserActionType.UserLogin),
	// 	mergeMap(action=> this.userService.loginUser(userInfo).pipe(
	// 		map()
	// 	))
	// )





}