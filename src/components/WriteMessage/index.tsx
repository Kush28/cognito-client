import React from "react";
import { RiSendPlaneLine } from "react-icons/ri";

function WriteMessage() {
  return (
    <div className="flex items-center pt-2 pb-4 px-2">
      <input
        type="text"
        className="w-10/12 p-4 focus:outline-none"
        placeholder="Write a message..."
      />
      <div className="w-2/12 flex justify-center ">
        <button className="rounded-full bg-concaveprimary shadow-drop p-4">
          <RiSendPlaneLine color="#FFF"/>
        </button>
      </div>
    </div>
  );
}

export default WriteMessage;
