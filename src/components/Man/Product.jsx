import PreViewProduct from "../Man/PreViewProduct";
import { useEffect, useState } from "react";
import "../../index.css";

const Product = ({ product }) => {
  const imgDefault = `http://localhost:3000/static/${product.id}-img-01.webp`;
  const imgHover = `http://localhost:3000/static/${product.id}-img-02.webp`;

  const [preView, setPreView] = useState(false);
  const [img, setImg] = useState(imgDefault);

  const close = () => {
    setPreView((prev) => !prev);
  };

  return (
    <>
      <button
        onMouseLeave={() => setImg(imgDefault)}
        onMouseEnter={() => setImg(imgHover)}
        onClick={() => setPreView(true)}
      >
        <div className="flex flex-col">
          <img src={img} className="user-drag hover:cursor-pointer" width={500} />
          <span className="font-semibold text-left capitalize">{product.classProduct}</span>
          <span className="text-sm text-left text-zinc-700">
            {product.price.toLocaleString("es-CO", {
              style: "currency",
              currency: "COP",
            })}
          </span>
        </div>
      </button>
      {preView && <PreViewProduct closeModal={close} product={product} />}
    </>
  );
};

export default Product;
