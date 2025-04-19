import { useEffect, useState } from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

export default function OurBets() {
  const [badges, setBadges] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    async function getLeagueBadges() {
      try {
        const response = await fetch(`http://localhost:5000/leaguesBadges`);

        if (!response.ok) {
          throw new Error(`Error fetching leagueBadges`);
        }
        const data = await response.json();
        const leagueBadges = data.filter((badge) => badge.type === "LEAGUE");
        setBadges(leagueBadges);
      } catch (err) {
        console.error(err);
      }
    }
    getLeagueBadges();
  }, [badges]);

  const handleLeagueChoice = (code) => {
    console.log(code);
    navigate(`/bets/${code}`)
  };

  return (
    <>
      <h1>OurBets Page</h1>
      <ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-6">
          {badges.map((badge) => (
            <li
              className="p-8 justify-center items-center flex flex-col"
              key={badge.code}
            >
              <img src={badge.emblem} className="w-[fit] cursor-pointer hover:w-[8rem]" onClick={()=>handleLeagueChoice(badge.code)}></img>
            </li>
          ))}
        </div>
      </ul>
      <Footer />
    </>
  );
}
