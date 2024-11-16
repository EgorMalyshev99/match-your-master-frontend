import axios from "axios";
import { publicConfig } from "@/config";
import { getCookie } from "@/lib/cookie";

export const api = axios.create({
  baseURL: publicConfig.apiHost,
  headers: {
    "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
  },
});
