import { useEffect, useState } from "react";

export default function ClubMatches({ teamId }) {
  const [matches, setMatches] = useState("");

  useEffect(() => {
    const getMatches = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/matches/${teamId.clubId}`
        );

        if (!response.ok) {
          throw new Error(`Błąd API: ${response.status}`);
        }
        const data = await response.json();
        setMatches(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    getMatches();
  }, []);


  return (
    <>
      <div className="h-screen w-full">
        <h1 className="text-2xl text-center">Matches</h1>
        <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded-lg p-4 ">
          
          {matches &&
            matches.matches.map((match) => (
              <div
                key={match.id}
                className="flex flex-col items-center border-b last:border-none py-3"
              >
                <div className="flex items-center space-x-2">
                  <img
                    src={match.homeTeam.crest}
                    alt=""
                    className="w-6 h-6 object-contain"
                  />
                  <p className="text-gray-600 text-sm font-bold">{match.homeTeam.name}</p>
                  <p>vs</p>
                  <p className="text-gray-600 text-sm font-bold">{match.awayTeam.name}</p>
                  <img
                    src={match.awayTeam.crest}
                    alt=""
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <p className="text-gray-600 text-xs">
                  {new Date(match.utcDate)
                    .toLocaleString()
                    .split(":")
                    .slice(0, 2)
                    .join(":")}
                </p>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-600 text-xs font-bold">
                    {match.score.fullTime.home}
                  </p>
                  <p>:</p>
                  <p className="text-gray-600 text-xs font-bold">
                    {match.score.fullTime.away}
                  </p>
                </div>
                <p className="text-gray-600 text-xs ">
                  Referee:{" "}
                  {match.referees.length > 0
                    ? match.referees[0].name
                    : "Unknown"}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
