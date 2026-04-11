import React from "react";
import Cake1 from "./cake1.jpeg";
import Cake2 from "./cake2.jpeg";
import Cake3 from "./cake3.jpeg";

const Slider = () => {
  return (
    <div className="h-screen w-full relative">
      <img src={Cake1} alt="" className="h-full w-full object-cover" />
      <div className="absolute top-40 left-30 h-100 w-160">
        <h1 className="text-white text-6xl font-bold">
          Dakingo's Ultimate Chocolate Dream!
        </h1>
        <h1 className="text-white text-2xl font-medium m-5">
          Inculed in pure cocoa bliss!
        </h1>
        <button className="rounded-4xl bg-white text-black text-3xl h-14 w-50 text-center font-bold m-3 cursor-pointer">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Slider;
