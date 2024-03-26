import { create } from "zustand";

export const useCar = create((set) => ({
  setListItems: (newItems) => set(() => ({ listItems: [...newItems] })),
  closeCar: () => set(() => ({ active: false })),
  openCar: () => set(() => ({ active: true })),
  calTotal: () => {
    set(({ listItems, sendPrice }) => {
      let subTotal = 0;
      let total = 0;
      listItems.forEach((item) => (subTotal += item.priceT));
      total = subTotal + sendPrice;

      return { subTotal, total };
    });
  },
  listItems: [],
  active: false,
  sendPrice: 0,
  subTotal: 0,
  total: 0,
}));
