import { faCircleUser, faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { ButtonIcon } from "./ButtonIcon";
import Login from "@/views/global/Login";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useCar } from "@/store";

const NavBar = () => {
  const [activeLogin, setActiveLogin] = useState(false);
  const { openCar } = useCar();

  const closeLogin = () => setActiveLogin(false);
  return (
    <header className="sticky top-0 border-solid border-b-2 bg-[#F5F5F5] w-full">
      <div className="">
        <div className="flex justify-evenly h-[60px] items-center">
          <div className="icon">
            <Link to={"/home"}>
              <ButtonIcon
                properties={{
                  img: "https://b2cmattelsa.vtexassets.com/assets/vtex/assets-builder/b2cmattelsa.store-theme/0.0.55/images/logo-rabbit___e8b01a25767d90edac5484d91eaa9605.svg",
                  stylesImg: "w-6"
                }}
              />
            </Link>
          </div>
          <div className="flex gap-3 justify-center navegation-links w-[70%]">
            <Link className="hover:underline underline-offset-[20px]" to={"category/man"}>
              <span className="font-sans ">hombre</span>
            </Link>
            <Link className="hover:underline underline-offset-[20px]" to={"category/woman"}>
              <span className="font-sans ">mujer</span>
            </Link>
            <Link className="hover:underline underline-offset-[20px]" to={"category/woman"}>
              <span className="font-sans ">cosas</span>
            </Link>
            <Link className="hover:underline underline-offset-[20px]" to={"category/woman"}>
              <span className="font-sans ">tiendas</span>
            </Link>
            <Link className="hover:underline underline-offset-[20px]" to={"category/woman"}>
              <span className="font-sans ">activismo</span>
            </Link>
            <Link className="hover:underline underline-offset-[20px]" to={"category/woman"}>
              <span className="font-sans  text-green-500">sale</span>
            </Link>
          </div>
          <div className="settings">
            <div className="flex gap-7">
              <ButtonIcon
                properties={{ icon: faCircleUser }}
                action={() => setActiveLogin(true)}
                icon={faCircleUser}
              />
              <ButtonIcon icon={faMagnifyingGlass} properties={{ icon: faMagnifyingGlass }} />
              <ButtonIcon properties={{ icon: faCartShopping, styles: "animate-pulse" }} action={openCar} />
            </div>
          </div>
        </div>
      </div>
      {activeLogin && <Login closeLogin={closeLogin} />}
    </header>
  );
};

export default NavBar;
