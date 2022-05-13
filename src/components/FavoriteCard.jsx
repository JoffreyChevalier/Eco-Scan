function FavoriteCard(
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
        <img className="w-28" src={productImage} alt="" />

        <div className="mx-2">
          <h5 className="mt-1 font-bold">{productName}</h5>

          <h3>{productEcoScore}</h3>
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
  );
}

export default FavoriteCard;
