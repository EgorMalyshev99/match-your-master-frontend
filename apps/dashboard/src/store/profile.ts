import { create } from "zustand";

type State = {
  first_name: string;
  last_name: string;
  birth_date: string;
  city: string;
};

type Actions = {
  setData: (state: State) => void;
};

const defaultState = {
  first_name: "",
  last_name: "",
  birth_date: "",
  city: "",
};

export const useProfileStore = create<State & Actions>((set) => ({
  ...defaultState,
  setData: (state: State) => {
    set(state);
  },
}));
