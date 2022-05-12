import { postItemInCart } from "../services/api";
import { useState } from "react";

function PostToApi() {
  const [locationName, setLocationName] = useState("");
  const [productsNumber, setProductsNumber] = useState([]);

  async function onSubmitProduct(e) {
    e.preventDefault();
    const response = await postItemInCart({
      location: locationName,
      products: [productsNumber]
    });
    console.log(response);
  }

  return (
    <div>
      <h1 className="text-4xl">Test envoi de données</h1>

      <form action="http://192.168.1.56:8000/cart/add" method="post">
        <input
          className="border-solid border-2 border-indigo-600"
          type="text"
          onChange={(event) => setLocationName(event.target.value)}
        />
        <input
          className="border-solid border-2 border-indigo-600"
          type="text"
          onChange={(event) => setProductsNumber(event.target.value)}
        />
        <input
          className="border-solid border-2 border-indigo-600"
          type="submit"
          onClick={onSubmitProduct}
        />
      </form>
    </div>
  );
}

export default PostToApi;
