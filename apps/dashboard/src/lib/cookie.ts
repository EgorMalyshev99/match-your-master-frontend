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

export const getCSRFToken = (cookies: string[] | undefined) => {
  if (!cookies) {
    return null;
  }

  let xsrf = null;
  for (const cookie of cookies) {
    if (cookie.startsWith("XSRF-TOKEN=")) {
      xsrf = cookie.split("=")[1];
    }
  }

  return xsrf;
};

export const getSessionToken = (cookies: string[] | undefined) => {
  if (!cookies) {
    return null;
  }

  let token = null;
  for (const cookie of cookies) {
    if (cookie.startsWith("match_your_master_session=")) {
      token = cookie.split("=")[1];
    }
  }

  return token;
};
