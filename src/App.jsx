import { Route, Routes } from "react-router";

import HomePage from "@pages/HomePage";
import CurrentShopping from "@pages/CurrentShopping";
import Footer from "@layouts/Footer";
import Graph from "@pages/Graph";

import "./App.css";

function App() {
  return (
    <div className="bg-[url(@assets/background.png)] w-screen bg-fixed justify-center items-center min-h-screen">
      <div className="mb-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course" element={<CurrentShopping />} />
          <Route path="/compte" element={<Graph />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
