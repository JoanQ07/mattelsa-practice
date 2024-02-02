import { useState } from "react";
import "../../index.css";

const Product = ({ product }) => {
  const imgDefault = `http://localhost:3000/static/${product.id}-img-01.webp`;
  const imgHover =
    product.classProduct == "oversizeh"
      ? `http://localhost:3000/static/hover-oversizeh.webp`
      : `http://localhost:3000/static/${product.id}-img-02.webp`;

  const [img, setImg] = useState(imgDefault);

  return (
    <div
      onMouseLeave={() => setImg(imgDefault)}
      onMouseEnter={() => setImg(imgHover)}
      className="flex flex-col"
    >
      <img src={img} className="user-drag" width={500}/>
      <span className="font-semibold capitalize">{product.classProduct}</span>
      <span className="text-sm text-zinc-700">{product.price} </span>
    </div>
  );
};

export default Product;
