import { AuthActionType, AuthStateType, UserType } from "../../interfaces/User";
import { actions } from "./actions";

export const initialState: AuthStateType = {
  loading: false,
  authenticated: false,
  authError: false,
  user: null,
};

export default function reducer(state: AuthStateType, action: AuthActionType) {
  const { type, payload } = action;
  switch (type) {
    case actions.LOADING:
      return {
        ...state,
        loading: true
      };
    case actions.LOGIN:
      return {
        ...state,
        loading: false,
        authenticated: true,
        authError: false,
        user: payload as UserType,
      };
    case actions.AUTH_ERROR:
      return {
        ...state,
        loading: false,
        authauthenticated: false,
        authError: true,
        user: null,
      };

    default:
      return state;
  }
}
