import React from "react";
import User from "./User.svg";
import heart from "./Heart.svg";
import circle from "./Circle.svg";
import shop from "./Shop.svg";
const navbar = () => {
  return (
    <div className="w-screen h-20 flex flex-col items text-center">
      <div className="w-full h-1/3  bg-red-500 rounded-t-2xl text-2xl font-bold">
        Made by Crak
      </div>
      <div className="w-full h-2/3 bg-white flex justify-evenly items-center">
        <div id="logo">
          <h2 className="text-red-500 text-2xl font-bold">Dakingo</h2>
        </div>
        <div id="lists">
          <ul className="list-none flex gap-13">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Product</li>
            <li className="cursor-pointer">Resources</li>
            <li className="cursor-pointer">Content</li>
          </ul>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-[#F3F3F3] h-2/3 rounded-2xl p-2"
        />
        <div id="icons" className="flex flex-cols">
          <div id="user" className="m-2 cursor-pointer">
            <img src={User} alt="user" />
          </div>
          <div id="heart" className="m-2 cursor-pointer">
            <img src={heart} alt="heart" />
          </div>
          <div id="circle" className="m-2 cursor-pointer">
            <img src={circle} alt="circle" />
          </div>
          <div id="shop" className="m-2 cursor-pointer">
            <img src={shop} alt="shop" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
