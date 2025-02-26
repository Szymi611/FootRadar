export default function ClubItem({ club }) {

  return (
    <li className="w-[30rem] rounded-2xl overflow-hidden text-center shadow-lg bg-slate-400 m-2">
      <article className="h-full flex flex-col justify-between">
        <div className="p-4 justify-center items-center flex flex-row">
          <div>
            <img src={club.crest} alt={club.name} className="w-40 h-40" />
            <div>
              <h1 className="text-m font-bold">{club.name}</h1>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}
