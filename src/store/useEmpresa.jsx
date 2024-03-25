import { create } from "zustand";

export const useEmpresa = create((set) => ({
  empresa: {
    nombre_emp: "Mattelsa",
  },
}));
