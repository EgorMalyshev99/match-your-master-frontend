import { create } from "zustand";
import { User } from "@/models/user";
import { mockUser } from "@/mock";

type State = {
  user: User | null;
};

type Actions = {
  login: (user: User) => void;
  logout: () => void;
};

const useSessionStore = create<State & Actions>((set) => ({
  user: mockUser,
  login: (user) => set(() => ({ user: user })),
  logout: () => set(() => ({ user: null })),
}));

export default useSessionStore;
