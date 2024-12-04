import { create } from "zustand";
import { api } from "@/lib/axiosInstance";
import { NEXT_API_PATHS } from "@/constants/routes";
import { UpdateUserAvatarResponse, User, UserResponse } from "@/models/user";
import { PostResponse } from "@/models/common";
import { ProfileUpdateInputs } from "@/models/validation/profile";

type State = {
  user: User | null;
  isLoading: boolean;
  isUpdateLoading: boolean;
  error: string | null;
};

type Actions = {
  fetchProfile: () => Promise<void>;
  updateProfile: (data: ProfileUpdateInputs) => Promise<void>;
  uploadAvatar: (image: File) => Promise<void>;
  reset: () => void;
};

const defaultProfileState = {
  user: null,
  isLoading: false,
  isUpdateLoading: false,
  error: null,
};

export const useProfileStore = create<State & Actions>((set, getState) => ({
  ...defaultProfileState,
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
  updateProfile: async (data: ProfileUpdateInputs) => {
    set({ isUpdateLoading: true });
    try {
      const response = await api.put<PostResponse>(
        NEXT_API_PATHS.updateUser,
        data,
      );
      if (response.data.success) {
        const currentUser = getState().user;
        if (!currentUser) {
          return;
        }

        set({
          user: {
            ...currentUser,
            ...data,
            date_of_birth: new Date(data.date_of_birth)
              .toISOString()
              .split("T")[0],
          },
        });
      } else {
        set({ error: response.data.error });
      }
    } catch (error) {
      console.error(error);
    } finally {
      set({ isUpdateLoading: false });
    }
  },
  uploadAvatar: async (image: File) => {
    set({ isUpdateLoading: true });
    const data = new FormData();
    data.append("image", image);
    try {
      const response = await api.post<UpdateUserAvatarResponse>(
        NEXT_API_PATHS.uploadUserAvatar,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (response.data.success) {
        const currentUser = getState().user;
        if (!currentUser) {
          return;
        }

        set({ user: { ...currentUser, avatar: response.data.data.url } });
      } else {
        set({ error: response.data.error });
      }
    } catch (error) {
      console.error(error);
    } finally {
      set({ isUpdateLoading: false });
    }
  },
  reset: () => set({ ...defaultProfileState }),
}));
