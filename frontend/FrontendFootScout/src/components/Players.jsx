import { useState, useEffect } from "react";

export default function Players({teamId}) {

  const [players, setPlayers] = useState();

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/players/${teamId.clubId}`
        );
        if (!response.ok) {
          throw new Error(`Błąd API: ${response.status}`);
        }
        const data = await response.json();
        setPlayers(data);
      } catch (err) {
        console.error(err.message);
      }
    };

    if (teamId) getPlayers();
  }, [teamId]);


  return (
    <>
      <div className="h-screen w-full">
        <ul className="flex flex-wrap justify-center">
          {players &&
            players.map((player) => (
              <li key={player.id} className="w-[200px] h-[200px] m-2">
                <div className="w-full h-full flex flex-col items-center justify-center p-2 bg-gray-200 text-center">
                  <h1 className="text-lg font-semibold">{player.name}</h1>
                  <p className="text-sm">Position: {player.position}</p>
                  <p className="text-sm">Nationality: {player.nationality}</p>
                  <p className="text-sm">Date of Birth: {player.dateOfBirth}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
