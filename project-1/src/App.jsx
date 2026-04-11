import React from "react";
import Navbar from "./components/Navbar/navbar";
import Slider from "./components/Slider/Slider";
import Menu from "./components/Menu/Menu";
import Shopping from "./components/Shopping/shopping";
import Foot from "./components/Bottom/bottom";

const App = () => {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen w-screen bg-[#552817]">
        <Navbar />
        <Slider />
        <Menu />
        <Shopping />
        <Foot />
      </div>
    </>
  );
};

export default App;
