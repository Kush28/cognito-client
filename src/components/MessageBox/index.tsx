import React from "react";
import Message from "../Message";

function MessageBox() {
  return (
    <>
      <Message senderName="Lisa" content="Hi There!" date={new Date()} />
      <Message
        senderName="Lisa"
        content="Good morning."
        toRight
        date={new Date()}
      />
      <Message
        senderName="Lisa"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat
        aliquam nulla"
        date={new Date()}
      />
      <Message
        senderName="Lisa"
        content="sit amet facilisis felis posuere sed. Vivamus ultrices arcu felis."
        toRight
        date={new Date()}
      />
      <Message
        senderName="Lisa"
        content="sit amet facilisis felis posuere sed. Vivamus ultrices arcu felis."
        toRight
        date={new Date()}
      />
      <Message
        senderName="Lisa"
        content="sit amet facilisis felis posuere sed. Vivamus ultrices arcu felis."
        date={new Date()}
      />
    </>
  );
}

export default MessageBox;
