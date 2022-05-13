import graphique from "@assets/graphique.png";
import Course_graphPage from "@components/Course_graphPage";
import logo from "@assets/scanEco_logo.png";
import user from "@assets/fake_user.jpg";
import { Link } from "react-router-dom";

export default function Graph() {
  return (
    <>
      <header>
        <div className="flex items-center bg-green-200 h-16 justify-around">
          <Link to="/">
            <img src={logo} className="h-14" alt="logo" />
          </Link>
          <h1 className="text-center font-bold text-3xl">Mes Courses</h1>
          <img src={user} className="h-10 justify-end rounded-lg" alt="user" />
        </div>
      </header>

      <h2 className="mt-8 ml-8">Progression globale</h2>
      <img className="h-64 w-auto m-auto mt-8" src={graphique} />
      <Course_graphPage title="Course du 12/03/2022" score="60/100" />
      <Course_graphPage title="Course du 10/03/2022" score="55/100" />
      <Course_graphPage title="Course du 08/03/2022" score="48/100" />
    </>
  );
}
