import graphique from "@assets/graphique.png";
import Course_graphPage from "./Course_graphPage";

export default function Graph() {
  return (
    <>
      <h1 className="text-center">Votre progression Eco-score</h1>
      <h2 className="mt-8">Progression globale</h2>
      <img className="h-64 w-auto m-auto" src={graphique} />
      <Course_graphPage title="Course du 12/03/2022"/>
      <Course_graphPage />

    </>
  );
}
