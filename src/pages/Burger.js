import React from "react";
import Sidebar from "../components/Sidebar";
const Burger = () => {
  return (
    <>
      <Sidebar />
      <div className="bg-gray-100 h-auto w-11/12 flex justify-center items-center">
        <h1 className="text-3xl text-green-500">Add Burgers Here....</h1>
      </div>
    </>
  );
};

export default Burger;
