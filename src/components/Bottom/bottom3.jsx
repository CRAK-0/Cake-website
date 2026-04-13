import React from "react";

const bottom3 = () => {
  return (
    <div className="h-50 w-full flex rounded-t-full bg-[#E92839] overflow-hidden text-white">
      <div className="h-full w-2/5 flex flex-col justify-center items-center overflow-hidden">
        <h1 className="text-4xl font-bold m-4">Dakingo</h1>
        <p className="ml-30">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto
          omnis, obcaecati explicabo non labore.
        </p>
      </div>
      <div className="h-full w-1/5 m-6">
        <h1 className="text-2xl font-bold mb-3">Newsletter</h1>
        <ul>
          <li>About Us</li>
          <li>Career</li>
          <li>Program</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="h-full w-1/5 m-6">
        <h1 className="text-2xl font-bold mb-3">Category</h1>
        <ul>
          <li>About</li>
          <li>Cookies</li>
          <li>Blog</li>
          <li>Result</li>
        </ul>
      </div>
      <div className="h-full w-1/5 m-6">
        <h1 className="text-2xl font-bold mb-3">Links</h1>
        <ul>
          <li>Contack Us</li>
          <li>Terms & Conditions</li>
          <li>Site map</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default bottom3;
