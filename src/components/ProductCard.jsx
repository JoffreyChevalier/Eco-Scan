function ProductCard(addProductToBasket) {
  return (
    <div className="m-4 flex items-center">
      <a
        className="flex items-top overflow-hidden drop-shadow-lg border border-gray-100 rounded-lg "
        href=""
      >
        <div>
          <img
            className="w-28"
            src="https://www.hyperui.dev/photos/activity-1.jpeg"
            alt=""
          />
        </div>

        <div className="mx-2">
          <h5 className="mt-1 font-bold">Lorem ipsum dolor sit amet.</h5>

          <p className="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            adipisci!
          </p>
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
