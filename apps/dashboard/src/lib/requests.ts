import { UserProfile } from "@/models/user";
import { API_PATHS } from "@/const";
import axios from "axios";
import { publicConfig } from "@/config";
import { AuthResponse, Credentials } from "@/types/auth";
import { getCookie } from "@/lib/cookie";

export const authorize = async (
  credentials: Credentials,
): Promise<AuthResponse> => {
  return await axios.post(
    `${publicConfig.apiHost}${API_PATHS.login}`,
    credentials,
    {
      headers: {
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
      },
    },
  );
};

export const getUserProfileData = async (): Promise<UserProfile> => {
  return await axios.get(`${publicConfig.apiHost}${API_PATHS.userProfile}`, {
    headers: {
      "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
    },
  });
};
