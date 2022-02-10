import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex  bg-gray-200 justify-start py-44 px-8 w-screen h-screen">
      <div className="flex flex-col">
        <p className="font-sans font-semibold">
          created in 2 hours of free time by Me(codestargm) <br />
          for YOU to contribute and add that little green box to your github
          stats
        </p>
        <Link className="py-8" to="/">
          [Back to Home]
        </Link>
      </div>
    </div>
  );
};

export default About;
