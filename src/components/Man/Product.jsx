import { useState } from "react";
import '../../index.css';

const Product = ({ children, product }) => {
  const imgDefault = `http://localhost:3000/static/${product.id}-img-01.webp`;
  const imgHover = `http://localhost:3000/static/hover-oversizeh.webp`;

  const [img, setImg] = useState(imgDefault);

  const validClassProduct = () => (product.classProduct == "oversizeh" ? true : false);
  
  const leaveHover = () => {
    validClassProduct() && setImg(imgDefault);
  };

  const enterHover = () => {
    validClassProduct() && setImg(imgHover);
  };

  return (
    <div className="flex flex-col" onMouseEnter={enterHover} onMouseLeave={leaveHover}>
      <img src={img}  className="user-drag"/>
      <span className="font-semibold capitalize">{product.classProduct}</span>
      <span className="text-sm text-zinc-700">{product.price} </span>
    </div>
  );
};

export default Product;
