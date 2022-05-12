import BarCodeScan from "../components/BarcodeScaner/BarCodeScan";
import ProductCard from "../components/ProductCard";

function CurrentShopping() {
  return (
    <div>
      <BarCodeScan />
      <ProductCard />
    </div>
  );
}

export default CurrentShopping;
