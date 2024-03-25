import { create } from "zustand";

export const useCar = create((set) => ({
  setListItems: (newItems) => set(() => ({ listItems: [...newItems] })),
  closeCar: () => set(() => ({ active: false })),
  openCar: () => set(() => ({ active: true })),
  active: false,
  listItems: [],
}));
