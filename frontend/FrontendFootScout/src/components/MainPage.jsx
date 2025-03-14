import stadium from "../assets/stadium.jpeg";
import retro from "../assets/retro.png";
import Footer from "./Footer";
import ArticleBP from "./MPComponents/ArticleBP";
import Badges from "./MPComponents/Badges";
import Shorten from "./MPComponents/Shorten";

export default function MainPage() {
  return (
    <>
      <div className="relative w-full ">
        <div className="relative w-full h-[500px] flex ">
          <img
            src={stadium}
            className="w-full h-full object-cover"
            alt="Stadion"
          />
          <img
            src={retro}
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
