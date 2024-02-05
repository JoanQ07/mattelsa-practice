import { useContext } from "react";
import { ToastContext } from "../../context/contextToast";

export const useToast = () => {
  const context = useContext(ToastContext);

  if (context == undefined) throw new Error("Fuera del conetext toast");

  return context;
};
