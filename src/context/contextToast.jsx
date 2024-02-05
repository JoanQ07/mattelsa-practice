import React, { createContext, useState } from "react";
import { notification } from "antd";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = async (
    state = "info",
    message = "Sin definir",
    description = "Sin definir",
    placement = "bottomRight"
  ) => {
    api[state]({
      message,
      description,
      placement,
    });
  };

  return (
    <ToastContext.Provider value={{ openNotification }}>
      {contextHolder}
      {children}
    </ToastContext.Provider>
  );
};
