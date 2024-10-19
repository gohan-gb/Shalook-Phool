import React from "react";
import MarginWrapper from "./common/MarginWrapper";

function App() {
  return (
    <>
      <div>
        <nav className=" bg-[#3A7D44] w-[100%] h-16 fixed text-white">
          hey
        </nav>

        <MarginWrapper>
        <div className="pt-16 flex flex-col justify-center items-center text-brown">
          <p className="h1">This is H1</p>
          <p className="heading">This is Heading</p>
          <p className="subheading">This is Subheading</p>
          <p className="p">This is paragraph</p>
          <p className="font-kalpanaUnicode text-8xl"> ভালোবাসার বুনন </p>
        </div>
        <div className="flex flex-wrap justify-center items-center">

          <div className="h-48 w-48 bg-green m-4 p-4 rounded-md flex items-center flex-col ">
            <img
              src="https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img"
            />
            <span className="text-white"> card </span>
          </div>
          <div className="h-48 w-48 bg-green m-4 p-4 rounded-md flex items-center flex-col ">
            <img
              src="https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img"
            />
            <span className="text-white"> card </span>
          </div>
          <div className="h-48 w-48 bg-green m-4 p-4 rounded-md flex items-center flex-col ">
            <img
              src="https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img"
            />
            <span className="text-white"> card </span>
          </div>
          <div className="h-48 w-48 bg-green m-4 p-4 rounded-md flex items-center flex-col ">
            <img
              src="https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img"
            />
            <span className="text-white"> card </span>
          </div>
          
        </div>
        </MarginWrapper>

        <footer className="bg-green text-white w-[100%] h-48 sticky bottom-0 left-0 right-0">
          hi
        </footer>
      </div>
    </>
  );
}

export default App;
