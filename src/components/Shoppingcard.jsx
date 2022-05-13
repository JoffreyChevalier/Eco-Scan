import logo from "@assets/logo.png";

function ShoppingCard({ img, title, date }) {
  return (
    <div className="w4/5">
      <a
        className="m-4 flex justify-around items-center overflow-hidden border border-gray-100 rounded-lg "
        href="" 
      >
        <div>
          <img className="w-28" src={logo} alt="" />
        </div>
        <div className="mx-2 flex flex-col content-center justify-center">
          <h5 className="mt-1 font-bold"> {title} :</h5>
          <p className="mt-2 text-sm text-gray-500"> {date} :</p>
        </div>
        <img className="w-8 h-8 items-center" src={img} alt="" />
      </a>
    </div>
  );
}

export default ShoppingCard;
