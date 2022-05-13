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

        <img className="w-6 cursor-pointer"src={heart} alt="coeur"/>
    </div>
  );
}

export default FavoriteCard;
