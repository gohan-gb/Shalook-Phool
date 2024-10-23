import React from "react";
import ProductCard from "../../components/ProductCard";
import MarginWrapper from "../../common/MarginWrapper";

const Products = () => {
  return (
    <div className="pt-36 pb-12">
      <MarginWrapper>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </MarginWrapper>
    </div>
  );
};

export default Products;
