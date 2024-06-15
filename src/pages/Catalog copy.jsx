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
import { Outlet } from "react-router-dom";

function Catalog() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <div className="grid justify-center  bg-white w-full gap-8">
        <div className="min-w-[300px] max-w-[1920px] grid py-24 justify-center items-center gap-1 p-8">
          <h1 className=" font-bold sm:text-4xl text-3xl leading-tight poppins-bold text-center tracking-tight">
            Catalog
          </h1>
          <p className="  text-center text-[14px] font-normal poppins-regular">
            Shop now the best BB cream cushion foundation
          </p>
        </div>
      </div>
      <div className="grid gap-9 bg-white pb-24">
        <div className="flex justify-center gap-8">
          {" "}
          <CategoryCard title="Face" src={faceImg} />
          <CategoryCard title="Cheeks" src={cheeksImg} />
          <CategoryCard title="Eye" src={eyeImg} />
          <CategoryCard title="Lips" src={faceImg} />
        </div>
        <div className="flex justify-center gap-8 ">
          {" "}
          <CategoryCard title="Face" src={faceImg} />
          <CategoryCard title="Cheeks" src={cheeksImg} />
          <CategoryCard title="Eye" src={eyeImg} />
          <CategoryCard title="Lips" src={faceImg} />
        </div>
        <div className="flex justify-center gap-8">
          {" "}
          <CategoryCard title="Face" src={faceImg} />
          <CategoryCard title="Cheeks" src={cheeksImg} />
          <CategoryCard title="Eye" src={eyeImg} />
          <CategoryCard title="Lips" src={faceImg} />
        </div>
      </div>
      <Footer />
      <Outlet />
    </>
  );
}

export default Catalog;
