import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ShortenTables({ leagueCode }) {
  const [standings, setStandings] = useState([]);
  const [selectedTeamId, setSelectedTeamId] = useState(null);
  const [error, setError] = useState(null);

  const navigation = useNavigate();

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
      } catch (err) {
        setError(err.message);
      }
    };
    fetchStandings();
  }, [leagueCode]);

  const handleTeamClick = (teamId) =>{

    navigation(`/club/${teamId}`)
  }


  return (
    <>
      <table className="w-[80%] border-collapse border border-gray-400 justify-center items-center mx-auto shadow-lg">
        <thead>
          <tr className="bg-gray-400">
            <th className="border border-gray-600 p-1">Pozycja</th>
            <th className="border border-gray-600 p-1">Drużyna</th>
            <th className="border border-gray-600 p-1">Mecze</th>
            <th className="border border-gray-600 p-1">Punkty</th>
          </tr>
        </thead>
        <tbody>
          {standings.slice(0, 13).map((team) => (
            <tr key={team.team.id} className="text-center">
              <td className="border border-gray-400 p-3">{team.position}</td>
              <td className="border border-gray-400 p-3 flex items-center gap-2">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleTeamClick(team.team.id)}>
                  <img
                    src={team.team.crest}
                    alt={team.team.name}
                    width="30"
                    height="30"
                  />
                  <p className="text-center text-sm">{team.team.name}</p>
                </div>
              </td>
              <td className="border border-gray-400 p-3 ">
                {team.playedGames}
              </td>
              <td className="border border-gray-400 p-3 font-bold bg-gray-200">
                {team.points}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
