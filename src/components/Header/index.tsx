import React from "react";
import { HiUserCircle } from "react-icons/hi";
import { useAuthState } from "../../context/auth";

function Header() {
  const { user } = useAuthState();

  return (
    <div className="fixed h-20 max-w-screen-md top-0 bg-white container grid grid-cols-6 grid-row-2 items-center py-4 shadow-drop">
      <div className="row-span-2 h-full w-full">
        {!user && <HiUserCircle color="gray" className="h-full w-full" />}
        {user && (
          <img src={user.avatar} alt="avatar" className="rounded-full" />
        )}
      </div>
      <h1 className="font-bold col-span-4 pl-4">Cognito</h1>
      <p className="col-span-4 text-sm pl-4 text-gray-600">
        {user ? `Logged in as ${user.name} ` : "Please login"}
      </p>
    </div>
  );
}

export default Header;
