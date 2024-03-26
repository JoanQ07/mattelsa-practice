import { faRightFromBracket, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { ButtonIcon } from "./ButtonIcon";
import { Drawer, Divider } from "antd";
import { useEffect } from "react";
import { useCar } from "@/store";

const ShoppingCart = () => {
  const { closeCar, active, listItems, setListItems, calTotal, subTotal, total, sendPrice } = useCar();

  const parseValue = (val) => {
    return val.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
    });
  };

  const updateList = (index, operation) => {
    const newList = [...listItems];

    if (operation == "+") newList[index].units++;
    else if (operation == "-") newList[index].units > 0 && newList[index].units--;

    newList[index].priceT = newList[index].price * newList[index].units;
    if (operation == "remove" || newList[index].units < 1) newList.splice(index, 1);
    setListItems(newList);
  };

  useEffect(() => {
    calTotal();
  }, [listItems]);

  return (
    <>
      <Drawer
        extra={<ButtonIcon properties={{ icon: faRightFromBracket }} action={closeCar} />}
        title="Bolsa de compras"
        onClose={closeCar}
        closable={false}
        placement="left"
        open={active}
      >
        <div className="h-full flex flex-col justify-between">
          {/* ITEMS */}
          <div className="overflow-auto">
            {listItems.length > 0 &&
              listItems.map((el, index) => (
                <div className="w-auto" key={crypto.randomUUID()}>
                  <div className="flex flex-row">
                    <img className="w-20" src={`http://localhost:3000/static/${el.id}-img-01.webp`} />
                    <div className="grow flex m-2">
                      <div className="flex flex-row w-full justify-between">
                        <div className="flex-auto flex flex-col justify-between">
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
                        <div className="flex-auto flex flex-col justify-between items-end">
                          <ButtonIcon
                            properties={{ icon: faTrashCan }}
                            action={() => updateList(index, "remove")}
                          />
                          <span>{parseValue(el.priceT)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Divider plain />
                </div>
              ))}
          </div>
          {/* Detalles */}
          <div className="flex flex-wrap gap-3">
            <div className="w-full flex justify-between">
              <span>Subtotal: </span>
              <span> {parseValue(subTotal)} </span>
            </div>
            <div className="w-full flex justify-between">
              <span>Envio: </span>
              <span> {sendPrice != 0 ? parseValue(sendPrice) : "Por calcular"} </span>
            </div>
            <div className="w-full flex justify-between">
              <span className="font-semibold">Total: </span>
              <span className="font-semibold"> {parseValue(total)} </span>
            </div>
            <button className="w-full h-10 bg-[#484848] text-slate-200">IR A PAGAR</button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default ShoppingCart;
