import axios from "axios";
import { publicConfig } from "@/config";
import { NextRequest } from "next/server";
import { getCookie } from "@/lib/cookie";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
export const api = axios.create({
  baseURL: "/api",
  headers: {
    "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
  },
});

interface ServerApiConfig {
  req: NextRequest;
}
export const useServerApi = ({ req }: ServerApiConfig) => {
  const serverApi = axios.create({
    baseURL: publicConfig.apiHost,
    headers: {
      Cookie: req.headers.get("cookie"),
      Referer: req.headers.get("referer"),
      Origin: req.headers.get("origin"),
    },
  });

  serverApi.interceptors.request.use((config) => {
    config.headers["X-XSRF-TOKEN"] = req.cookies.get("XSRF-TOKEN")?.value ?? "";
    return config;
  });

  return serverApi;
};
