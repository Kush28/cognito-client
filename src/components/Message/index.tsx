import React from "react";

interface Props {
  content: string;
  toRight?: Boolean;
  date: Date;
}

function Message({ content, toRight = false, date }: Props) {
  return (
    <div
      className={`flex items-center mt-6 mx-4 ${
        toRight ? "flex-row-reverse" : ""
      }`}
    >
      <div
        className={`px-4 py-4 rounded-lg shadow-drop min-w-50 max-w-70 min-h ${
          toRight ? "bg-gray-500 text-white" : ""
        }`}
      >
        {content}
      </div>
      <div className="text-gray-500 text-xs mx-2">{date.toDateString()}</div>
    </div>
  );
}

export default Message;