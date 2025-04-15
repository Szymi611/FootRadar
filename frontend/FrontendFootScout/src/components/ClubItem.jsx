import { useNavigate } from "react-router-dom";

export default function ClubItem({ club }) {
  const navigation = useNavigate();

  return (
    <li className="w-[13rem] h-[12rem] rounded-2xl text-center shadow-lg bg-slate-400/20 m-2">
      <article className=" flex flex-col justify-between">
        <div className="p-4 justify-center items-center flex flex-row">
          <div>
            <img src={club.crest} alt={club.name} className="w-37 h-32 justify-center items-center hover:cursor-pointer" onClick={() => navigation(`/club/${club.id}`)}/>
            <div>
              <h1 className="text-sm font-bold mt-2">{club.name}</h1>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}
