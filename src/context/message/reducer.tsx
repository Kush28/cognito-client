import { MessageStateType, MessageActionType } from "../../interfaces/Message";

export const initialState: MessageStateType = {
  messages: [],
};

export function messageReducer(
  state: MessageStateType,
  action: MessageActionType
) {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_ALL":
      return { ...state, messages: payload };
    case "ADD_NEW":
      return { ...state, messages: [...state.messages, ...payload] };
    default:
      return state;
  }
}
