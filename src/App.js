import "./App.css";
import Contribute from "./pages/Contribute";
import Home from "./pages/Home";
import About from "./pages/About";
import Burger from "./pages/Burger";
import Pizza from "./pages/Pizza";
import Drink from "./pages/Drink";
import Chicken from "./pages/Chicken";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-white w-auto h-auto flex">
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/burger" exact element={<Burger />} />
            <Route path="/pizza" exact element={<Pizza />} />
            <Route path="/chicken" exact element={<Chicken />} />
            <Route path="/drink" exact element={<Drink />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contribute" exact element={<Contribute />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
