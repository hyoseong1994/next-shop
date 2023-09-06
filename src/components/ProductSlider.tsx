import { productState } from "@/recoil/products/atoms";
import React from "react";
import { useRecoilState } from "recoil";

const ProductsSlider = () => {
  const [filterProduct, setFilterProduct] = useRecoilState(productState);

  const products = [
    { label: "Top", value: "tops" },
    { label: "Bottoms", value: "bottoms" },
    { label: "Outerwear", value: "outerwear" },
    { label: "Accessories", value: "accessories" },
  ];

  return (
    <div className="flex items-center">
      <div className="flex overflow-x-hidden py-2">
        <div className="flex flex-nowrap space-x-4 overflow-x-auto">
          {products.map((product, index) => (
            <button
              key={index}
              className={`border p-2 rounded w-24 bg-white hover:bg-slate-200 ${
                filterProduct === product.value
                  ? "bg-slate-200 shadow-md"
                  : "bg-white"
              }`}
              onClick={() => setFilterProduct(product.value)}
            >
              {product.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSlider;
