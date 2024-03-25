import { faRightFromBracket, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { ButtonIcon } from "./ButtonIcon";
import { Drawer, Divider } from "antd";
import { useCar } from "@/store";

const ShoppingCart = () => {
  const { closeCar, active, listItems, setListItems } = useCar();

  const updateList = (index, operation) => {
    const newList = [...listItems];

    if (operation == "+") newList[index].units++;
    else if (operation == "-") newList[index].units > 0 && newList[index].units--;

    newList[index].priceT = newList[index].price * newList[index].units;
    if (operation == "remove" || newList[index].units < 1) newList.splice(index, 1);
    setListItems(newList);
  };

  return (
    <aside>
      <Drawer
        extra={<ButtonIcon properties={{ icon: faRightFromBracket }} action={closeCar} />}
        title="Bolsa de compras"
        onClose={closeCar}
        closable={false}
        placement="left"
        open={active}
      >
        <div className="flex flex-col gap-0">
          {listItems.length > 0 &&
            listItems.map((el, index) => (
              <div key={crypto.randomUUID()}>
                <div className="flex flex-row">
                  <img className="w-20" src={`http://localhost:3000/static/${el.id}-img-01.webp`} />
                  <div className="grow flex m-2">
                    <div className="flex flex-row">
                      <div className="flex-1 w-40 flex flex-col justify-between">
                        <div className="flex flex-col">
                          <span className=" font-sans font-semibold"> {el.name} </span>
                          <span className="text-slate-500 text-opacity-80 font-sans">
                            Talla: {el.sizeSelect}{" "}
                          </span>
                        </div>
                        <div className="flex">
                          <button
                            className="border-solid border-2 w-6"
                            onClick={() => updateList(index, "-")}
                          >
                            -
                          </button>
                          <span className="mx-2">Cantidad: {el.units}</span>
                          <button
                            className="border-solid border-2 w-6"
                            onClick={() => updateList(index, "+")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex-1 w-40 flex flex-col justify-between">
                        <ButtonIcon
                          properties={{ icon: faTrashCan }}
                          action={() => updateList(index, "remove")}
                        />
                        <span>
                          {el.priceT.toLocaleString("es-CO", {
                            style: "currency",
                            currency: "COP",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <Divider plain />
              </div>
            ))}
        </div>
      </Drawer>
    </aside>
  );
};

export default ShoppingCart;
