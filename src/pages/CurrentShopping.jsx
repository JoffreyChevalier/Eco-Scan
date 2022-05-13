import BarCodeScan from "@components/BarcodeScaner/BarCodeScan";
import ProductCard from "@components/ProductCard";
import logo from "@assets/scanEco_logo.png";
import user from "@assets/fake_user.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";

function CurrentShopping() {
  function CreateProduct() {
    const {
      productName,
      productImage,
      productScore,
      setProductName,
      setProductImage,
      setProductScore,
    } = useContext(ProductContext);

    return (
      <div>
        <header>
          <div className="flex items-center bg-green-200 h-16 justify-around">
            <Link to="/">
              <img src={logo} className="h-14" alt="logo" />
            </Link>
            <h1 className="text-center font-bold text-3xl">Mes Courses</h1>
            <img
              src={user}
              className="h-10 justify-end rounded-lg"
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
}

export default CurrentShopping;
