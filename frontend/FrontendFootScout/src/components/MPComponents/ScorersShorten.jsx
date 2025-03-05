import { useState, useEffect } from "react";

export default function ScorersShorten({ leagueCode }) {
  const [scorers, setScorers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getScorers = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/scorers/${leagueCode}`
        );

        if (!response.ok) {
          throw new Error(`Błąd API: ${response.status}`);
        }

        const data = await response.json();
        setScorers(data);
      } catch {
        setError(error.message);
      }
    };

    getScorers();
  }, [leagueCode]);

  return (
    <>
      {scorers ? (
        <ul className=" bg-white shadow-lg p-3">
          {scorers.map((scorer) => (
            <li
              key={scorer.player.id}
              className="flex justify-between items-center border-b last:border-none py-2"
            >
              <span className="text-sm font-small">{scorer.player.name}</span>
              <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                {scorer.goals}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Ładowanie...</p>
      )}
    </>
  );
}
