import { Route, Routes } from "react-router";

import HomePage from "@pages/HomePage";
import CurrentShopping from "@pages/CurrentShopping";
import Footer from "./layouts/Footer";
import Graph from "./components/Graph";

import "./App.css";

function App() {
  return (
    <div>
      <div className="mb-16">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course" element={<CurrentShopping />} />
        <Route path="/compte" element={<Graph/>}/>
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
