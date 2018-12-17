import { UserState } from "./user.state";
import { UserActions, UserActionType } from "./user.action";

const initialState: UserState = {
	loginInfo: null,
	regiterInfo: null
}
export function UserReducer(state = initialState, action: UserActions): UserState {
	switch (action.type) {
		case UserActionType.UserLogin:
			return {
				...state,
				loginInfo: action.payload
			}
		case 'user.register':
			return {
				...state,
				regiterInfo: action.payload
			}
		default:
			return state;

	}
}