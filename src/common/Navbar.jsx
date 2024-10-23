import React from "react";
import MarginWrapper from "./MarginWrapper";
import { NavLink, Link } from "react-router-dom";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { productData } from "../data/productData";
import { LuIndianRupee } from "react-icons/lu";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(true);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchKey, setSearchKey] = useState('')


  const handleNavbar = () => {
    setHamburger(!hamburger);
    setMenu(!menu);
  };

  const handleSearch = () => {
    setSearch(!search);
  };
  const handleSearchKey = (e) => {
    setSearchKey(e.target.value)
  }
  console.log(searchKey)

  return (
    <>
      <nav>
        <div className="z-10 fixed bg-green w-[100%] h-auto text-white">
          <img
            src="/assets/alpona_2345.png"
            loading="lazy"
            alt="line-art"
            className="w-32 absolute top-0 left-8 sm:left-0"
          />
          <MarginWrapper>
            <div className="flex justify-between items-center py-4">
              <section className="w-[33%] justify-start hidden lg:block">
                <ul className="flex items-center gap-10">
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      `${isActive ? "text-[#001800]" : "text-white"}`
                    }
                  >
                    <li className="hover:text-[#001800]">Products</li>
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `${isActive ? "text-[#001800]" : "text-white"}`
                    }
                  >
                    <li className="hover:text-[#001800]">About</li>
                  </NavLink>
                  <NavLink
                    to="/gallery"
                    className={({ isActive }) =>
                      `${isActive ? "text-[#001800]" : "text-white"}`
                    }
                  >
                    <li className="hover:text-[#001800]">Gallery</li>
                  </NavLink>
                </ul>
              </section>

              <section className="w-[33%] justify-start lg:hidden">
                <button
                  onClick={handleNavbar}
                  className=" absolute top-10 left-5 sm:left-32 flex justify-start sm:justify-center items-center "
                >
                  <CiMenuBurger size="36px" />
                </button>
              </section>

              <section className="w-[33%] flex justify-center ">
                <Link to={"/"}>
                  <img
                    src="/assets/Logo.png"
                    loading="lazy"
                    className="w-20"
                    alt="logo"
                  />
                </Link>
              </section>
              <section className="w-[33%] flex justify-end">
                <ul className="flex  gap-20 items-center sm:mr-24 lg:mr-0">
                  <NavLink
                    to="/order"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-[#001800]" : "text-white"
                      } lg:block hidden`
                    }
                  >
                    <li className="hover:text-[#001800]">Bulk Order</li>
                  </NavLink>

                  <button>
                    <CiSearch onClick={handleSearch} size="36px" />
                  </button>
                </ul>
              </section>
            </div>
            <section
              className={`duration-500 ${
                search ? "translate-x-0" : "translate-x-full"
              } fixed top-0 right-0 h-full w-[100%] opacity-95 transition-transform transform ease-in-out bg-black text-black z-10`}
            >
              <div className="absolute left-10 right-10 top-10">
                <div className="flex flex-col justify-end items-end gap-8">
                  <button>
                    <RxCross1
                      onClick={handleSearch}
                      color="white"
                      size="36px"
                    />
                  </button>
                  <input
                    type="search"
                    onChange={handleSearchKey}
                    placeholder="Search for a product"
                    className="h-10 border-2 border-solid border-green rounded-sm p-4 w-full"
                  />
                </div>
              {
                searchKey && <div> 
                  {
                    productData.filter((product)=>{
                      return product.title.toLowerCase().includes(searchKey) || product.category.toLowerCase().includes(searchKey)
                    }).map((product) => (
                      <Link to={`/products/${product.id}`}>
                      <div onClick={handleSearch} className="flex w-full gap-12 border-b-[1px] p-1 border-solid border-white">
                        <img
                          src={product.image}
                          className="w-24 h-24 object-cover"
                          alt="product"
                        />
                        <div>
                          <h2 className="text-white font-bold"> {product.title} </h2>
                          <h3 className="text-white font-bold flex flex-row"> <LuIndianRupee /> {product.price} </h3>
                        </div>
                      </div>
                      </Link>
                    )).slice(0,5)
                  }
                </div>
              }
                {/* {productData.map((product) => (
                  <Link to={`/products/${product.id}`}>
                  <div onClick={handleSearch} className="flex w-full gap-12 border-b-[1px] p-1 border-solid border-white">
                    <img
                      src={product.image}
                      className="w-24 h-24 object-cover"
                      alt="product"
                    />
                    <div>
                      <h2 className="text-white font-bold"> {product.title} </h2>
                      <h3 className="text-white font-bold flex flex-row"> <LuIndianRupee /> {product.price} </h3>
                    </div>
                  </div>
                  </Link>
                ))} */}
              </div>
            </section>

            <section
              className={`duration-500 ${
                menu ? "translate-x-0" : "-translate-x-full"
              } fixed top-0 left-0 h-full w-[40%] block lg:hidden opacity-95 transition-transform transform ease-out bg-green`}
            >
              <ul
                onClick={handleNavbar}
                className="flex flex-col justify-end items-start gap-8 pb-4 ml-4 mt-10"
              >
                <button>
                  <RxCross1 size="36px" />
                </button>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#001800]" : "text-white"}`
                  }
                >
                  <li className="hover:text-[#001800]">Home</li>
                </NavLink>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#001800]" : "text-white"}`
                  }
                >
                  <li className="hover:text-[#001800]">Products</li>
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#001800]" : "text-white"}`
                  }
                >
                  <li className="hover:text-[#001800]">About</li>
                </NavLink>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#001800]" : "text-white"}`
                  }
                >
                  <li className="hover:text-[#001800]">Gallery</li>
                </NavLink>
                <NavLink
                  to="/bulk-order"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#001800]" : "text-white"}`
                  }
                >
                  <li className="hover:text-[#001800]">Bulk order</li>
                </NavLink>
              </ul>
            </section>
          </MarginWrapper>
          <img
            src="/assets/শালুক.png"
            loading="lazy"
            className="sm:w-24 w-16 absolute sm:top-10 top-16 right-10 sm:right-8"
            alt=""
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
