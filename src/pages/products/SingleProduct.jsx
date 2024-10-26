import React from "react";
import { useParams } from "react-router-dom";
import MarginWrapper from "../../common/MarginWrapper";
import { LuIndianRupee } from "react-icons/lu";
import { productData } from "../../data/productData";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

const SingleProduct = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { id } = useParams();

  const singleProduct = productData.find((product) => product.id == id);

  const handleWhatsapp = () => {

    const message = `shalookphool.in Please order ${singleProduct.title} for me `

    const whatsappUrl = `https://wa.me/+48794231051?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank');
  }
  return (
    <article className="pt-40 pb-12 text-brown">
      <MarginWrapper>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <section className="flex justify-center items-center w-auto lg:w-[45%]">
            <Swiper
              style={{
                "--swiper-navigation-color": "#363020",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 sm:w-[600px] h-[300px] sm:h-[600px] w-[300px] "
            >
              {singleProduct.images.map((image) => (
                <SwiperSlide>
                  <img
                    src={image}
                    alt=""
                    className="sm:h-[600px] h-[300px] sm:w-[600px] w-[300px]   object-cover rounded-md p-1 border-solid border-brown border-2"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* <img
              src={singleProduct.image}
              className="h-80 w-80 object-cover rounded-md p-1 border-solid border-brown border-2"
              alt="product"
            /> */}
          </section>

          <section className="w-auto lg:w-96 flex flex-col gap-2">
            <h2 className="subheading text-justify">{singleProduct.title}</h2>
            <h3 className="p flex">
              <LuIndianRupee />
              {singleProduct.price}
            </h3>
            <p className="text-justify">{singleProduct.description}</p>

            <button onClick={handleWhatsapp} className="bg-[#25d366] mt-4 text-white rounded-sm p-1 hover:drop-shadow-2xl duration-300 text-sm font-semibold">
              Order via whatsapp
            </button>
          </section>
        </div>
      </MarginWrapper>
    </article>
  );
};

export default SingleProduct;
