import { useEffect, useState } from "react";

export default function F1Drivers() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await fetch("http://localhost:5000/f1/drivers");

        if (!response.ok) {
          throw new Error(`Error http. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setDrivers(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDrivers();
  }, []);

  return (
    <div className={` w-[300px] h-auto  p-4  border-gray-300 rounded-md `}>
      <ul className="space-y-2">
        {drivers.map((driver) => (
          <li
            key={driver.driver_number}
            style={{ background: `#${driver.team_colour}` }}
            className="p-4 rounded-2xl"
          >
            <div className="flex items-center space-x-2">
              <img src={driver.headshot_url} alt="Driver photo" />
              <p className="italic font-bold text-2xl">
                {driver.driver_number}
              </p>
              <p className="p-6">{driver.team_name}</p>
            </div>
            <p className="text-md italic pt-2">
              {driver.full_name.toUpperCase()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
