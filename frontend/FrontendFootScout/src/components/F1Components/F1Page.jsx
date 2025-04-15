import { useEffect, useState } from "react";
import F1Drivers from "./F1Drivers";
import F1Tracks from "./F1Tracks";
import Footer from "../Footer.jsx";

export default function F1Page() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await fetch("http://localhost:5000/f1/meetings");

        if (!response.ok) {
          throw new Error(`Error http. Status: ${response.status}`);
        }
        const data = await response.json();
        // console.log(data);
        setMeetings(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMeetings();
  }, []);

  return (
    <>
  <div className="h-screen overflow-hidden">
    <div className="grid grid-cols-6 grid-rows-5 gap-4 h-full">
      <div className="col-span-2 row-span-4 overflow-auto">
        <F1Drivers />
      </div>
      <div className="col-span-2 row-span-4 col-start-5 row-start-1 overflow-auto">
        <F1Tracks />
      </div>
      <div className="col-span-2 row-span-4 col-start-3 row-start-1 overflow-auto">
        3
      </div>
      <div className="col-span-6 row-start-5">
        <Footer />
      </div>
    </div>
  </div>
    </>
  );
}
