import React, { createContext, useContext, useReducer } from "react";
import { initialState, messageReducer } from "./reducer";

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

const MessageStateContext = createContext(initialState);
const MessageDispatchContext = createContext<Function>(() => {});

function MessageProvider({ children }: Props) {
  const [state, dispatch] = useReducer(messageReducer, initialState);

  const thunkDispatch = async (action: Function) => {
    if (typeof action === "function") {
      return await action(dispatch, state);
    }

    return dispatch(action);
  };
  return (
    <MessageDispatchContext.Provider value={thunkDispatch}>
      <MessageStateContext.Provider value={state}>
        {children}
      </MessageStateContext.Provider>
    </MessageDispatchContext.Provider>
  );
}

export const useMessageState = () => useContext(MessageStateContext);
export const useMessageDispatch = () => useContext(MessageDispatchContext);
export default MessageProvider;
