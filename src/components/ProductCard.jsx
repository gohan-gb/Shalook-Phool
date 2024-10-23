import React from "react";
import { LuIndianRupee } from "react-icons/lu";

const ProductCard = () => {
  return (
    <>
      <article className="">
        <div className="flex flex-col items-center justify-center gap-1 bg-green sm:min-h-96 min-h-48  sm:w-60 w-32 text-white rounded-md">
          <img
            src="https://images.pexels.com/photos/7276943/pexels-photo-7276943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="mt-1 sm:h-56 h-28 sm:w-56 w-28  object-cover rounded-sm"
            alt="product"
          />

          <h2 className="sm:p text-sm font-medium sm:w-56 w-28 text-center"> Lorem ipsum dolor sit </h2>
          <div className="font-semibold w-56 text-center ">
            <h3 className="flex justify-center items-center">
              <LuIndianRupee />
              499
            </h3>
          </div>

          <button className="bg-[#25d366] sm:w-auto w-24 rounded-sm p-1 hover:drop-shadow-2xl duration-300 sm:text-sm text-xs font-semibold">
            {" "}
            Buy from whatsapp{" "}
          </button>

          <img src="/assets/alpona_231.png" className="sm:h-8 h-6 w-96 mb-1" alt="" />
        </div>
      </article>
    </>
  );
};

export default ProductCard;
