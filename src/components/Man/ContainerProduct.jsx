import React, { useEffect, useState } from "react";
import ProductMan from "@/components/Man/Product";
import { useProducts } from "@/store";
import { _fechProduct } from "@/api";
import { useToast } from "@/hooks";

const ContainerProduct = () => {
  const { openNotification } = useToast();

  const setProducts = useProducts((state) => state.setProducts);
  const products = useProducts((state) => state.products);

  useEffect(() => {
    getFilterByClass();
  }, []);

  const getFilterByClass = async () => {
    try {
      const res = await _fechProduct.filterByClass({ classProduct: "none" });
      setProducts(res);
    } catch (error) {
      openNotification("error", error);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 p-5">
        {products.length > 0 &&
          products.map((item) => <ProductMan product={item} key={crypto.randomUUID()} />)}
      </div>
    </div>
  );
};

export default ContainerProduct;
