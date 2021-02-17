import React from "react";
import { useAuthState } from "../../context/auth";

interface Props {
  content: string;
  date: Date;
  senderId: string;
}

function Message({ content, senderId, date }: Props) {
  const { user } = useAuthState();

  if (!user) return null;
  
  const toRight = user.id === senderId;
  return (
    <div
      className={`flex items-center mt-6 mx-4 ${
        toRight ? "flex-row-reverse" : ""
      }`}
    >
      <div
        className={`px-4 py-4 rounded-lg shadow-drop min-w-50 max-w-70 min-h ${
          toRight ? "bg-gray-500 text-white bg-primary" : ""
        }`}
      >
        {!toRight && <p className="font-bold">{user.name}</p>}
        {content}
      </div>
      <div className="text-gray-500 text-xs mx-2">{date.toDateString()}</div>
    </div>
  );
}

export default Message;
