import axios from "axios";
import { publicConfig } from "@/config";
import { getCookie } from "@/lib/cookie";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
export const api = axios.create({
  baseURL: publicConfig.apiHost,
  headers: {
    "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
  },
});
