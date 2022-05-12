function ProductCard() {
  return (
    <div>
      <a
        className="m-8 grid grid-cols-1 overflow-hidden border border-gray-100 rounded-lg group sm:grid-cols-3"
        href=""
      >
        <div className="relative">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src="https://www.hyperui.dev/photos/activity-1.jpeg"
            alt=""
          />
        </div>

        <div className="p-8 sm:col-span-2">
          <ul className="flex space-x-1">
            <li className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
              Notice
            </li>

            <li className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
              Information
            </li>
          </ul>

          <h5 className="mt-4 font-bold">Lorem ipsum dolor sit amet.</h5>

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
