import { useEffect, useState } from "react";
import RacingBullLogo from "../../assets/LogaF1/racingbull.png";
import SauberLogo from "../../assets/LogaF1/sauber.png";
import MercedesLogo from "../../assets/LogaF1/Mercedes.png";
import AstonMartinLogo from "../../assets/LogaF1/astonmartin.png";
import HaasLogo from "../../assets/LogaF1/hass.png";
import FerrariLogo from "../../assets/LogaF1/Ferrari.png";
import RedBullLogo from "../../assets/LogaF1/redbull.png";
import WilliamsLogo from "../../assets/LogaF1/williams.png";
import AlpineLogo from "../../assets/LogaF1/alpine.png";
import McLarenLogo from "../../assets/LogaF1/mclaren.png";
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
        // console.log(data);
        setDrivers(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDrivers();
  }, []);

  const hexToRgba = (hex, alpha = 1) => {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const teamLogos = {
    "Red Bull Racing": RedBullLogo,
    "Kick Sauber": SauberLogo,
    McLaren: McLarenLogo,
    Ferrari: FerrariLogo,
    Mercedes: MercedesLogo,
    "Aston Martin": AstonMartinLogo,
    "Racing Bulls": RacingBullLogo,
    Williams: WilliamsLogo,
    "Haas F1 Team": HaasLogo,
    Alpine: AlpineLogo,
  };

  return (
    <div className={`w-full h-auto  p-4  border-gray-300 rounded-md `}>
      <ul className="space-y-2 max-h-[200rem] inline-block justify-center items-center">
        {drivers.map((driver) => (
          <li
            key={driver.driver_number}
            style={{ background: hexToRgba(driver.team_colour, 0.65) }}
            className="p-4 rounded-2xl"
          >
            <div className="flex items-center space-x-2 w-full">
              <img src={driver.headshot_url} alt="Driver photo" />
              <p className="italic font-bold text-2xl">
                {driver.driver_number}
              </p>
              <div>
                <p className="p-6 text-center items-center flex justify-center">
                  {driver.team_name}
                </p>
                {teamLogos[driver.team_name] && (
                  <img
                    src={teamLogos[driver.team_name]}
                    alt={`${driver.team_name} logo`}
                    className="max-w-[7rem] ml-4 w-full justify-center flex"
                  />
                )}
              </div>
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
