import graphique from "@assets/graphique.png";
import Course_graphPage from "@components/Course_graphPage";

export default function Graph() {
  return (
    <>
      <header>
        <div className="flex items-center bg-green-200 h-16 justify-around">
          <img
            src="./src/assets/scanEco_logo.png"
            className="h-16"
            alt="logo"
          />
          <h1 className="text-center text-xl">Ma progression</h1>
          <img
            src="./src/assets/fake_user.jpg"
            className="h-12 justify-end"
            alt="user"
          />
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
