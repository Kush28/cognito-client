import React from "react";
import { HiUserCircle } from "react-icons/hi";

function Header() {
  return (
    <div className="fixed top-0 bg-white container grid grid-cols-6 grid-row-2 items-center py-4 shadow-drop">
      <HiUserCircle color="gray" className="row-span-2 h-full w-full" />
      <h1 className="font-bold col-span-4 pl-4">Cognito</h1>
      <p className="col-span-4 text-sm pl-4">Logged in as John Doe</p>
    </div>
  );
}

export default Header;
