import React from "react";
import ProductCard from "../../components/ProductCard";
import MarginWrapper from "../../common/MarginWrapper";
import { productData } from "../../data/productData";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="pt-36 pb-12">
      <MarginWrapper>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12">

          {
            productData.map( ( product )=>{
              return (
              <Link to={`/products/${product.id}`}>
              <ProductCard 
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.images[0]}
              />
              </Link>
            )
            } )
          }
        </div>
      </MarginWrapper>
    </div>
  );
};

export default Products;
