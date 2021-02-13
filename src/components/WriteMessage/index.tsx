import React from "react";
import { RiSendPlaneLine } from "react-icons/ri";

function WriteMessage() {
  return (
    <div>
      <div className="flex items-center">
        <input
          type="text"
          className="w-10/12 p-4 mx-2 rounded-full shadow-inset"
          placeholder="Write a message..."
        />
        <div className="w-2/12 flex justify-center ">
          <button className="rounded-full bg-concave shadow-drop p-4">
            <RiSendPlaneLine />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WriteMessage;
