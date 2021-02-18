import { useQuery, useSubscription } from "@apollo/client";
import { gql } from "graphql-tag";
import React, { useEffect, useRef } from "react";
import { useMessageDispatch, useMessageState } from "../../context/message";
import { addMsgAction, loadAllMsgAction } from "../../context/message/actions";
import { MessageType } from "../../interfaces/Message";
import Message from "../Message";
import Spinner from "../Spinner";

const GET_MESSAGES = gql`
  query getMessages {
    GetMessage {
      id: _id
      senderId
      content
      createdAt
    }
  }
`;

const NEW_MESSAGE = gql`
  subscription {
    newMessage {
      senderId
      content
      id: _id
      createdAt
    }
  }
`;

interface GetMessage {
  GetMessage: [MessageType];
}

interface NewMessage {
  newMessage: MessageType;
}

function MessageBox() {
  const { loading, data: messageData } = useQuery<GetMessage>(GET_MESSAGES);
  const {
    data: subscribedData,
    error: subsriptionError,
  } = useSubscription<NewMessage>(NEW_MESSAGE);
  const { messages } = useMessageState();
  const messageDispatch = useMessageDispatch();

  const bottom = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (messageData) messageDispatch(loadAllMsgAction(messageData.GetMessage));
  }, [messageData]);

  useEffect(() => {
    if (subsriptionError) alert(subsriptionError);
    else if (subscribedData) {
      messageDispatch(addMsgAction(subscribedData.newMessage));
    }
  }, [subscribedData]);

  useEffect(() => {
    if (bottom.current) bottom.current.scrollIntoView();
  }, [messages]);

  if (loading) return <Spinner />;
  console.log("Got the data ", messages);

  return (
    <>
      {messages.map(({ senderId, content, createdAt }) => (
        <Message
          key={`${senderId}+${createdAt}`}
          senderId={senderId}
          content={content}
          date={new Date(createdAt)}
        />
      ))}
      <div ref={bottom} />
    </>
  );
}

export default MessageBox;
