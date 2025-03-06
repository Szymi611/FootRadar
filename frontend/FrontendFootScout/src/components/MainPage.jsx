import stadium from "../assets/stadium.jpeg";
import Footer from "./Footer";
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
      <div className="relative w-full ">
        <div className="relative w-full">
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

        <div className="flex flex-col gap-2">
          <Badges />
          <Shorten />
        </div>
      </div>
      <Footer />
    </>
  );
}
