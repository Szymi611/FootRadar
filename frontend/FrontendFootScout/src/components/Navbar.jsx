import { useState } from "react";
import Logo from "../assets/Logo.png";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const menuTabs = ['Home', 'About', 'Services', 'Pricing', 'Contact'];
  
  return (
    // style={{clipPath: !isMenuOpened ? "polygon(100% 0, 100% 0, 100% 90%, 50% 70%, 0 90%, 0 0)" : ""}} 
    <nav className="bg-white/30 border-gray-200 dark:bg-gray-900 text-white dark:border-gray-800 rounded-bl-sm rounded-b-sm shadow-lg" >
      <div className="max-w-screen flex flex-wrap items-center justify-between p-2 mr-2">
        <a href="#" className="flex items-center space-x-3 bg-gray-900">
          <img src={Logo} className="h-20 bg-gray-900" alt="Logo app" />
          <span className="relative self-center text-2xl font-semibold whitespace-nowrap
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full">
            FootRadar
          </span>
        </a>
        
        <button
          onClick={() => setIsMenuOpened(!isMenuOpened)}
          className="md:hidden text-white focus:outline-none"
        >
          {isMenuOpened ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        <div className={`${isMenuOpened ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 text-center md:text-left p-4 md:p-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent">
            {menuTabs.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="relative block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
