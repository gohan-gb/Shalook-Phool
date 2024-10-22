import React from "react";
import MarginWrapper from "./MarginWrapper";
import { CiLocationOn, CiPhone, CiMail } from "react-icons/ci";
import { FaRegCopyright } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green text-white w-full">
      <MarginWrapper>
        <div className="flex sm:flex-row flex-col justify-between py-8 gap-10 px-0 sm:px-8">
          <div>
            <Link to="/">
              <img
                src="/assets/Logo.png"
                loading="lazy"
                className=" w-32 cursor-pointer"
                alt="Logo"
              />
            </Link>
          </div>

          <div>
            <h2 className="font-bold">Connect to us</h2>
            <ul className="mt-2 text-sm">
              <li className="flex items-start justify-start mb-2">
                <CiPhone size="25px" />
                <p>+9875490291</p>
              </li>
              <li className="flex items-center justify-start mb-2">
                <CiMail size="25px" /> <p> shalukfulerlajnai2021@gmail.com </p>
              </li>
              <li className="flex items-start justify-start">
                <CiLocationOn size="25px" />
                <p>
                  {" "}
                  6/c mukundapur, kolkata 700099,
                  <br /> West Bengal, India{" "}
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold pb-4">
              Find Shalook Phool <br /> on social media
            </h2>
            <div className="flex items-center">
              <div className="flex space-x-4">
                <img
                  src="/assets/icons8-instagram.svg"
                  className="bg-white h-6 w-6 rounded-full duration-100 cursor-pointer"
                  alt="instagram-logo"
                />
                <img
                  src="/assets/icons8-facebook.svg"
                  className="bg-white h-6 w-6 rounded-full  duration-100 cursor-pointer"
                  alt="facebook-logo"
                />
                <img
                  src="/assets/icons8-youtube.svg"
                  className="bg-white h-6 w-6 rounded-full duration-100 cursor-pointer"
                  alt="youtube-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </MarginWrapper>
      <img
        src="/assets/pakhi21.png"
        loading="lazy"
        alt="asset"
        className="absolute bottom-8 lg:w-40 sm:w-24 w-44 right-0"
      />

      <div className="bg-[#001800] !text-[#faf9f6] flex items-center justify-center gap-2 py-1">
        {" "}
        <FaRegCopyright />
        <p>শালুক ফুল</p>
      </div>
    </footer>
  );
};

export default Footer;
