import { useState, useEffect } from "react";
export default function F1Tracks() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const response = await fetch("http://localhost:5000/f1/tracks");

        if (!response.ok) {
          throw new Error(`Error http. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setTracks(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTrack();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center w-full min-h-screen">
        <ul className="space-y-6 max-h-[200rem] w-max-[600px]">
          {tracks.map((track) => (
            <li key={track._id} className="p-4 text-white rounded-2xl">
              <p className="italic text-md">{track.raceName}</p>
              <img src={track.imgUrl} alt="Track photo" className="bg-white/5 w-full" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
