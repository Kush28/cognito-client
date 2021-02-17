import {
  AuthActionType,
  AuthStateType,
  UserType,
} from "../../interfaces/User";

export const initialState: AuthStateType = {
  authenticated: false,
  authError: false,
  user: null,
};

export default function reducer(
  state: AuthStateType,
  action: AuthActionType
) {
  const { type, payload } = action;
  console.log(type);
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        authenticated: true,
        authError: false,
        user: payload as UserType,
      };
    case "AUTH_ERROR":
      return {
        ...state,
        authauthenticated: false,
        authError: true,
        user: null,
      };

    default:
      return state;
  }
}
