import { create } from "zustand";

export const useNavBar = create((set) => ({
  active: false,
  openNav: () => set(() => ({ active: true })),
  closeNav: () => set({ active: false }),
}));
