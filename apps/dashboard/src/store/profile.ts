import { create } from "zustand";
import { api } from "@/lib/axiosInstance";
import { NEXT_API_PATHS } from "@/constants/routes";
import { User, UserResponse } from "@/models/user";
import { PostResponse } from "@/models/common";

type State = {
  user: User | null;
  isLoading: boolean;
  isUpdateLoading: boolean;
  error: string | null;
};

type Actions = {
  fetchProfile: () => Promise<void>;
  updateProfile: (data: User) => Promise<void>;
};

const defaultState = {
  user: null,
  isLoading: false,
  isUpdateLoading: false,
  error: null,
};

export const useProfileStore = create<State & Actions>((set) => ({
  ...defaultState,
  fetchProfile: async () => {
    set({ isLoading: true });
    try {
      const response = await api.get<UserResponse>(NEXT_API_PATHS.profile);
      if (response.data.success) {
        set({ user: response.data.data });
      } else {
        set({ error: response.data.error });
      }
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },
  updateProfile: async (data: User) => {
    set({ isUpdateLoading: true });
    try {
      const response = await api.put<PostResponse>(
        NEXT_API_PATHS.updateProfile,
        data,
      );
      if (response.data.success) {
        set({ user: data });
      } else {
        set({ error: response.data.error });
      }
    } catch (error) {
      console.error(error);
    } finally {
      set({ isUpdateLoading: false });
    }
  },
}));
