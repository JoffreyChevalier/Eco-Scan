export default function Course_graphPage({ title, score }) {
  return (
    <div className="flex justify-center px-8">
      <div className="flex flex-col w-6/9 mt-8 rounded-lg bg-white shadow-lg border-solid border-2 border-[#4A7856] ">
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          <div className="flex">
            <h6 className="mr-8">Eco-score</h6>
            <p>{score}</p>
          </div>
          <p className="text-gray-700 text-base mb-4">
            <div className="flex">
              <ul className="m-4 w-1/2">
                <li className="text-[#4A7856] font-bold">
                  Total Co2: 7.55 eq/Kg
                </li>
                <li>agriculture: 84.4 %</li>
                <li>processing: 9.1 %</li>
                <li>packaging: 2.7 %</li>
                <li>transportation: 2.2 %</li>
                <li>distribution: 1.6 %</li>
              </ul>
              <ul className="m-4 w-1/2">
                <li className="text-[#4A7856] font-bold">Bonus/Malus</li>
                <li>Production system: 10</li>
                <li>Origins of ingredients: -5</li>
                <li>Threatened species: -10</li>
                <li>Packaging: -8</li>
              </ul>
            </div>
          </p>
          <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  );
}
