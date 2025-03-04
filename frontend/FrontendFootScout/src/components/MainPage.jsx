import stadium from "../assets/stadium.jpeg";
import ArticleBP from "./MPComponents/ArticleBP";
import Countries from "./MPComponents/Countries";
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

          <div className="absolute bottom-0 left-0 w-full h-86 bg-gradient-to-t from-black/90 to-transparent">
          </div>

          <div className="absolute bottom-2 left-2 text-white px-3 py-1 ">
            <ArticleBP />
          </div>
        </div>
        {/* <p className=" text-white text-2ml mt-2 mb-1 flex justify-end items-center w-[99%] "><a className="cursor-pointer hover:text-blue-500" >View all:</a></p> */}
        <Countries/>

      </div>
    </>
  );
}
