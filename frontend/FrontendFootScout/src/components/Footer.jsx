import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-white rounded-t-lg rounded-tr-lg shadow-sm dark:bg-gray-900 mt-4">
        <div className="w-full max-w-screen-xl mx-auto p-2 md:py-4">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center space-x-3 text-white">
              <img src={Logo} className="h-17 bg-gray-900" alt="Logo app" />
              <span
                className="relative self-center text-2xl font-semibold whitespace-nowrap
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full"
              >
                FootRadar
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="/about" className="me-4 md:me-6 relative self-center text-md font-semibold whitespace-nowrap
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full  ">
                  About
                </a>
              </li>
              <li >
                <a href="#" className="me-4 md:me-6 relative self-center text-md font-semibold whitespace-nowrap
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full ">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="me-4 md:me-6 relative self-center text-md font-semibold whitespace-nowrap
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full  ">
                  Licensing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative self-center text-md font-semibold whitespace-nowrap
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="/" className="hover:underline">
              FootRadar
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
