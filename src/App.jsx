import ShoppingCart from "@/components/global/ShoppingCart";
import { ToastProvider } from "./context/contextToast";
import NavBar from "@/components/global/NavBar";
import Footer from "@/components/global/Footer";
import { Outlet } from "react-router-dom";
import { useCar } from "@/store";


function App() {
  const { active } = useCar();
  return (
    <ToastProvider>
      <div>
        <NavBar />
        {active && <ShoppingCart />}
        <Outlet />
        <Footer />
      </div>
    </ToastProvider>
  );
}

export default App;
