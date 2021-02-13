import React from "react";
import Message from "../Message";

function MessageBox() {
  return (
    <div className="flex flex-col">
      <Message content="Hi There!" date={new Date()} />
      <Message content="Good morning." toRight date={new Date()} />
      <Message
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat
        aliquam nulla"
        date={new Date()}
      />
      <Message
        content="sit amet facilisis felis posuere sed. Vivamus ultrices arcu felis."
        toRight
        date={new Date()}
      />
    </div>
  );
}

export default MessageBox;
