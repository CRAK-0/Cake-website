import React from "react";
import Bakery from "./bakery";

const Menu = () => {
  const bakeryItems = [
    {
      id: 1,
      heading: "Chocolate Cake",
      image:
        "https://i.pinimg.com/1200x/42/3b/68/423b68460bfc65ad9a164d0a66e390c5.jpg",
    },
    {
      id: 2,
      heading: "Strawberry Pastry",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    },
    {
      id: 3,
      heading: "Croissant",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    },
    {
      id: 4,
      heading: "Blueberry Muffin",
      image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b",
    },
    {
      id: 5,
      heading: "Donuts",
      image:
        "https://i.pinimg.com/736x/fc/56/09/fc5609a9fc544c4c9c2315800a58fdca.jpg",
    },
    {
      id: 6,
      heading: "Cupcakes",
      image:
        "https://i.pinimg.com/736x/63/a0/01/63a001b78c9ce3c9e1c91dfd312861f3.jpg",
    },
    {
      id: 7,
      heading: "Banana Bread",
      image:
        "https://i.pinimg.com/736x/6d/ce/1c/6dce1c5e2043fd0638eebcdc5122b4af.jpg",
    },
    {
      id: 8,
      heading: "Macarons",
      image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3",
    },
    {
      id: 9,
      heading: "Cheesecake",
      image: "https://images.unsplash.com/photo-1567171466295-4afa63d45416",
    },
    {
      id: 10,
      heading: "Cinnamon Rolls",
      image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
    },
  ];

  return (
    <div className="h-full w-full bg-white rounded-t-4xl items-center text-center">
      <h1 className="text-5xl font-bold mt-30">
        Menu : What will you wish for?{" "}
      </h1>
      <div className="h-66 w-full mt-12 flex flex-col overflow-x-auto justify-center items-center text-start gap-7 flex-wrap">
        {bakeryItems.map(function (elem) {
          return <Bakery heading={elem.heading} bgimg={elem.image} />;
        })}
      </div>
    </div>
  );
};

export default Menu;
