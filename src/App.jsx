import { Route, Routes } from "react-router";

import HomePage from "@pages/HomePage";
import CurrentShopping from "@pages/CurrentShopping";
import Footer from "./layouts/Footer";
import Graph from "./components/Graph";
import Basket from "@pages/Basket";

import "./App.css";

function App() {
  return (
    <div>
      <div className="mb-16">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course" element={<CurrentShopping />} />
        <Route path="/compte" element={<Graph />} />
        <Route path="/panier" element={<Basket />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
