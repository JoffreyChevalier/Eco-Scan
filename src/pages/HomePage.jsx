import { Link } from "react-router-dom";
import logo from "@assets/scanEco_logo.png";
import user from "@assets/fake_user.jpg";
import ShoppingCard from "@components/ShoppingCard";

export default function HomePage() {
  return (
    <div>
      <header>
        <div className="flex items-center bg-green-200 h-16 justify-around">
          <Link to="/">
            <img src={logo} className="h-14" alt="logo" />
          </Link>
          <h1 className="text-center font-extrabold font-title text-4xl">
            Mes Courses
          </h1>
          <img src={user} className="h-10 justify-end rounded-lg" alt="user" />
        </div>
      </header>
      <div>
        <div className="py-4">
          <h2 className="ml-4 text-2xl font-standard font-bold text-black sm:text-5xl sm:tracking-tight lg:text-6xl">
            Vos dernieres courses :
          </h2>
        </div>
      </div>
      <ShoppingCard
        date={"15/08/2022"}
        title={"course 1"}
        img={"./src/assets/happy.png"}
      />
      <ShoppingCard
        date={"10/08/2022"}
        title={"course 2"}
        img={"./src/assets/neutral.png"}
      />
      <ShoppingCard
        date={"11/08/2022"}
        title={"course 3"}
        img={"./src/assets/sad.png"}
      />
    </div>
  );
}
