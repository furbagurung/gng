import "../App.css";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <>
      <div className="w-full  z-50">
        <header className="flex flex-col justify-center items-center h-auto z-50">
          <div className="bg-white w-full flex justify-center">
            <a href="#" className=" flex items-center h-10 w-20 my-4">
              <img src={logo} />
            </a>
          </div>

          <div className=" bg-black w-full h-14 md:flex items-center justify-center min-w-[640px] px-[9rem] hidden">
            <nav>
              <ul className="flex items-center justify-center gap-8 text-white text-sm poppins-regular">
                <li className="relative group px-2 py-2">
                  <a
                    href="#"
                    className="hover:opacity-50 transition ease-in-out duration-200"
                  >
                    Home
                  </a>
                </li>
                <li className="relative group px-2 py-[10px]">
                  <button
                    className="
                  hover:opacity-50 transition
                  ease-in-out duration-300
                  group"
                  >
                    Catalog
                  </button>

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
                                <a
                                  href="#"
                                  className=" 
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50  text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                >
                                  Cushion - Foundation
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
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
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                >
                                  Primer
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                >
                                  Powder
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                >
                                  Face Primer
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                >
                                  Setting Spray
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="  break-after: auto;
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                >
                                  Color Correcting Palette
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="  break-after: auto;
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                >
                                  Contour
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className=" 
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50  text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                >
                                  Concealer
                                </a>
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
                                <a
                                  href="#"
                                  className=" 
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50  text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                >
                                  Blusher
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2 -mx-2 font-normal rounded-lg"
                                >
                                  Bronzer
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                >
                                  Highlighter
                                </a>
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
                                <a
                                  href="#"
                                  className=" 
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50  text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                >
                                  Lip Oil
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2 -mx-2 font-normal rounded-lg"
                                >
                                  Lip balm
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                >
                                  Lip Sticks
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                >
                                  Lip Gloss
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                >
                                  Lip Liner
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                >
                                  Lip Plumper
                                </a>
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
                                <a
                                  href="#"
                                  className=" 
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50  text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                >
                                  Eye Palletes
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2 -mx-2 font-normal rounded-lg"
                                >
                                  Mascara
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                >
                                  Eyeliner
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                >
                                  Eyebrow
                                </a>
                              </li>{" "}
                              <li>
                                <a
                                  href="#"
                                  className="  
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50 text-gray-400 
                                hover:text-indigo-600 
                                transition ease-in-out duration-300 
                                block py-1 px-2  -mx-2 font-normal rounded-lg"
                                >
                                  Eyelash
                                </a>
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
                  <button className="hover:opacity-50 cursor-pointer transition ease-in-out duration-200 ">
                    Gossip Gallery
                  </button>

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
                            <a
                              href="#"
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
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
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
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* drop down Ends*/}
                </li>
                <li className="relative  group px-2 py-2">
                  <button className="hover:opacity-50 transition ease-in-out duration-200 ">
                    Contact Us
                  </button>
                </li>
              </ul>
            </nav>
            {/* <nav>
              <ul>
                <li>
                  <a href='#' className='rounded-full bg-white bg-opacity-90 px-3 py-2 text-sm font-semibold flex justify-center items-center group'>
                    <span className='mr-2'>Sign in</span>


                  </a>
                </li>
              </ul>
            </nav> */}
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
