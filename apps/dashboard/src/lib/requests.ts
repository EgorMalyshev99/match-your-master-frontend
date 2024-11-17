import { publicConfig } from "@/config";
import { AuthResponse, Credentials } from "@/types/auth";
import { api } from "@/lib/axiosInstance";
import { API_PATHS } from "@/constants/routes";

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
