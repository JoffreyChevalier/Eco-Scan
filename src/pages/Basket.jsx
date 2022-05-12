import BasketCard from "@components/BasketCard";

function BasketShopping() {
  return (
    <div>
      <header>
        <div className="flex items-center bg-green-200 h-16 justify-around">
          <img
            src="./src/assets/scanEco_logo.png"
            className="h-16"
            alt="logo"
          />
          <h1 className="text-center text-xl">Mon panier</h1>
          <img
            src="./src/assets/fake_user.jpg"
            className="h-12 justify-end"
            alt="user"
          />
        </div>
      </header>
      <div className="flex mt-6 flex-col items-center">
        <BasketCard />
        <BasketCard />
        <BasketCard />
      </div>
    </div>
  );
}

export default BasketShopping;
