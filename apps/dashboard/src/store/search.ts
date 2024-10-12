import { create } from "zustand";

type State = {
  filter: string | null;
};

type Actions = {
  setFilter: (name: string) => void;
};

const useSearchStore = create<State & Actions>((set) => ({
  filter: null,
  setFilter: (name) => set(() => ({ filter: name })),
}));

export default useSearchStore;
