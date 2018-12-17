import { UserLogin } from "../models/user-login";
import { UserRegistration } from "../models/user-registration";
import * as forRoot from '../../store/app.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface UserState extends forRoot.AppState {
	loginInfo: UserLogin,
	regiterInfo: UserRegistration
}

const getUserState = createFeatureSelector<UserState>('users')
export const getLoginState = createSelector(getUserState, state => state.loginInfo)
export const getRegisterState = createSelector(getUserState, state => state.regiterInfo)