function ProductCard({
  addProductToBasket,
  productImage,
  productName,
  productScore,
}) {
  return (
    <div className="m-4 flex items-center">
      <a
        className="flex w-[21rem] bg-white items-top overflow-hidden drop-shadow-lg border border-gray-100 rounded-lg "
        href=""
      >
        <img
          className="w-20 p-4 border-r border-r-slate-200"
          src={productImage}
          alt=""
        />

        <div className="relative top-2 left-3">
          <h5 className="mb-2 font-standard font-bold text-xl">
            {productName}
          </h5>

          <p className=" text-gray-500"> Score: {productScore}</p>
        </div>
      </a>
      <button
        type="button"
        title="Ajouter le joueur"
        className="absolute right-2 h-10 w-10 bg-green-600 text-white font-bold text-xl px-2 rounded-full hover:bg-second_color_d active:scale-90"
        onClick={() => alert("Ajouter au Panier")}
      >
        +
      </button>
    </div>
  );
}

export default ProductCard;
