import { UserProfile } from "@/models/user";
import { API_PATHS } from "@/const";

export const getUserProfileData = async (
  id: string | number,
): Promise<UserProfile> => {
  const res = await fetch(API_PATHS.getUserProfile(id));
  const data = await res.json();
  return data;
};
