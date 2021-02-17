import { authUserWithToken } from "../../adapters/googleAuth";
import { setAuthCookie } from "../../utils/cookie";

export const actions = {
  LOADING: "LOADING",
  LOGIN: "LOGIN",
  AUTH_ERROR: "AUTH_ERROR",
};

export const loginAction = (payload: string) => async (dispatch: Function) => {
  try {
    dispatch({ type: actions.LOADING });
    const { data } = await authUserWithToken(payload);
    setAuthCookie(payload as string);    
    dispatch({
      type: actions.LOGIN,
      payload: data,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: actions.AUTH_ERROR,
    });
  }
};
