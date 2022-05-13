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
<<<<<<< HEAD
          <h1 className="text-center text-slate-700 font-extrabold font-title text-4xl">
            Mon resumé
          </h1>
          <img
            src={user}
            className="h-10 justify-end rounded-full"
            alt="user"
          />
=======
          <h1 className="text-center font-extrabold font-title text-4xl">
            Mes résultats
          </h1>
          <img src={user} className="h-10 justify-end rounded-lg" alt="user" />
>>>>>>> 0dd02c684a31eebdb345d13e4888431948cf0a83
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
