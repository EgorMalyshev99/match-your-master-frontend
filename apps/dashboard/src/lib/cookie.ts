import { AxiosResponse } from "axios";

export const getCookie = (name: string): string | null => {
  try {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [key, value] = cookie.trim().split("=");
      if (key === name) {
        return value;
      }
    }
    return null;
  } catch (e) {
    // console.error(e);
    return null;
  }
};

export const getCookiesFromResponse = (response: AxiosResponse) => {
  try {
    return response.headers["set-cookie"];
  } catch (e) {
    return [];
  }
};

export const getCookieValue = (
  cookies: string[] | undefined,
  cookieName: string,
) => {
  if (!cookies) {
    return null;
  }

  let value = null;
  let expirationDate = null;
  let maxAge = null;

  for (const cookie of cookies) {
    if (cookie.startsWith(cookieName)) {
      const [cookieValue, ...rest] = cookie.split(";");
      const [name, ...restValue] = cookieValue.split("=");
      value = restValue.join("=");
      for (const item of rest) {
        if (item.trim().startsWith("Expires=")) {
          expirationDate = new Date(item.trim().split("=")[1]);
        } else if (item.trim().startsWith("Max-Age=")) {
          maxAge = parseInt(item.trim().split("=")[1]);
        }
      }
    }
  }

  return { value, expirationDate, maxAge };
};
