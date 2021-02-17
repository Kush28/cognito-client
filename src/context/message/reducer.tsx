import { MessageStateType, MessageActionType } from "../../interfaces/Message";

export const initialState: MessageStateType = {
  messages: [],
};

export function messageReducer(
  state: MessageStateType,
  action: MessageActionType
) {
  const { type } = action;
  switch (type) {
    case "LOAD_ALL":
      return state;

    default:
      return state;
  }
}
