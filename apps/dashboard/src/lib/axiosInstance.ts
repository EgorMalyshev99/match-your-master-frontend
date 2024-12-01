import axios from "axios";
import { publicConfig } from "@/config";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const api = axios.create({
  baseURL: "/api",
});

export const authApi = axios.create({
  baseURL: publicConfig.apiHost,
  headers: {
    Referer: publicConfig.host,
    Origin: publicConfig.host + "/",
  },
  withCredentials: true,
});

export const useLaravelApi = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return null;
  }

  return axios.create({
    baseURL: publicConfig.apiHost,
    headers: {
      Cookie: session.user.cookies,
      Referer: publicConfig.host,
      Origin: publicConfig.host + "/",
      "X-XSRF-TOKEN": session.user.xsrf ?? "",
    },
    withCredentials: true,
    withXSRFToken: true,
  });
};
