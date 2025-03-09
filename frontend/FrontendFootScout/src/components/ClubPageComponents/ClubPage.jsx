import { useParams } from "react-router-dom";
import Players from "./Players";
import ClubMatches from "./ClubMatches";
import ClubCrest from "./ClubCrest";
import { useEffect, useState } from "react";

export default function ClubPage() {
  const teamId = useParams();


  const [clubInfo, setClubInfo] = useState([]);

  useEffect(() => {
    const fetchClubInfo = async () => {
      try {
        const response = await fetch(`http://localhost:5000/team/${teamId.clubId}`);
        if (!response.ok) {
          throw new Error(`Błąd API: ${response.status}`);
        }
        const data = await response.json();
        setClubInfo(data);
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchClubInfo();
  }, [teamId])

  console.log(clubInfo)

  const clubDetails = {
    venue : clubInfo.venue,
    founded : clubInfo.founded,
    address : clubInfo.address,
    website : clubInfo.website,
  }

  return (
    <>
      <h1 className="text-4xl text-center mt-6">{clubInfo.name}</h1>
      <div className="grid grid-cols-6 grid-rows-6 gap-4">
        <div className="col-span-3 row-span-2">
          <ClubCrest teamId={teamId} clubDetails={clubDetails}/>
        </div>
        <div className="col-span-3 row-span-4 col-start-1 row-start-3">
          <Players teamId={teamId} />
        </div>
        <div className="col-span-3 row-span-6 col-start-4 row-start-1">
          <ClubMatches teamId={teamId} />
        </div>
      </div>
    </>
  );
}
