import { UserRegistration } from "../models/user-registration";
import * as forRoot from '../../store/app.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginInfo } from "../models/login-info";

export interface UserState extends forRoot.AppState {
	loginInfo: LoginInfo,
	regiterInfo: UserRegistration
}

const getUserState = createFeatureSelector<UserState>('users')
export const getLoginState = createSelector(getUserState, state => state.loginInfo)
export const getRegisterState = createSelector(getUserState, state => state.regiterInfo)