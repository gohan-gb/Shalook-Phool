import React from "react";
import ProductCard from "../../../components/ProductCard";
import MarginWrapper from "../../../common/MarginWrapper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productData } from "../../../data/productData";
import { Link } from 'react-router-dom'

const FeatureProducts = ({title, data}) => {
  const settings = {
    dots: false,
    infinite: true,
    centerPadding: "16px",
    centerMode: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false, // Hide navigation arrows
    responsive: [
      {
        breakpoint: 361, // Below 640px (small screens)
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
          // Show 2 slides for smaller screens
        },
      },
      {
        breakpoint: 640, // Below 640px (small screens)
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
          // Show 2 slides for smaller screens
        },
      },
      {
        breakpoint: 768, // Below 1024px (medium screens)
        settings: {
          slidesToShow: 2,
          centerPadding: "16px",
          // Show 3 slides for medium screens (optional)
        },
      },
      {
        breakpoint: 1024, // Below 1024px (medium screens)
        settings: {
          slidesToShow: 2,
          centerPadding: "32px",
          // Show 3 slides for medium screens (optional)
        },
      },
      {
        breakpoint: 1368, // Below 1368px (medium screens)
        settings: {
          slidesToShow: 3,
          centerPadding: "24px",
          // Show 3 slides for medium screens (optional)
        },
      },
    ],
  };

  return (
    <>
      <div>
        <MarginWrapper>
          <div>
            <h2 className="heading text-brown text-center mb-12">
              {title}
            </h2>
          </div>
          <Slider {...settings}>
            {data.map((product) => (
              <div>
                <h3>
                <ProductCard key={product.id}
                  title={product.title}
                  image={product.images[0]}
                  price={product.price}
                  />
                </h3>
              </div>
            ))}
          </Slider>
        </MarginWrapper>
      </div>
    </>
  );
};

export default FeatureProducts;
