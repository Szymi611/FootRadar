import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BetsPage() {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const { LeagueCode } = useParams();

  const [matchday, setMatchday] = useState();
  const [matches, setMatches] = useState();
  const [replay, setReplay] = useState();

  //Getting matchday
  useEffect(() => {
    async function getMatchday() {
      try {
        const response = await fetch(
          `http://localhost:5000/matchday/${LeagueCode}`
        );

        if (!response.ok) {
          throw new Error(`Error fetching matchday`);
        }
        const data = await response.json();
        console.log(data);
        setMatchday(data.matchday);
      } catch (err) {
        console.error("Error fetching matchday", err);
      }
    }
    getMatchday();
  }, [LeagueCode]);

  //Getting matches
  useEffect(() => {
    if (!matchday) return;
    async function getMatches() {
      try {
        const response = await fetch(
          `http://localhost:5000/${LeagueCode}/matches?matchday=${matchday}`
        );

        if (!response.ok) {
          throw new Error(`Error response during fetch of the matches`);
        }
        const data = await response.json();
        console.log(data);
        setMatches(data);
      } catch (err) {
        console.error("Error fetching matches", err);
      }
    }
    getMatches();
  }, [LeagueCode, matchday]);

  //Getting Prediction
  useEffect(() => {
    if (!matches) return;

    async function getAiPrediction() {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: `Hey, based on the following matches:\n\n${JSON.stringify(
                        matches,
                        null,
                        2
                      )}\n\nGenerate the most likely high-success bets. You may use additional stats if needed. I know u need more data i have only these shortly give me a two bets for each match with highest probability of success. Do not generate some descriptions only what should be bet and short why. No info of the limitation only bets and make it easy to format [
                            {
                              "match": "Brentford FC vs. Brighton & Hove Albion FC (4-2)",
                              "bets": [
                                "Over 1.5 Goals",
                                "Brentford to score over 1 goal"
                              ]
                            },
                            {
                              "match": "Crystal Palace FC vs. AFC Bournemouth (0-0)",
                              "bets": [
                                "Under 3.5 Goals",
                                "Under 1.5 Goals"
                              ]
                            },
                            ...
                          ]

                          Zwróć to jako json plik json `,
                    },
                  ],
                },
              ],
            }),
          }
        );
        console.log("Request posted");
        if (!response.ok) {
          throw new Error(`Error during generation of AI prediction`);
        }
        console.log("response");
        const data = await response.json();
        console.log(data);

        const aiResponse =
          data?.candidates?.[0]?.content?.parts?.[0]?.text || "Brak odpowiedzi";
        const aiResponseConverted = aiResponse
          .replace(/```json|```/g, "")
          .trim();
        const parsedAiResponseConverted = JSON.parse(aiResponseConverted);
        setReplay(parsedAiResponseConverted);
      } catch (err) {
        console.log("Error fetching AI Prediction", err);
      }
    }
    getAiPrediction();
  }, [matches]);

  return (
    <>
      {!replay && <p className="text-2xl flex justify-center items-center m-4">Loading AI predictions...</p>}
      {replay && (
        <div className="p-4">
          <h1 className="text-xl font-bold mb-4">AI Predictions:</h1>
          {replay?.map((item, index) => (
            <div key={index} className="mb-4 border-b pb-2">
              <h2 className="text-lg font-semibold">{item.match}</h2>
              <ul className="list-disc ml-5">
                {item.bets.map((bet, idx) => (
                  <li key={idx}>{bet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
