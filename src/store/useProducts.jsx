import { _fechProduct } from "@/api";
import { create } from "zustand";

export const useProducts = create((set) => ({
  products: [],
  setProducts: (newProducts) => set(() => ({ products: newProducts })),
  refreshProducts: async ({ classProduct = "none", orderBy = "none", categoryId = "none" }) => {
    try {
      const products = await _fechProduct.filterByClass({ classProduct, orderBy, categoryId });

      set(() => ({ products }));
    } catch (error) {
      console.error(error)
    }
  },
}));
