import { StopIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
function MarqueeElement() {
  return (
    <div className="poppins-medium text-sm leading uppercase w-full cursor-pointer">
      <NavLink
        to="../contact"
        className="flex w-full items-center gap-9 justify-around m-10 transition-all delay-700 ease-in-out duration-200 hover:underline"
      >
        {" "}
        <StopIcon className="h-2 w-2" />
        <span>Discover Quality Cosmetics Today </span>
        <StopIcon className="h-2 w-2" />
        <span> Contact Us for Free Sample ! </span>
        <StopIcon className="h-2 w-2" />
        <span>Customize Your Beauty Experience</span>
        <StopIcon className="h-2 w-2" />
        <span>Transform your beauty business </span>
      </NavLink>{" "}
    </div>
  );
}

export default MarqueeElement;
