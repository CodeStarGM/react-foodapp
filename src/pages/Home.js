import React from "react";
import Burger from "../assets/burger.png";
import Pizza from "../assets/pizza.png";
import Drink from "../assets/drink.png";
import Card from "../components/Card";
import Chicken from "../assets/chicken.png";
import About from "../assets/about.png";
import Contribute from "../assets/contribute.png";
import Sidebar from "../components/Sidebar";
const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="bg-gray-100 h-auto w-11/12 flex flex-col">
        <div className="bg-green-400 w-auto h-10"></div>
        <div className="">
          <div className="grid grid-cols-3 gap-4 place-items-center">
            <Card cardImage={Burger} cardTitle="Burger" cardLink="/burger" />
            <Card cardImage={Pizza} cardTitle="Pizza" cardLink="/pizza" />
            <Card cardImage={Chicken} cardTitle="Chicken" cardLink="/chicken" />
            <Card cardImage={Drink} cardTitle="Drinks" cardLink="/drink" />
            <Card cardImage={About} cardTitle="About" cardLink="/about" />
            <Card
              cardImage={Contribute}
              cardTitle="Contribute"
              cardLink="/contribute"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
