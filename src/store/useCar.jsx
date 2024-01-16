import { create } from "zustand";

export const useCar = create((set) => ({
  active: false,
  openCar: () => set(() => ({ active: true })),
  closeCar: () => set(() => ({ active: false })),
}));
