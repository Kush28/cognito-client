import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { RiSendPlaneLine } from "react-icons/ri";

const SEND_MESSAGE = gql`
  mutation sendMessage($content: String!) {
    sendMessage(content: $content) {
      id: _id
      senderId
      content
      createdAt
    }
  }
`;

function WriteMessage() {
  const [message, setMessage] = useState("");
  const [sendMessage] = useMutation(SEND_MESSAGE, {
    onError: (err) => alert(err),
  });

  const sendHandler = () => {
    sendMessage({ variables: { content: message } });
    setMessage("");
  };

  return (
    <div className="flex items-center pt-2 pb-4 px-2">
      <input
        type="text"
        className="w-10/12 p-4 focus:outline-none"
        placeholder="Write a message..."
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <div className="w-2/12 flex justify-center ">
        <button
          onClick={sendHandler}
          className="rounded-full bg-concaveprimary hover:bg-blue-600 shadow-drop p-4 focus:outline-none"
        >
          <RiSendPlaneLine color="#FFF" />
        </button>
      </div>
    </div>
  );
}

export default WriteMessage;
