import React from "react";

import Footer from "./Footer";

import CategoryCard from "@/components/ui/CategoryCard";
import faceImg from "../assets/face.jpg";
import eyeImg from "../assets/eye.jpg";
import cheeksImg from "../assets/cheeks.jpg";
import LiquidBlush from "../assets/LiquidBlush.png";
import catalogbanner from "../assets/catalogbanner.png";
import LipOil from "../assets/LipOil.png";
import Mist from "../assets/Mist.png";
import Stick from "../assets/Stick.png";
import { NavLink, Outlet } from "react-router-dom";

function Catalog() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Catalog;
