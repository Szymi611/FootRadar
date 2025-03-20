import NextGames from "./NextGames";
import ShortenTables from "./ShortenTables";
import ScorersShorten from "./ScorersShorten";
import { MdNavigateNext } from "react-icons/md";
import { useCallback, useState, useEffect } from "react";

export default function Shorten() {
  const [matchday, setMatchday] = useState("");
  const [error, setError] = useState(null);

  const leagueCodes = ["PL", "PD", "BL1", "DED", "BSA", "FL1", "PPL", "ELC"];

  useEffect(() => {
    const getMatchday = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/matchday/${leagueCode}`
        );

        if (!response.ok) {
          throw new Error(
            `Błąd API: ${response.status} ${response.statusText}`
          );
        }
        const data = await response.json();
        setMatchday(data.matchday);
      } catch {
        setError(err.message);
      }
    };
    getMatchday();
  }, [matchday]);

  const [leagueCode, setLeagueCode] = useState(leagueCodes[0]);

  const handleNextLeague = useCallback(() => {
    setLeagueCode((prevLeague) => {
      const currentIndex = leagueCodes.indexOf(prevLeague);
      const nextIndex = (currentIndex + 1) % leagueCodes.length;
      console.log(leagueCodes[nextIndex]);
      return leagueCodes[nextIndex];
    });
  }, [leagueCodes]);

  const handlePrevLeague = useCallback(() => {
    setLeagueCode((prevLeague) => {
      const currentIndex = leagueCodes.indexOf(prevLeague);
      const prevIndex =
        (currentIndex - 1 + leagueCodes.length) % leagueCodes.length;
      console.log(leagueCodes[prevIndex]);
      return leagueCodes[prevIndex];
    });
  }, [leagueCodes]);

  return (
    <>
      <div>
        <h2 className="text-lg font-bold mb-2 text-center col-span-2 flex justify-center items-center">
          <MdNavigateNext
            className="rotate-180 m-1 cursor-pointer hover:scale-110"
            onClick={handlePrevLeague}
          />
          Tabela {leagueCode.toUpperCase()}
          <MdNavigateNext
            className="m-1 cursor-pointer hover:scale-110"
            onClick={handleNextLeague}
          />
        </h2>
      </div>
      <div className="grid grid-cols-6 grid-rows-3 gap-4">
        <div className="row-span-3 col-start-3 row-start-1">
          <ScorersShorten leagueCode={leagueCode} />
        </div>
        <div className="col-span-2 row-span-3 col-start-1 row-start-1">
          <ShortenTables leagueCode={leagueCode} />
        </div>
        <div className="col-span-3 row-span-3 col-start-4">
          <NextGames leagueCode={leagueCode} matchday={matchday} />
        </div>
      </div>
    </>
  );
}
