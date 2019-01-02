import { UserState } from "./user.state";
import { UserActions, UserActionType } from "./user.actions";

const initialState: UserState = {
	loginInfo: null,
	regiterInfo: null
}
export function UserReducer(state = initialState, action: UserActions): UserState {
	switch (action.type) {
		case UserActionType.UserLoginSuccess:
			return {
				...state,
				loginInfo: action.payload
			}
		case UserActionType.UserRegister:
			return {
				...state,
				regiterInfo: action.payload
			}
		default:
			return state;

	}
}