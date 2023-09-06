import { productSelector } from "@/recoil/products/selector";
import React from "react";
import { useRecoilValueLoadable } from "recoil";
import ProductSlider from "@/components/ProductSlider";
import ProductItem from "@/components/ProductItem";

const App = () => {
  const productsLoadable = useRecoilValueLoadable(productSelector);

  return (
    <div className="relative">
      <ProductSlider />
      {productsLoadable.state === "hasValue" && (
        <div className="flex flex-col gap-8">
          {productsLoadable.contents.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
