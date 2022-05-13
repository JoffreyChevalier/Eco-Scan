import { Link } from "react-router-dom";

import favorite from "@assets/favorite.png";
import list from "@assets/list.png";
import start from "@assets/start.png";
import graph from "@assets/graph.png";
import cart from "@assets/cart.png";

export default function Footer() {
  return (
    <footer
      className="text-center text-white fixed w-full bottom-0"
      style={{ backgroundColor: "#f1f1f1" }}
    >
      <div className="flex justify-around items-center w-full">
        <Link to="/">
          <img src={list} className="h-6" />
        </Link>
        <a href="#!" className=" text-gray-800">
          <img src={favorite} className="h-6" />
        </a>
        <Link to="/course">
          <img src={start} className="h-14" />
        </Link>
        <Link to="/compte">
          <img src={graph} className="h-6" />
        </Link>
        <a href="#!" className=" text-gray-800">
          <img src={cart} className="h-6" />
        </a>
      </div>
    </footer>
  );
}
