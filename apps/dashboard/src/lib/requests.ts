import { UserProfile } from "@/models/user";
import { API_PATHS } from "@/const";
import { publicConfig } from "@/config";
import { AuthResponse, Credentials } from "@/types/auth";
import { api } from "@/lib/api";

export const authorize = async (
  credentials: Credentials,
): Promise<AuthResponse> => {
  return await api.post(
    `${publicConfig.apiHost}${API_PATHS.login}`,
    credentials,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};

export const getUserProfileData = async (): Promise<UserProfile> => {
  return await api.get(`${publicConfig.apiHost}${API_PATHS.userProfile}`);
};
