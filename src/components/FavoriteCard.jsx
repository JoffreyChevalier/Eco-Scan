import heart from "@assets/heart.png";

function FavoriteCard(addProductToBasket) {
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

        <img className="w-6 cursor-pointer"src={heart} alt="coeur"/>
    </div>
  );
}

export default FavoriteCard;
