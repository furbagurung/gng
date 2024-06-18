import "../App.css";
import logo from "../assets/logo.svg";

import { NavLink } from "react-router-dom";
function footer() {
  return (
    <>
      <footer className="bg-white rounded-lg shadow  dark:bg-gray-900 poppins-regular p-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 font-normal poppins-regular">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href={logo}
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-8" alt="Flowbite Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <NavLink
                  to="../about"
                  className="hover:underline me-4 md:me-6 transition ease-in-out duration-200"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="../privacy"
                  className="hover:underline me-4 md:me-6 transition ease-in-out duration-200"
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="../tnc"
                  className="hover:underline me-4 md:me-6 transition ease-in-out duration-200"
                >
                  Terms & Conditions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="../contact"
                  className="hover:underline me-4 md:me-6 transition ease-in-out duration-200"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              Gossip and Giggles
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default footer;
