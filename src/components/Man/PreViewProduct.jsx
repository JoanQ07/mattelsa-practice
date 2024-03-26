import React, { useEffect, useState } from "react";
import { useEmpresa } from "../../store";
import { Modal, Carousel } from "antd";
import { useToast } from "@/hooks";
import { useCar } from "@/store";

const PreViewProduct = ({ closeModal, product }) => {
  const [sizeSelect, setSizeSelect] = useState("");
  const { openNotification } = useToast();
  const [imgs, setImgs] = useState([]);
  const { empresa } = useEmpresa();
  const { listItems } = useCar();

  const loadItem = () => {
    const validProduct = listItems.find((el) => el.id == product.id && el.sizeSelect == sizeSelect);
    if (validProduct)
      return openNotification(
        "info",
        "Bolsa de compras",
        `El producto ${product.name} ya se encuentra en la bolsa`
      );
    listItems.push({ ...product, sizeSelect, units: 1, priceT: product.price });
    openNotification("success", "Bolsa de compras", `El producto ${product.name} fue agregado`);
  };

  const updateListSelect = (size) => {
    if (size == sizeSelect) return setSizeSelect("");
    setSizeSelect(size);
  };

  const close = () => {
    closeModal();
  };

  const loadImg = () => {
    const newImgs = [];
    for (let index = 0; index < 2; index++) {
      const imgCont = `http://localhost:3000/static/${product.id}-img-0${index + 1}.webp`;
      newImgs.push(imgCont);
    }
    setImgs(newImgs);
  };

  useEffect(() => {
    loadImg();
  }, [sizeSelect]);

  return (
    <Modal onCancel={close} onOk={() => close()} width={1000} open footer={null} centered>
      <div className="flex">
        <Carousel effect="fade" className="w-[400px]">
          {imgs.length > 0 &&
            imgs.map((item) => (
              <div key={crypto.randomUUID()}>
                <img src={item} />
              </div>
            ))}
        </Carousel>
        <div className="grow">
          <div className="flex flex-col m-24">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col">
                <span className="font-sans"> {empresa.nombre_emp} </span>
                <span className="text-xl font-sans font-semibold"> {product.name} </span>
                <span className="text-slate-500 text-opacity-80 font-sans">Item: {product.id} </span>
              </div>
              <span className="font-sans text-lg font-semibold">
                {product.price.toLocaleString("es-CO", {
                  style: "currency",
                  currency: "COP",
                })}
              </span>
              <div className="flex flex-col gap-2">
                <div>
                  <span className="text-lg font-semibold">Talla</span>
                </div>
                <div className="flex gap-3">
                  {product.size.length &&
                    product.size.map((item) => (
                      <button
                        onClick={() => updateListSelect(item.size)}
                        key={crypto.randomUUID()}
                        className={`font-bold hover:bg-[#484848] hover:text-slate-200 w-[45px] h-[45px] rounded-none border-solid border-2 border-slate-500 ${
                          sizeSelect == item.size ? "bg-[#484848] text-slate-200" : "bg-inherit text-inherit"
                        }`}
                      >
                        {item.size.toUpperCase()}
                      </button>
                    ))}
                </div>
              </div>
              <button
                disabled={!sizeSelect}
                onClick={loadItem}
                className={`h-12 font-semibold text-md font-sans ${
                  sizeSelect ? "bg-[#484848] text-slate-200" : "bg-[#E4E4E4]"
                }`}
              >
                {sizeSelect ? "Agregar a la bolsa" : "Seleciona una talla"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default PreViewProduct;
