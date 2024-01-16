import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { ButtonIcon } from "./ButtonIcon";
import { Drawer } from "antd";
import { useCar } from "@/store";
import React from "react";

const ShoppingCart = () => {
  const { closeCar, active } = useCar();
  return (
    <aside>
      <Drawer
        extra={<ButtonIcon properties={{ icon: faRightFromBracket }} action={closeCar} />}
        title="Carrito de compras"
        onClose={closeCar}
        closable={false}
        placement="left"
        open={active}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </aside>
  );
};

export default ShoppingCart;
