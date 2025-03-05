import Flag from "react-world-flags";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Badges() {
  const navigate = useNavigate();
  const [badges, setBadges] = useState([]);

  function handleLeagueChoice(code) {
    console.log(code);
    navigate(`/clubs/${code}`);
  }

  const leagueCodes = ["PL", "DED", "BSA", "PD", "FL1", "BL1", "PPL", "ELC"];

  useEffect(() => {
    async function getBadges() {
      try {
        const response = await fetch("http://localhost:5000/leaguesBadges");

        if (!response.ok) {
          throw new Error(`Błąd API: ${response.status}`);
        }

        const data = await response.json();
        setBadges(data);
      } catch (err) {
        console.error(err);
      }
    }
    getBadges();
  }, []);

  return (
    <>
      <div className="grid grid-cols-auto grid-rows-2 gap-4 w-full mb-6 mt-6 items-center justify-center place-items-center">
        <div className="col-span-10 row-span-2 flex justify-center items-center">
          <ul className="flex gap-6 flex-wrap justify-center ">
            {badges.map((badge) => (
              <li key={badge.code} className="flex items-center justify-center">
                <img
                  src={badge.emblem}
                  alt={badge.name}
                  className="w-[110px] h-[110px] object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
                  onClick={() => handleLeagueChoice(badge.code)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
