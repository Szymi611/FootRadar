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
      <div className="flex justify-end pr-6">
        <ul className="space-y-2 max-h-[200rem] pl-0">
          {tracks.map((track) => (
            <li key={track._id} className="p-4 text-black rounded-2xl">
              <p className="italic text-md">{track.raceName}</p>
              <img src={track.imgUrl} alt="Track photo" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
