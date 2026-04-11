import React from "react";
import heart from "./heart1.svg";
import shopcart from "./shopcart.svg";

const shopping_content = (props) => {
  return (
    <div className="h-5/6 w-1/8 rounded-2xl overflow-hidden border-2 bg-amber-500">
      <div className="h-5/9 w-full bg-white flex relative">
        <img src={props.image} alt="" className=" h-full w-full object-cover" />
        <img
          src={heart}
          alt="logo"
          className="h-10 w-10 top-1 right-1 object-cover flex absolute"
        />
      </div>
      <div className="h-4/9 w-full bg-[#FCE6E8] relative">
        <div id="Name" className="absolute font-bold text-2xl top-0 left-2">
          {props.name}
        </div>
        <div id="price" className="absolute bottom-8 font-bold left-2">
          ${props.price}
        </div>
        <img src={shopcart} alt="shop" className="absolute bottom-1 right-1" />
      </div>
    </div>
  );
};

export default shopping_content;
