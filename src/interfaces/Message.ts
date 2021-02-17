export interface MessageType {
  senderId: string;
  content: string;
  _id: number;
  createdAt: Date;
}

export interface MessageStateType {
  messages: [MessageType] | [];
}

export interface MessageActionType {
  type: string;
  payload: string | MessageType;
}
