import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="text-center text-white absolute w-full bottom-0 m-auto"
      style={{ backgroundColor: "#f1f1f1" }}
    >
      <div className="flex justify-around items-center w-full">
        <a href="#!" className=" text-gray-800 ">
          <img src="/src/assets/list.png" className="h-4" />
        </a>
        <a href="#!" className=" text-gray-800">
          <img src="/src/assets/favorite.png" className="h-4" />
        </a>
        <Link to="/course">
          <img src="/src/assets/start.png" className="h-12" />
        </Link>
        <a href="#!" className=" text-gray-800">
          <img src="/src/assets/graph.png" className="h-4" />
        </a>
        <a href="#!" className=" text-gray-800">
          <img src="/src/assets/cart.png" className="h-4" />
        </a>
      </div>
    </footer>
  );
}
