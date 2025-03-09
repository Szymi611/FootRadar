import { useEffect, useState } from "react";

export default function ClubCrest({
  teamId,
  clubDetails,
}) {
  const [crest, setCrest] = useState();
  const [coach, setCoach] = useState();

  useEffect(() => {
    const getCrest = async () => {
      if (!teamId) return;
      try {
        const response = await fetch(
          `http://localhost:5000/crest/${teamId.clubId}`
        );
        if (!response.ok) {
          throw new Error(`Błąd API: ${response.status}`);
        }
        const data = await response.json();
        setCrest(data.crest);
        setCoach(data.coach);
      } catch (err) {
        console.error(err.message);
      }
    };
    getCrest();
  }, [teamId]);

  const actualYear = new Date().getFullYear();

  return (
    <>
      <div className="flex mt-6">
        <img src={crest} alt="crest" className="w-[400px] h-[400px]" />
        <div className="ml-6">
          <div className="mb-6">
            <p className="italic">Stadium: {clubDetails.venue}</p>
            <p className="italic">Founded: {clubDetails.founded}</p>
            <p className="italic">Address: {clubDetails.address}</p>
            <p className="italic">
              Website:{" "}
              <a
                href={clubDetails.website}
                className="hover:underline hover:text-blue-400"
              >
                {clubDetails.website}
              </a>
            </p>
          </div>
          {coach && (
            <>
              <div className=" flex flex-col justify-end h-[60%]">
                <h1 className="text-2xl  mr-6 font-bold">
                  Coach: {coach.name}
                </h1>
                <p>Nationality: {coach.nationality}</p>
                <p>
                  Age:{" "}
                  {coach
                    ? actualYear - parseInt(coach.dateOfBirth.split("-")[0])
                    : ""}
                </p>
                <p>
                  Contract: from {coach.contract.start} until{" "}
                  {coach.contract.until}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
