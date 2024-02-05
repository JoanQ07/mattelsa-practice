import { notification } from "antd";
import { create } from "zustand";

const [api] = notification.useNotification();

export const useToast = create((set) => ({
  openToast: (state, message, description) => {
    api[state]({
      message,
      description,
    });
  },
}));