function ProductCard() {
  return (
    <div>
      <a
        className="m-4 flex items-top overflow-hidden border border-gray-100 rounded-lg "
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
    </div>
  );
}

export default ProductCard;
