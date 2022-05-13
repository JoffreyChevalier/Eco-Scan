function ProductCard(
  addProductToBasket,
  productImage,
  productName,
  productEcoScore
) {
  return (
    <div className="m-4 flex items-center">
      <a
        className="flex bg-white items-top overflow-hidden drop-shadow-lg border border-gray-100 rounded-lg "
        href=""
      >
        <div>
          <img className="w-28" src={productImage} alt="" />
        </div>

        <div className="mx-2">
          <h5 className="mt-1 font-bold">{productName}</h5>

          <img src={productEcoScore} alt="eco-score" />
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
