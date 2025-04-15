import { useEffect, useState } from "react";
import ClubItem from "./ClubItem";
import { useParams } from "react-router-dom";
import LeagueTable from "./LeagueTable";

export default function LeaguePage() {
  const { LeagueCode } = useParams();

  console.log(LeagueCode);
  
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        console.log("Fetching clubs...");
        const response = await fetch(`http://localhost:5000/teams/${LeagueCode}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        setClubs(data);
      } catch (error) {
        console.error("Error fetching clubs:", error);
      }
    };

    fetchClubs();
  }, [LeagueCode]);

  console.log("Clubs:", clubs);

  return (
    <div className="overflow-auto min-h-screen m-4">
      <div className="grid grid-cols-3 grid-rows-4 gap-4 h-max-screen">
        <div className="col-span-2 row-span-3  p-4 mt-4">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {clubs.map((club) => (
              <ClubItem key={club.id} club={club}/>
            ))}
          </ul>
        </div>

        <div className="col-span-1 row-span-4  rounded-2xl p-4 mt-4">
          <LeagueTable leagueCode={LeagueCode} />
        </div>

        {/* <div className="col-span-2 row-span-1 bg-amber-600 p-4 h-20">
          15
        </div> */}
      </div>
    </div>
  );
}
