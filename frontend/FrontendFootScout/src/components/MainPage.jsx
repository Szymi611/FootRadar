import stadium from "../assets/stadium.jpeg";
import ArticleBP from "./MPComponents/ArticleBP";
import Badges from "./MPComponents/Badges";
import LeagueTable from "./MPComponents/LeagueTable";
import NextGames from "./MPComponents/NextGames";
import ScorersShorten from "./MPComponents/ScorersShorten";
import Shorten from "./MPComponents/Shorten";
import ShortenTables from "./MPComponents/ShortenTables";
import Navbar from "./Navbar";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-400">
        <div className="relative w-full h-1/3">
          <img
            src={stadium}
            className="w-full h-full object-cover"
            alt="Stadion"
          />

          <div className="absolute bottom-0 left-0 w-full h-86 bg-gradient-to-t from-black/90 to-transparent"></div>

          <div className="absolute bottom-2 left-2 text-white px-3 py-1 ">
            <ArticleBP />
          </div>
        </div>

        {/* <div className="flex flex-col gap-2">
          <Badges />
          <div className="grid grid-cols-3 grid-rows-2 gap-2 h-[500px] w-full">
            <div className="row-span-2 rounded-2xl bg-transparent ">
              <ShortenTables />
            </div>
            <div className="row-span-2 bg-sky-500">
              <ScorersShorten/>
            </div>
            <div className="row-span-2 bg-fuchsia-700">
              <NextGames />
            </div>
          </div>
        </div> */}

        <div className="flex flex-col gap-2">
          <Badges />
          <Shorten />
        </div>
      </div>
    </>
  );
}
