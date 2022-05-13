import FavoriteCard from "@components/FavoriteCard";
import logo from "@assets/scanEco_logo.png";
import user from "@assets/fake_user.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function FavoriteShopping() {
  const [productNName, setNProductName] = useState("");
  const [productNImage, setNProductImage] = useState("");
  const [productNScore, setNProductScore] = useState("");
  const [productRName, setRProductName] = useState("");
  const [productRImage, setRProductImage] = useState("");
  const [productRScore, setRProductScore] = useState("");
  const [productCName, setCProductName] = useState("");
  const [productCImage, setCProductImage] = useState("");
  const [productCScore, setCProductScore] = useState("");

  useEffect(() => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/3017620429484.json`)
      .then((res) => res.json())
      .then((data) => {
        setNProductImage(data.product.image_small_url);
        setNProductName(data.product.product_name);
        setNProductScore(data.product.ecoscore_grade);
      });

    fetch(`https://world.openfoodfacts.org/api/v0/product/7613035676497.json`)
      .then((res) => res.json())
      .then((data) => {
        setRProductImage(data.product.image_small_url);
        setRProductName(data.product.product_name_en);
        setRProductScore(data.product.ecoscore_grade);
      });

    fetch(`https://world.openfoodfacts.org/api/v0/product/3261055930422.json`)
      .then((res) => res.json())
      .then((data) => {
        setCProductImage(data.product.image_small_url);
        setCProductName(data.product.product_name);
        setCProductScore(data.product.ecoscore_grade);
      });
  }, []);

  return (
    <div>
      <header>
        <div className="flex items-center bg-green-200 h-16 justify-around">
          <Link to="/">
            <img src={logo} className="h-14" alt="logo" />
          </Link>
          <h1 className="text-center text-slate-700 font-extrabold font-title text-4xl">
            Mes Favoris
          </h1>
          <img
            src={user}
            className="h-10 justify-end rounded-full"
            alt="user"
          />
        </div>
      </header>
      <div className="flex  mt-6 flex-col items-center">
        <div className="m-4  flex items-center">
          <a
            className="flex w-[20rem] bg-white items-top overflow-hidden drop-shadow-lg border border-gray-100 rounded-lg "
            href=""
          >
            <img
              className="w-20 p-4 border-r border-r-slate-200"
              src={productNImage}
              alt=""
            />

            <div className="relative top-2 left-3">
              <h5 className="mb-2 font-standard font-bold text-xl">
                {productNName}
              </h5>

              <p className=" text-gray-500">
                {" "}
                Score: {productNScore.toUpperCase()}
              </p>
            </div>
          </a>
          <button
            type="button"
            title="Ajouter le joueur"
            className="relative right-6 bottom-12 h-7 w-1 text-white font-bold text-xl px-2 rounded-full hover:bg-second_color_d active:scale-90"
            onClick={(e) => addProductToBasket(e.target.value)}
          >
            ❤️
          </button>
        </div>
        <div className="m-4  flex items-center">
          <a
            className="flex w-[20rem] bg-white items-top overflow-hidden drop-shadow-lg border border-gray-100 rounded-lg "
            href=""
          >
            <img
              className="w-20 p-4 border-r border-r-slate-200"
              src={productRImage}
              alt=""
            />

            <div className="relative top-2 left-3">
              <h5 className="mb-2 font-standard font-bold text-xl">
                {productRName}
              </h5>

              <p className=" text-gray-500">
                {" "}
                Score: {productRScore.toUpperCase()}
              </p>
            </div>
          </a>
          <button
            type="button"
            title="Ajouter le joueur"
            className="relative right-6 bottom-12 h-7 w-1 text-white font-bold text-xl px-2 rounded-full hover:bg-second_color_d active:scale-90"
            onClick={(e) => addProductToBasket(e.target.value)}
          >
            ❤️
          </button>
        </div>
        <div className="m-4  flex items-center">
          <a
            className="flex w-[20rem] bg-white items-top overflow-hidden drop-shadow-lg border border-gray-100 rounded-lg "
            href=""
          >
            <img
              className="w-20 p-4 border-r border-r-slate-200"
              src={productCImage}
              alt=""
            />

            <div className="relative top-2 left-3">
              <h5 className="mb-2 font-standard font-bold text-xl">
                {productCName}
              </h5>

              <p className=" text-gray-500">
                {" "}
                Score: {productCScore.toUpperCase()}
              </p>
            </div>
          </a>
          <button
            type="button"
            title="Ajouter le joueur"
            className="relative right-6 bottom-12 h-7 w-1 text-white font-bold text-xl px-2 rounded-full hover:bg-second_color_d active:scale-90"
            onClick={(e) => addProductToBasket(e.target.value)}
          >
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavoriteShopping;
