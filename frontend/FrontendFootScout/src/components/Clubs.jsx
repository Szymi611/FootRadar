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
    <div>
      <h1 className="text-white">Clubs</h1>
      <ul className="flex flex-wrap p-6 justify-center ">
        {clubs.map((club) => (
          <ClubItem key={club.id} club={club} />
        ))}
      </ul>
    </div>
  );
}
