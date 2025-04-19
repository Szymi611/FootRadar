import { useEffect, useState } from "react";
import F1Drivers from "./F1Drivers";
import F1Tracks from "./F1Tracks";
import Footer from "../Footer.jsx";
import F1Background from '../../assets/F1Background.jpg'

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
        setMeetings(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMeetings();
  }, []);

  return (
    <>
  <div className="h-screen overflow-hidden bg-cover bg-center" style={{backgroundImage: `url(${F1Background})`}}>
    <div className="grid grid-cols-6 grid-rows-7 gap-4 h-full">
      <div className="col-span-2 row-span-4 overflow-auto row-start-1 row-end-7 ">
        <F1Drivers />
      </div>
      <div className="col-span-2 row-span-4 col-start-6 row-start-1 row-end-7 overflow-auto">
        <F1Tracks />
      </div>
      <div className="col-span-2 row-span-4 col-start-4 row-start-1 overflow-auto">
        
      </div>
      <div className="col-span-7 row-start-7">
        <Footer />
      </div>
    </div>
  </div>
    </>
  );
}
