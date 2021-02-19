import { MessageType } from "../../interfaces/Message";

export const actions = {
  LOAD_ALL: "LOAD_ALL",
  ADD_NEW: "ADD_NEW",
};

export const loadAllMsgAction = (messages: MessageType[]) => ({
  type: actions.LOAD_ALL,
  payload: messages,
});

export const addMsgAction = (messages: MessageType) => ({
  type: actions.ADD_NEW,
  payload: [messages],
});
