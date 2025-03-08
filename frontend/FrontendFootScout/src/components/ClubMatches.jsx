import { useEffect, useState } from "react";

export default function ClubMatches({ teamId }) {
  const [matches, setMatches] = useState();

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

  console.log(matches);

  return (
    <>
      <div className="h-screen w-full">
        <h1 className="text-2xl text-center">Matches</h1>
        <ul className="flex">
          {/* Sciągamy mecze wystylizowac  */}
          {matches && matches.matches.map((match) => (
            <li className=""></li>
          ))}
        </ul>
      </div>
    </>
  );
}
