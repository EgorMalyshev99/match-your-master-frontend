import { create } from "zustand";

type State = {
  signInOpened: boolean;
  signUpOpened: boolean;
};

type Actions = {
  setSignInOpened: (isOpened: boolean) => void;
  setSignUpOpened: (isOpened: boolean) => void;
};

const useAuthStore = create<State & Actions>((set) => ({
  signInOpened: false,
  signUpOpened: false,
  setSignInOpened: (isOpened: boolean) =>
    set(() => ({ signInOpened: isOpened })),
  setSignUpOpened: (isOpened: boolean) =>
    set(() => ({ signUpOpened: isOpened })),
}));

export default useAuthStore;
