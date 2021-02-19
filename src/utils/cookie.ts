import cookie from "js-cookie";

export const setAuthCookie = (value: string, key = "access_token") => {
  cookie.set(key, value, {
    expires: 1,
    path: "/",
  });
};

export const getAuthCookie = (key = "access_token") => cookie.get(key);

export const getAuthCookieFromServer = (req: any, key = "access_token") => {
  if (!req || !req.headers || !req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(";")
    .find((c: string) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split("=")[1];
};
