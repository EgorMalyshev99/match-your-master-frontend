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
    console.error(e);
    return null;
  }
};

export const getCookieFromRequest = (name: string, request: Request) => {
  const cookieHeader = request.headers.get("Cookie");
  if (cookieHeader) {
    const cookies = cookieHeader.split(";");
    for (const cookie of cookies) {
      const [key, value] = cookie.trim().split("=");
      if (key === name) {
        return value;
      }
    }
  }
  return null;
};
