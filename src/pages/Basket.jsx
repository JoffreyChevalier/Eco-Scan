import BasketCard from "@components/BasketCard";
import logo from "@assets/scanEco_logo.png";
import user from "@assets/fake_user.jpg";
import { Link } from "react-router-dom";

function BasketShopping() {
  return (
    <div>
      <header>
        <div className="flex items-center bg-green-200 h-16 justify-around">
          <Link to="/">
            <img src={logo} className="h-14" alt="logo" />
          </Link>
<<<<<<< HEAD
          <h1 className="text-center text-slate-700 font-extrabold font-title text-4xl">
            Mes Courses
          </h1>
          <img
            src={user}
            className="h-10 justify-end rounded-full"
            alt="user"
          />
=======
          <h1 className="text-center font-extrabold font-title text-4xl">
            Mon panier
          </h1>
          <img src={user} className="h-10 justify-end rounded-lg" alt="user" />
>>>>>>> 0dd02c684a31eebdb345d13e4888431948cf0a83
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
