import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";
import CurrentShopping from "./pages/CurrentShopping";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course" element={<CurrentShopping />} />
      </Routes>
    </div>
  );
}

export default App;
