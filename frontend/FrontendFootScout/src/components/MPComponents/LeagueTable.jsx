import { useEffect, useState } from "react";

const LeagueTable = ({ leagueCode }) => {
  const [standings, setStandings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/standings/${leagueCode}`
        );

        if (!response.ok) {
          throw new Error(`Błąd API: ${response.status}`);
        }
        const data = await response.json();
        setStandings(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchStandings();
  }, [leagueCode]);

  return (
    <>
      <h2 className="text-2xl font-bold mb-2 text-center col-span-2">
        Tabela {leagueCode.toUpperCase()}
      </h2>
        <table className="w-[80%] border-collapse border border-gray-400 justify-center items-center mx-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 p-1">Pozycja</th>
              <th className="border border-gray-400 p-1">Drużyna</th>
              <th className="border border-gray-400 p-1">Mecze</th>
              <th className="border border-gray-400 p-1">Punkty</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team) => (
              <tr key={team.team.id} className="text-center">
                <td className="border border-gray-400 p-3">{team.position}</td>
                <td className="border border-gray-400 p-3 flex items-center gap-2">
                  <img src={team.team.crest} alt={team.team.name} width="30" height="30" />
                  <p className="text-center">{team.team.name}</p>
                </td>
                <td className="border border-gray-400 p-3">{team.playedGames}</td>
                <td className="border border-gray-400 p-3 font-bold">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
    </>
  );
};

export default LeagueTable;
