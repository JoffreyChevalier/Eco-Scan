import cartlogo from "@assets/cart_2.png";

function ShoppingCard({ img, date, nb }) {
  return (
    <div className="w4/5 ">
      <a
        className="m-4 bg-white flex justify-between items-center overflow-hidden border border-gray-100 rounded-lg "
        href=""
      >
        <div>
          <img
            className="w-28 p-4 border-r border-r-slate-200"
            src={cartlogo}
            alt=""
          />
        </div>
        <div className="relative bottom-3 right-3">
          <h5 className="mb-2 font-standard font-bold text-sm">
            Courses du {date}:
          </h5>
          <p className=" text-gray-500"> {nb} articles</p>
        </div>
        <span className="flex flex-col items-center mr-2">
          <p className="text-center">Score</p>
          <img className="w-8 h-8" src={img} alt="ecoscore" />
        </span>
      </a>
    </div>
  );
}

export default ShoppingCard;
