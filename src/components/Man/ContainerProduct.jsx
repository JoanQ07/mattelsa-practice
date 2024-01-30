import React, { useEffect, useState } from "react";
import ProductMan from '@/components/Man/Product';
import { _fechProduct } from "@/api";

const ContainerProduct = () => {
  const [products, setProducts] = useState([]);

  const getFilterByClass = async () => {
    try {
      const res = await _fechProduct.filterByClass({ classProduct: "all" });

      setProducts(res);
    } catch (error) {
      console.log("💠  error--> ", error);
    }
  };

  useEffect(() => {
    getFilterByClass();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.length > 0 &&
        products.map((item) => (
          <ProductMan product={item} key={crypto.randomUUID()}/>
        ))}
    </div>
  );
};

export default ContainerProduct;
