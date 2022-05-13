import { Route, Routes } from "react-router";

import HomePage from "@pages/HomePage";
import CurrentShopping from "@pages/CurrentShopping";
import Footer from "@layouts/Footer";
import Graph from "@components/Graph";
import Basket from "@pages/Basket";
import Favorite from "@pages/Favorite";

import "./App.css";

function App() {
  return (
    <div className="bg-[url(@assets/background.png)] w-screen bg-fixed justify-center items-center min-h-screen">
      <div className="mb-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course" element={<CurrentShopping />} />
          <Route path="/compte" element={<Graph />} />
          <Route path="/panier" element={<Basket />} />
          <Route path="/favoris" element={<Favorite />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
