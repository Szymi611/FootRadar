import { useEffect, useState } from "react";
import F1Drivers from "./F1Drivers";

export default function F1Page() {
  const [meetings, setMeetings] = useState([]);
  const [tracks, setTracks] = useState([]);

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
      <F1Drivers />
      <div className="flex justify-center items-center">
        <ul className="space-y-2">
          {meetings.map((meeting) => (
            <li
              key={meeting.circuit_key}
              className="p-4 text-black rounded-2xl"
            >
              <p>{meeting.meeting_name}</p>
              <p>{meeting.meeting_official_name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
