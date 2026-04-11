import React from "react";
import Shopping_content from "./shopping_content";
import truck from "./truck.svg";
import calender from "./calender.svg";
import cupcake from "./cupcake.svg";
import pen from "./pen.svg";

const shopping = () => {
  const cakes = [
    {
      name: "Chocolate Truffle Cake",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
      price: 500,
    },
    {
      name: "Red Velvet Cake",
      image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7",
      price: 600,
    },
    {
      name: "Black Forest Cake",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      price: 550,
    },
    {
      name: "Vanilla Cream Cake",
      image: "https://images.unsplash.com/photo-1562440499-64c9a111f713",
      price: 450,
    },
    {
      name: "Strawberry Cake",
      image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84",
      price: 520,
    },
  ];

  return (
    <div className="h-screen w-full bg-white">
      <div className="h-23 w-full flex justify-evenly font-black items-center text-center mt-10">
        <div className=" h-23 text-4xl items-center text-center justify-center flex">
          India Loves: Bestsellers from across the country
        </div>
        <button className="bg-red-500 text-white h-12 flex justify-center items-center text-center rounded-full w-30">
          View all
        </button>
      </div>
      <div className="h-1/2 w-full flex justify-center items-center gap-10">
        {cakes.map(function (elem) {
          return (
            <Shopping_content
              name={elem.name}
              image={elem.image}
              price={elem.price}
            />
          );
        })}
      </div>
      <div className="h-1/4 w-full flex justify-center">
        <div className="h-full w-4/6 flex flex-col justify-center items-center rounded-full bg-[#FFCCD5] ">
          <h1 className="text-4xl font-bold mb-3">Our Promise</h1>
          <div className="h-1/2 w-3/4 flex justify-evenly">
            <div className="flex flex-col items-center">
              <img src={truck} alt="turck" className="h-15 w-15" />
              <div>On-Time Delivery</div>
            </div>
            <div className="flex flex-col items-center">
              <img src={pen} alt="turck" className="h-15 w-15" />
              <div>500+ design</div>
            </div>
            <div className="flex flex-col items-center">
              <img src={calender} alt="turck" className="h-15 w-15" />
              <div>2Cr + Order</div>
            </div>
            <div className="flex flex-col items-center">
              <img src={cupcake} alt="turck" className="h-15 w-15" />
              <div>Fresh Baked</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shopping;
