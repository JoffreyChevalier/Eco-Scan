import { Route, Routes } from "react-router";
import { useState } from "react";

import HomePage from "@pages/HomePage";
import CurrentShopping from "@pages/CurrentShopping";
import Footer from "@layouts/Footer";
import Graph from "@pages/Graph";
import Basket from "@pages/Basket";
import Favorite from "@pages/Favorite";
import ProductContext from "@context/ProductContext";

import "./App.css";

function App() {
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productScore, setProductScore] = useState("");

  function getProductContext() {
    return {
      productName,
      productImage,
      productScore,
      setProductName,
      setProductImage,
      setProductScore,
    };
  }

  return (
    <div className="bg-[url(@assets/background.png)] h-screen w-screen bg-contain bg-fixed bg-center">
      <div className="mb-20">
        <ProductContext.Provider value={getProductContext()}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course" element={<CurrentShopping />} />
            <Route path="/compte" element={<Graph />} />
            <Route path="/panier" element={<Basket />} />
            <Route path="/favoris" element={<Favorite />} />
          </Routes>
        </ProductContext.Provider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
