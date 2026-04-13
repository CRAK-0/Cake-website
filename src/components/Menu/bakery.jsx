import React from "react";

const bakery = (props) => {
  return (
    <div className="h-54 w-44 border-black border-2 text-white text-stroke rounded-4xl overflow-hidden relative">
      <img
        src={props.bgimg}
        alt="img"
        className="h-full w-full object-cover "
      />
      <h1 className="m-2 font-bold text-xl absolute bottom-1">
        {props.heading}
      </h1>
    </div>
  );
};

export default bakery;
