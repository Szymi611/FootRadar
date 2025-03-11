import { useEffect, useState } from "react";

export default function NextGames({ leagueCode, matchday }) {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);



  useEffect(() => {
    const getMatches = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/${leagueCode}/matches?matchday=${matchday}`
        );

        if (!response.ok) {
          throw new Error(
            `Błąd API: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        setMatches(data);
        
      } catch (err) {
        setError(err.message);
      }
    };
    getMatches();
  }, [leagueCode, matchday]);

  return (
    <>
      {matches ? (
        <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded-lg p-4">
          {matches.map((match) => (
            <div
              key={match.id}
              className="flex flex-col items-center border-b last:border-none py-3"
            >
              <p className="text-sm text-gray-500">
                {new Date(match.utcDate).toLocaleString()}{" "}
              </p>
              <div className="flex items-center space-x-2">
                <img
                  src={match.homeTeam.crest}
                  alt={match.homeTeam.name}
                  className="w-6 h-6 object-contain"
                />
                <p className="text-lg font-semibold">{match.homeTeam.name}</p>
                <span className="text-gray-600">vs</span>
                <p className="text-lg font-semibold">{match.awayTeam.name}</p>
                
                <img
                  src={match.awayTeam.crest}
                  alt={match.awayTeam.name}
                  className="w-6 h-6 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Brak dostępnych meczów</p>
      )}
    </>
  );
}
