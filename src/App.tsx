import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { BiError } from "react-icons/bi";
import Button from "./components/Button";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { attachLoginListener, initiateLogin } from "./utils/auth";
import MessageBox from "./components/MessageBox";
import WriteMessage from "./components/WriteMessage";
import { useAuthDispatch, useAuthState } from "./context/auth";
import { loginAction } from "./context/auth/actions";
import { getAuthCookie } from "./utils/cookie";
import Spinner from "./components/Spinner";

interface LoginData {
  data: {
    [key: string]: string;
  };
}

function App() {
  const { loading, authenticated, authError } = useAuthState();
  const authDispatch = useAuthDispatch();

  const handleLogin = ({ data }: LoginData) => {
    authDispatch(loginAction(data.token));
  };

  useEffect(() => {
    const accessToken = getAuthCookie();
    if (accessToken) {
      authDispatch(loginAction(accessToken));
    }
    attachLoginListener(handleLogin);
  }, []);

  return (
    <div className="border border-black max-w-screen-md m-auto bg-gray-100 relative">
      <Header />
      {loading && <Spinner />}
      {!loading && !authenticated && !authError && (
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
      {!loading && !authenticated && authError && (
        <Modal
          icon={<BiError size="2em" />}
          title="Error!"
          body="Something went wrong. Please try again."
          cta={[
            <Button className="flex items-center" clickHandler={initiateLogin}>
              Okay
            </Button>,
          ]}
        />
      )}
      <div className="flex flex-col pt-16 pb-28 min-h-screen">
        {authenticated && <MessageBox />}
      </div>
      <div className="fixed w-full max-w-screen-md bottom-0 bg-white">
        <WriteMessage />
      </div>
    </div>
  );
}

export default App;
