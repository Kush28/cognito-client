import { googleAuthUrl } from "../adapters/googleAuth";

let loginWindow: any;

export const initiateLogin = (provider = "google") => {
  if (provider === "google") {
    const h = 500;
    const w = 500;
    const y = window.top.outerHeight / 2 + window.top.screenY - h / 2;
    const x = window.top.outerWidth / 2 + window.top.screenX - w / 2;
    loginWindow = window.open(
      googleAuthUrl(),
      "Login with Google",
      `width=${w},height=${h},top=${y}, left=${x}`
    );
  }
};

export const attachLoginListener = (callback: Function) => {
  window.addEventListener("message", (data) => {
    if (data && data.data && data.data.token) {
      callback(data);
      setTimeout(() => {
        loginWindow.close();
      }, 1000);
    }
  });
};
