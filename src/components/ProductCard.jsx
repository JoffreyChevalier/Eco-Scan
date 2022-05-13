function ProductCard(
  addProductToBasket,
  productImage,
  productName,
  productScore
) {
  return (
    <div className="m-4 flex items-center">
      <a
        className="flex w-[20rem] bg-white items-top overflow-hidden drop-shadow-lg border border-gray-100 rounded-lg "
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

          <p className=" text-gray-500"> Score: {productScore.toUpperCase()}</p>
        </div>
      </a>
      <button
        type="button"
        title="Ajouter le joueur"
        className="relative right-2 h-7 w-10 bg-green-600 text-white font-bold text-xl px-2 rounded-full hover:bg-second_color_d active:scale-90"
        onClick={(e) => addProductToBasket(e.target.value)}
      >
        +
      </button>
    </div>
  );
}

export default ProductCard;
