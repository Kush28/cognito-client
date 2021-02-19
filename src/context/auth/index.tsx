import React, { createContext, useContext, useReducer } from "react";
import { AuthStateType } from "../../interfaces/User";
import reducer, { initialState } from "./reducer";

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

const AuthStateContext = createContext<AuthStateType>(initialState);

const AuthDispatchContext = createContext<Function>(() => {});

function AuthProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const thunkDispatch = async (action: Function) => {
    if (typeof action === "function") {
      return await action(dispatch, state);
    }

    return dispatch(action);
  };
  return (
    <AuthDispatchContext.Provider value={thunkDispatch}>
      <AuthStateContext.Provider value={state}>
        {children}
      </AuthStateContext.Provider>
    </AuthDispatchContext.Provider>
  );
}

export const useAuthState = () => useContext(AuthStateContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);
export default AuthProvider;
