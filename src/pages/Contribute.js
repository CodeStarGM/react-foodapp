import React from "react";
import { Link } from "react-router-dom";

const Contribute = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-200">
      <div className="flex flex-col justify-center items-center">
        <a
          href="https://github.com/CodeStarGM/react-foodapp"
          className="font-sans font-semibold text-2xl bg-yellow-400 py-4 px-4 rounded-lg hover:bg-yellow-300 transition duration-300"
        >
          Contribute and make your github profile standout
        </a>
        <Link className="py-8" to="/">
          [Back To Home]
        </Link>
      </div>
    </div>
  );
};

export default Contribute;
