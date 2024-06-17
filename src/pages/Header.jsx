import "../App.css";
import logo from "../assets/logo.svg";
// import { Bars3Icon } from "@heroicons/react/24/solid";
import {
  Bars3Icon,
  XMarkIcon,
  // ShoppingBagIcon,
  // UserIcon,
  // MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

import NavBar from "../components/ui/NavBar";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import Footer from "../pages/Footer";
// import SearchBar from "@/components/ui/SearchBar";
import Marquee from "react-fast-marquee";
import MarqueeElement from "./MarqueeElement";

function Header() {
  const [show, setShow] = useState(false); //for mobilemenu

  return (
    <>
      {/* <SearchBar /> */}
      <div className="w-full min-w-[320px]  z-50">
        <header className="flex flex-col justify-center items-center h-auto z-50">
          <div className="h-9 flex items-center bg-[#d2bab6] w-full">
            <Marquee
              pauseOnHover
              autoFill
              gradient
              gradientColor="#d2bab6"
              gradientWidth={200}
              className="h-9"
            >
              <MarqueeElement />
            </Marquee>
          </div>
          <div className="bg-white w-full flex justify-center">
            <NavLink to="/" className=" flex items-center h-10 w-20 my-4">
              <img src={logo} />
            </NavLink>
          </div>

          <div className=" bg-black w-full h-14 flex items-center justify-center lg:px-[9rem] px-6">
            <div className="flex items-center justify-start gap-6 sm:justify-between px-5 max-w-[1280px] w-full">
              <nav className="w-fit ">
                {" "}
                <button
                  type="button"
                  className=" items-center justify-center rounded-md text-white"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  <span className="sr-only">Open main menu</span>
                  {/* <MagnifyingGlassIcon className="h-6 w-6  text-white" /> */}
                </button>
              </nav>
              <nav className="hidden lg:flex">
                <ul className="flex items-center justify-center gap-8 text-white text-sm poppins-regular">
                  <li className="relative group px-2 py-2 ">
                    <NavLink
                      to="/"
                      className="hover:opacity-50 transition ease-in-out duration-200"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="relative group px-2 py-[20px]">
                    Catalog
                    {/* drop down Start*/}
                    <div
                      className="
                    absolute top-[70px] -left-48  
                    transform group-hover:transform transition 
              md:-translate-x-40 
                    group-hover:-translate-y-6 opacity-0 
                    group-hover:opacity-100 invisible  
                    group-hover:visible 
                    min-w-[730px] 
                    ml-10 z-50 ease-out duration-500"
                    >
                      <div
                        className="
                    relative p-6 top-0
                    rounded-xl shadow-xl bg-white w-full"
                      >
                        <div className="relative z-10">
                          <p
                            className="
                              uppercase tracking-wider 
                              font-medium 
                              text-gray-400
                              text-[13px]"
                          >
                            Makeup
                          </p>
                          <div className="grid grid-cols-3 gap-6 ">
                            {/* column one start*/}
                            <div>
                              <ul className="mt-3 text-[13px] flex flex-col">
                                <li>
                                  <p
                                    className="text-gray-800 block p-2 -mx-2 font-semibold
                                "
                                  >
                                    Face
                                  </p>
                                </li>
                                <li>
                                  <NavLink
                                    to="catalog/cushionfoundation"
                                    className=" 
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50  text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                  >
                                    Cushion - Foundation
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="catalog/foundation"
                                    className=" 
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50  text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                  >
                                    {" "}
                                    Foundation
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="catalog/primer"
                                    className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                  >
                                    Primer
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="catalog/powder"
                                    className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                  >
                                    Powder
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="catalog/faceprimer"
                                    className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                  >
                                    Face Primer
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="catalog/settingspray"
                                    className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                  >
                                    Setting Spray
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="catalog/colorcorrectingpalette"
                                    className="  break-after: auto;
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                  >
                                    Color Correcting Palette
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="catalog/contour"
                                    className="  break-after: auto;
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                  >
                                    Contour
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="catalog/concealer"
                                    className=" 
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50  text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                  >
                                    Concealer
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                            {/* column one end */}

                            {/* column two start */}
                            <div>
                              <ul className="mt-3 text-[13px] flex flex-col">
                                <li>
                                  <p
                                    className="text-gray-800 block p-2 -mx-2 font-semibold
                                "
                                  >
                                    Cheek
                                  </p>
                                </li>
                                <li>
                                  <NavLink
                                    to="catalog/blusher"
                                    className=" 
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50  text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                  >
                                    Blusher
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="catalog/bronzer"
                                    className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2 -mx-2 font-normal rounded-lg"
                                  >
                                    Bronzer
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="catalog/highlighter"
                                    className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                  >
                                    Highlighter
                                  </NavLink>
                                </li>
                              </ul>

                              <ul className="mt-3 text-[13px] flex flex-col">
                                <li>
                                  <p
                                    className="text-gray-800 block p-2 -mx-2 font-semibold
                                "
                                  >
                                    Lip
                                  </p>
                                </li>
                                <li>
                                  <NavLink
                                    to="catalog/lipoil"
                                    className=" 
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50  text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                  >
                                    Lip Oil
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="catalog/lipbalm"
                                    className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2 -mx-2 font-normal rounded-lg"
                                  >
                                    Lip balm
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="catalog/lipstick"
                                    className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                  >
                                    Lip Sticks
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="catalog/lipgloss"
                                    className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                  >
                                    Lip Gloss
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="catalog/lipliner"
                                    className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                  >
                                    Lip Liner
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="catalog/lipplumper"
                                    className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                  >
                                    Lip Plumper
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                            {/* column 2 end */}

                            {/* column 3 start*/}
                            <div>
                              <ul className="mt-3 text-[13px] flex flex-col">
                                <li>
                                  <p
                                    className="text-gray-800 block p-2 -mx-2 font-semibold
                                "
                                  >
                                    Eye
                                  </p>
                                </li>
                                <li>
                                  <NavLink
                                    to="catalog/eyepalletes"
                                    className=" 
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50  text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                  >
                                    Eye Palletes
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="catalog/mascara"
                                    className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2 -mx-2 font-normal rounded-lg"
                                  >
                                    Mascara
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="catalog/eyeliner"
                                    className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                  >
                                    Eyeliner
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="catalog/eyebrow"
                                    className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                  >
                                    Eyebrow
                                  </NavLink>
                                </li>{" "}
                                <li>
                                  <NavLink
                                    to="catalog/eyelash"
                                    className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                  >
                                    Eyelash
                                  </NavLink>
                                </li>
                              </ul>
                            </div>

                            {/* column 3 end*/}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* drop down Ends*/}
                  </li>
                  <li className="relative  group px-2 py-[11px]">
                    <NavLink
                      to="catalog/gallery"
                      className="hover:opacity-50 transition ease-in-out "
                    >
                      Gossip Gallery
                    </NavLink>

                    {/* drop down Start*/}
                    <div
                      className="
                    absolute top-[70px] left-16  
                    transform group-hover:transform transition 
                    translate-y-0 md:-translate-x-40 
                    group-hover:-translate-y-6 opacity-0 
                    group-hover:opacity-100 invisible  
                    group-hover:visible 
                    min-w-[260px] 
                    ml-10 z-50 ease-in-out duration-500"
                    >
                      <div
                        className="
                    relative p-6 top-0 text-black  
                    rounded-xl shadow-xl bg-white w-full"
                      >
                        <div className="relative z-10">
                          <p
                            className="
                              uppercase tracking-wider 
                              font-medium 
                              text-gray-400
                              text-[13px]"
                          >
                            Gossip Events
                          </p>
                          <ul className="mt-3 text-[13px]">
                            <li>
                              <NavLink
                                to="catalog/gossipevents"
                                className="
                            block p-2 -mx-2  rounded-lg 
                            text-gray-600
                            hover:text-indigo-900
                            hover: bg-gradient-to-br
                            hover:from-indigo-50
                            hover:to-pink-50
                            hover:via-blue-50
                            transitioin
                            ease-in-out
                            duration-300
                            font-semibold
                            "
                              >
                                Gossip Events
                                <p
                                  className="
                              text-gray-500 font-normal text-[10px]
                              "
                                >
                                  Watch our events
                                </p>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="catalog/gossipmemories"
                                className="
                            block p-2 -mx-2  rounded-lg 
                            text-gray-600
                            hover:text-indigo-900
                            hover: bg-gradient-to-br
                            hover:from-indigo-50
                            hover:to-pink-50
                            hover:via-blue-50
                            transitioin
                            ease-in-out
                            duration-300
                            font-semibold
                            "
                              >
                                Gossip Memories
                                <p
                                  className="
                              text-gray-500 font-normal text-[10px]
                              "
                                >
                                  The Moments we captured
                                </p>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* drop down Ends*/}
                  </li>
                  <NavLink to="contact" className="relative  group px-2 py-2">
                    <button className="hover:opacity-50 transition ease-in-out duration-200 ">
                      Contact Us
                    </button>
                  </NavLink>
                </ul>
              </nav>
              <nav>
                <ul className="flex items-center gap-6">
                  {/* This is shoppin bag cart */}
                  {/* <li>
                    <button
                      type="button"
                      className=" items-center justify-center rounded-md text-white"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      <span className="sr-only">Open main menu</span>
                      <NavLink
                        to="cart"
                        to="#"
                        className="hover:opacity-50 transition ease-in-out "
                      >
                        <ShoppingBagIcon className="h-6 w-6  text-white" />
                      </NavLink>
                    </button>
                  </li> */}
                  <li>
                    {/* <div className="m-40 flex justify-center text-center">
                      <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                      >
                        <span>Aceternity UI</span>
                      </HoverBorderGradient>
                    </div> */}
                    {/* This is user login button */}
                    {/* <button
                      type="button"
                      className=" items-center justify-center rounded-md text-white"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      <span className="sr-only">Open main menu</span>
                      <UserIcon className="h-6 w-6  text-white" />
                    </button> */}
                  </li>
                </ul>
              </nav>
            </div>
            {/* Mobile Navbar */}
            <div className="flex lg:hidden justify-center h-full items-center">
              {show ? (
                <button
                  type="button"
                  className=" items-center justify-center rounded-md text-white"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  <span className="sr-only">Open main menu</span>
                  <XMarkIcon className="h-6 w-6  text-white" />
                </button>
              ) : (
                <button
                  type="button"
                  className=" items-center justify-center rounded-md text-white"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
          {/* condition for showing mobile Navbar */}
          <div>{show ? <NavBar /> : null}</div>
        </header>
        <main className="flex justify-center flex-col">
          <Outlet />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default Header;
