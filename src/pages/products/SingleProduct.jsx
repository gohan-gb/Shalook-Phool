import React from "react";
import { useParams } from "react-router-dom";
import MarginWrapper from "../../common/MarginWrapper";
import { LuIndianRupee } from "react-icons/lu";
import { productData } from "../../data/productData";

const SingleProduct = () => {

  const {id} = useParams()

   const singleProduct = productData.find((product)=> product.id == id)

  return (
    <article className="pt-40 pb-12 text-brown">
      <MarginWrapper>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <section className="flex justify-center items-center w-auto lg:w-[45%]">
            <img
              src={singleProduct.image}
              className="h-80 w-80 object-cover rounded-md p-1 border-solid border-brown border-2"
              alt="product"
            />
          </section>

          <section className="w-auto lg:w-96 flex flex-col gap-2">
            <h2 className="subheading text-justify">
              {singleProduct.title}
            </h2>
            <h3 className="p flex">
              <LuIndianRupee /> {singleProduct.price}
            </h3>
            <p className="text-justify">
              {
                singleProduct.description
              }
            </p>

            <button className="bg-[#25d366] mt-4 text-white rounded-sm p-1 hover:drop-shadow-2xl duration-300 text-sm font-semibold">
              Order via whatsapp
            </button>
          </section>
        </div>
      </MarginWrapper>
    </article>
  );
};

export default SingleProduct;
