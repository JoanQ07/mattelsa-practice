import ShoppingCart from "@/components/global/ShoppingCart";
import { Outlet } from "react-router-dom";
import { useCar } from "@/store";
import React from "react";

import NavBar from "@/components/global/NavBar";
import Footer from "@/components/global/Footer";

function App() {
  const { active } = useCar();
  return (
    <div className="h-svh bg-[#F5F5F5]">
      <NavBar />
      {active && <ShoppingCart />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
