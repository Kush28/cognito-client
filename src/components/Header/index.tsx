import React from "react";
import { HiUserCircle } from "react-icons/hi";

function Header() {
  return (
    <div className="row-span-1 container flex align-center py-4 shadow-drop">
      <HiUserCircle color="gray" className="mr-4" size="2em"/>
      <h1 className="text-xl">Cognito</h1>
    </div>
  );
}

export default Header;
