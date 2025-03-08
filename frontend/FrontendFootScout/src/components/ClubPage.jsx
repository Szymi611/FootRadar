import { useParams } from "react-router-dom";
import Players from "./Players";
import ClubMatches from "./ClubMatches";

export default function ClubPage() {
  const teamId = useParams();

  console.log(teamId);

  return (
    <>
      <div className="grid grid-cols-6 grid-rows-6 gap-4">
        <div className="col-span-4 row-span-6"><Players teamId={teamId} /></div>
        <div className="col-span-2 row-span-4 col-start-5 row-start-3"><ClubMatches teamId={teamId}/></div>
        <div className="col-span-2 row-span-2 col-start-5 row-start-1">3</div>
      </div>

      
    </>
  );
}
