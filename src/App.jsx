import { Route, Routes } from "react-router";

import HomePage from "@pages/HomePage";
import CurrentShopping from "@pages/CurrentShopping";
import Footer from "./layouts/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <div>
        <div className="mb-14">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course" element={<CurrentShopping />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
