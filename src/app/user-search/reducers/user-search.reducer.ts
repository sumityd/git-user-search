import { User, intialUserState } from "./user-search.state";
import { UserActions, UserActionTypes } from "../actions/user-search.action";

export function UserReducer(
  state: User = intialUserState,
  action: UserActions
) {
  switch (action.type) {
    case UserActionTypes.FETCH_USER_DETAIL_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        userData: action.payload.items,
        userCount: action.payload.total_count,
        message: null,
        error: null,
      };
    }

    case UserActionTypes.FETCH_USER_DETAIL_FAILED: {
      return {
        ...state,
        message: null,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}
