import React from "react";
import ticket from "./ticket.svg";
import Foot2 from "./bottom2";
import Foot3 from "./bottom3";
import Foot4 from "./bottom4";

const bottom = () => {
  return (
    <div className="h-full w-full bg-white flex flex-col justify-center items-center">
      <div className="h-2/6 w-7/8 flex rounded-2xl overflow-hidden bg-[#FFCCD5] items-center">
        <div className="h-full w-4/6 flex justify-center items-center">
          <img src={ticket} alt="" className="h-full w-5/6 object-cover" />
        </div>
        <div className="h-full w-2/6 flex flex-col justify-center">
          <h1 className="font-bold text-4xl m-2">The Magical Ticket</h1>
          <p className="font-medium m-2 text-xl">
            Indulge in pure cocoa bliss!
          </p>
          <button className="h-10 w-34 text-white m-3 bg-red-500 rounded-4xl">
            Unlock Now
          </button>
        </div>
      </div>
      <Foot2 />
      <Foot3 />
      <Foot4 />
    </div>
  );
};

export default bottom;
