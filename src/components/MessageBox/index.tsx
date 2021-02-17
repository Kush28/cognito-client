import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";
import React, { useEffect, useRef } from "react";
import { MessageType } from "../../interfaces/Message";
import Message from "../Message";
import Spinner from "../Spinner";

const GET_MESSAGES = gql`
  query getMessages {
    GetMessage {
      senderId
      content
      createdAt
    }
  }
`;
interface GetMessage {
  GetMessage: [MessageType];
}

function MessageBox() {
  const { loading, data } = useQuery<GetMessage>(GET_MESSAGES);
  const bottom = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(bottom);
    if (bottom.current) bottom.current.scrollIntoView();
  }, [data]);

  if (loading) return <Spinner />;
  if (data)
    return (
      <>
        {data.GetMessage.map(({ senderId, content, createdAt }) => (
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
  return null;
}

export default MessageBox;
