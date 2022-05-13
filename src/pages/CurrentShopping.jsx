import BarCodeScan from "@components/BarcodeScaner/BarCodeScan";
import ProductCard from "@components/ProductCard";
import logo from "@assets/scanEco_logo.png";
import user from "@assets/fake_user.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "@context/ProductContext";

function CurrentShopping() {
  const {
    barcodeContext,
    setProductImage,
    setProductName,
    setProductScore,
    productName,
    productImage,
    productScore,
  } = useContext(ProductContext);

  console.log(barcodeContext);

  async function handleClick() {
    fetch(
      `https://world.openfoodfacts.org/api/v0/product/${barcodeContext}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setProductImage(data.product.image_small_url);
        setProductName(data.product.product_name_fr);
        setProductScore(data.product.ecoscore_grade);
      });
  }

  // async function handleClick(){
  //   const response = await getProduct({barcodeContext});
  //   setProductName(response.product.product_name_fr);
  // }

  console.log(handleClick);

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
            className="h-10 justify-end rounded-full"
            alt="user"
          />
        </div>
      </header>
      <div className="flex mt-6 flex-col items-center">
        <BarCodeScan />
        <ProductCard />
      </div>
      <div>
        <p className="w-64 bg-white h-8">{barcodeContext}</p>
        <button onClick={handleClick}> Envoyer </button>
        <div>
          <h2>Nom du produit</h2>
          <p>{productName}</p>
        </div>
        <div>
          <h2>Eco-score</h2>
          <p>{productScore}</p>
        </div>
        <div>
          <img src={productImage} />
        </div>
      </div>
    </div>
  );
}

export default CurrentShopping;
