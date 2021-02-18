export interface MessageType {
  senderId: string;
  content: string;
  id: string;
  createdAt: Date;
}

export interface MessageStateType {
  messages: MessageType[];
}

export interface MessageActionType {
  type: string;
  payload: [MessageType];
}
