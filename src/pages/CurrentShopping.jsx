import BarCodeScan from "../components/BarcodeScaner/BarCodeScan";
import ProductCard from "../components/ProductCard";

function CurrentShopping() {
  return (
    <div>
      <header>
        <div className="flex items-center bg-green-200 h-16 justify-around">
          <img
            src="./src/assets/scanEco_logo.png"
            className="h-16"
            alt="logo"
          />
          <h1 className="text-center text-xl">Mes Courses</h1>
          <img
            src="./src/assets/fake_user.jpg"
            className="h-12 justify-end"
            alt="user"
          />
        </div>
      </header>
      <div className="flex mt-6 flex-col items-center">
        <BarCodeScan />
        <ProductCard />
      </div>
    </div>
  );
}

export default CurrentShopping;
