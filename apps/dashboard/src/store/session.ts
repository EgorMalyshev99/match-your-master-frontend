import { create } from "zustand";
import { User } from "@/models/user";
import { mockUser } from "@/mock";

type State = {
  user: User | null;
  signInOpened: boolean;
  signUpOpened: boolean;
};

type Actions = {
  login: (user: User) => void;
  logout: () => void;
  setSignInOpened: (isOpened: boolean) => void;
  setSignUpOpened: (isOpened: boolean) => void;
};

const useSessionStore = create<State & Actions>((set) => ({
  user: mockUser,
  signInOpened: false,
  signUpOpened: false,
  login: (user) => set(() => ({ user: user })),
  logout: () => set(() => ({ user: null })),
  setSignInOpened: (isOpened: boolean) =>
    set(() => ({ signInOpened: isOpened })),
  setSignUpOpened: (isOpened: boolean) =>
    set(() => ({ signUpOpened: isOpened })),
}));

export default useSessionStore;
