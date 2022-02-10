import React from "react";
import { Link } from "react-router-dom";

const Card = ({ cardImage, cardTitle, cardLink }) => {
  return (
    <div className="w-60 h-48 bg-red-400 rounded-lg my-8">
      <div className="flex justify-center items-center bg-green-500 w-full h-14 rounded-t-lg">
        <h1 className="text-xl text-white">{cardTitle}</h1>
      </div>
      <Link to={cardLink}>
        <div className=" hover:bg-gray-300 hover:cursor-pointer flex justify-center items-center bg-gray-200 shadow-lg w-full h-full rounded-b-lg">
          <img className="w-40 h-40" src={cardImage} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default Card;
