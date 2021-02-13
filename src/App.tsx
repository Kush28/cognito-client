import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Button from "./components/Button";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { getAuthCookie, setAuthCookie } from "./utils/cookie";
import { attachLoginListener, initiateLogin } from "./utils/auth";
import MessageBox from "./components/MessageBox";
import WriteMessage from "./components/WriteMessage";

interface LoginData {
  data: {
    [key: string]: string;
  };
}

function App() {
  const [authenticated, setAuthenticated] = useState<Boolean | undefined>(
    undefined
  );

  const handleLogin = ({ data }: LoginData) => {
    if (!data || !data.token) throw new Error("Something went wrong!");
    setAuthCookie(data.token);
    setAuthenticated(true);
  };

  useEffect(() => {
    if (getAuthCookie()) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
      attachLoginListener(handleLogin);
    }
  }, []);

  return (
    <div className="border border-black max-w-screen-md m-auto h-screen bg-gray-200">
      <Header />
      {authenticated === false && (
        <Modal
          icon={<FcGoogle size="2em" />}
          title="Please login"
          body="Login with your google account to use the service"
          cta={[
            <Button className="flex items-center" clickHandler={initiateLogin}>
              Okay
            </Button>,
          ]}
        />
      )}
      <div className="h-full grid grid-rows-msgbox">
        <MessageBox />
        <WriteMessage />
      </div>
    </div>
  );
}

export default App;
