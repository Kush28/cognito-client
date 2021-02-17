import Axios from "axios";
import constants from "../config/constants";

const endPointUrl = constants.SERVER_ENDPOINT;
const apiVersion = constants.API_VERSION;

export const googleAuthUrl = () => `${endPointUrl}/${apiVersion}/auth/google`;

export const authUserWithToken = (token: string) =>
  Axios({
    url: `${endPointUrl}/${apiVersion}/user/auth`,
    method: "get",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
