import { create } from "zustand";

export const useProducts = create((set) => ({
  products: [],
  setProducts: (newProducts) => set(() => ({ products: newProducts })),
}));
