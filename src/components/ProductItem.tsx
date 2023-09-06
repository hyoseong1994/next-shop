import React from "react";
import { Product } from "@/types/Produc";
import ProductImage from "./ProductImage";

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col gap-2">
      <ProductImage images={product.image} name={product.name} />
      <span>{product.name}</span>
      <span>{product.price.toLocaleString()}원</span>
    </div>
  );
};

export default ProductItem;
