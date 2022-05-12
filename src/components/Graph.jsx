export default function Graph(){
    return (
        <>
        <h1 className="text-center">Votre progression Eco-score</h1>
        <h2 className="mt-8">Progression globale</h2>
        <img className="h-64 w-auto m-auto"src="./src/assets/graphique.png"/>
        <ul>
            <li className="mb-8">
                Course du 19/03/2022
            </li>
            <li className="mb-8">
                Course du 25/03/2022
            </li>
            <li className="mb-8">
                Course du 13/04/2022
            </li>
            <li className="mb-8">
                Course du 21/04/2022
            </li>
        </ul>
        </>
    )
}