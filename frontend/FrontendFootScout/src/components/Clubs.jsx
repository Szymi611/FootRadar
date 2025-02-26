import { useEffect, useState } from "react";
import ClubItem from "./ClubItem";

export default function Clubs() {
  console.log("Komponent Clubs został wyrenderowany!");
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        console.log("Fetching clubs...");
        const response = await fetch("http://localhost:5000/clubs");
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
  }, []);

  console.log("Clubs:", clubs);

  return (
    <div className="overflow-auto min-h-screen p-6">
      <h1 className="text-white text-center text-4xl">Clubs</h1>
      <div className="grid grid-cols-5 grid-rows-5 gap-4 h-max-screen">
        <div className="row-span-3 col-start-4 row-start-1 bg-sky-950">9</div>
        <div className="row-span-5 col-start-5 row-start-1 bg-sky-500">12</div>
        <div className="col-span-3 row-span-4 col-start-1 row-start-1">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {/* {clubs.map((club) => (
              <ClubItem key={club.id} club={club} />
            ))} */}
            {clubs.slice(0,16).map((club) => (<ClubItem key={club.id} club={club} />))}
          </ul>
        </div>
        <div className="row-span-2 col-start-4 row-start-4 bg-red-400">16</div>
        <div className="col-span-3 row-start-5 bg-amber-600 h-40">15</div>
      </div>
    </div>
  );
}
