import React from "react";
import Sidebar from "../components/Sidebar";
const Drink = () => {
  return (
    <>
      <Sidebar />
      <div className="bg-gray-100 h-auto w-11/12 flex justify-center items-center">
        <h1 className="text-3xl text-green-500">
          Add Drinks Here.... Don't Forget Coffee & Coke
        </h1>
      </div>
    </>
  );
};

export default Drink;
