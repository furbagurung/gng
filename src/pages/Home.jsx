import CategoryCard from "@/components/ui/CategoryCard";
import { FAQ } from "./FAQ";
import CaraouselSlider from "@/components/ui/CaraouselSlider";

import "../App.css";
import hero from "../assets/Hero.jpg";
import cushion from "../assets/Cushion.png";

import sulfate from "../assets/sulfate-free.jpg";

import faceImg from "../assets/face.jpg";
import eyeImg from "../assets/eye.jpg";
import cheeksImg from "../assets/cheeks.jpg";
import LiquidBlush from "../assets/LiquidBlush.png";
import LipOil from "../assets/LipOil.png";
import Mist from "../assets/Mist.png";
import Stick from "../assets/Stick.png";

import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import ProductCard from "@/components/ui/ProductCard";

function Home() {
  return (
    <>
      <section className="h-[600px] bg-[#f6f7fb] flex flex-col w-full relative">
        <div className="w-full h-fit flex justify-center">
          <img src={hero} className="md:h-[600px] min-w-46"></img>
        </div>

        <div className="  w-full grid justify-center grid-rows-auto-rows-fr gap-2 absolute bottom-10 pb-[10px] ">
          <motion.h1
            animate={{}}
            className="font-bold text-5xl leading-tight font-sf  tracking-tight"
          >
            Discover the secrets of beauty
          </motion.h1>
          <p className=" leading-tight flex justify-center text-[16px] font-medium poppins-regular">
            Shop now the best bb cream cushion foundation
          </p>
          <div className="flex justify-center mt-4">
            <Button variant="default" width="200px">
              <a
                href="#"
                className=" underline text-[13px] font-medium py-2 px-4 rounded poppins-regular"
              >
                {" "}
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>
      <section className="h-[450px] flex flex-col w-full relative">
        <div className="  w-full grid justify-center grid-rows-auto-rows-fr gap-4 py-16 mb-10 ">
          <h1 className="font-bold text-5xl leading-tight font-sf tracking-tight">
            Shop our Collection
          </h1>
          <p className=" leading-tight flex justify-center text-[16px] font-medium poppins-regular">
            Shop now the best bb cream cushion foundation
          </p>
        </div>
        <div className="w-full  flex justify-center gap-5">
          <CategoryCard title="Face" src={faceImg} />
          <CategoryCard title="Cheeks" src={cheeksImg} />
          <CategoryCard title="Eye" src={eyeImg} />
          <CategoryCard title="Lips" src={faceImg} />
        </div>
      </section>

      {/* why Gossip */}
      <section className="h-[500px] bg-black  flex flex-col relative  w-full items-center">
        <div className="  w-full flex flex-col text-white justify-center items-center gap-1 py-[100px]">
          <h1 className="w-full text-center font-bold text-5xl leading-tight font-sf tracking-tight">
            What makes us Gossips?
          </h1>
          <p className=" w-[700px] p-4 text-center leading-tight flex justify-center text-[16px] font-normal poppins-regular">
            Together We &apos;re building a safe, welcoming space in beauty and
            beyond. This is makeup made to feel good in, without hiding what
            makes you unique. And it&apos;s all vegan and cruelty free.
          </p>
          <div className="flex w-full justify-center align-top">
            <a
              href="#"
              className="flex items-center w-auto text-[13px] underline-offset-3 border-b-2 decoration-white font-medium  poppins-regular"
            >
              Our Story
            </a>
            <ChevronRightIcon className="h-4 w-4 text-white" />
          </div>
        </div>
        <motion.div className="overflow-clip flex justify-center gap-5 absolute top-[350px] z-50">
          <img src={cushion} className="md:h-[400px] min-w-48"></img>
        </motion.div>
      </section>

      {/* sustainable */}
      <section className="h-[600px] bg-white flex flex-col w-full relative">
        <div className="  w-full grid justify-center grid-rows-auto-rows-fr gap-4 pt-[250px] ">
          <h1 className="font-bold text-5xl leading-tight font-sf tracking-tight">
            Sustainable Beauty
          </h1>
          <p className=" leading-tight flex justify-center text-[16px] font-medium poppins-regular">
            We are committed to environmental sustainability
          </p>
        </div>
        <div className="w-full mix-blend-multiply flex justify-center py-10">
          <img src={sulfate}></img>
        </div>
      </section>
      {/* Best Selling */}
      <section className="h-[500px] flex flex-col relative  w-full items-center">
        <div className="  w-full flex flex-col  justify-center items-center gap-1 py-[100px]">
          <h1 className="w-full text-center font-bold text-5xl leading-tight font-sf tracking-tight">
            Best Sellings
          </h1>
          <p className=" leading-tight flex justify-center text-[16px] font-medium poppins-regular">
            Shop now the best bb cream cushion foundation
          </p>
        </div>
        <div className="flex justify-center w-full py-4">
          {" "}
          <div className="md:flex absolute grid grid-cols-2 gap-8 w-[800px] justify-center z-50">
            {" "}
            <ProductCard
              src={LiquidBlush}
              title="Gossip and Giggles Liquid Blush"
              price="500"
            />{" "}
            <ProductCard
              src={LipOil}
              title="Gossip and Giggles Liquid Blush"
              price="500"
            />{" "}
            <ProductCard
              src={Stick}
              title="Gossip and Giggles Liquid Blush"
              price="500"
            />{" "}
            <ProductCard
              src={Mist}
              title="Gossip and Giggles Hair Fragrance Mist"
              price="500"
            />
          </div>
        </div>
      </section>
      {/* Certification */}
      <section className="h-auto flex flex-col bg-white w-full relative">
        <div className="  w-full grid justify-center grid-rows-auto-rows-fr gap-4 pt-[500px] ">
          <h1 className="font-bold text-5xl text-center leading-tight font-sf tracking-tight">
            Certification
          </h1>
          <p className=" leading-tight flex justify-center text-[16px] font-medium poppins-regular">
            Certification of Quality System
          </p>
        </div>
        <div className="flex justify-center py-4">
          <CaraouselSlider />
        </div>
      </section>
      {/* FAQ */}
      <section className="text-white bg-black flex flex-col w-full relative pb-11 ">
        <div className="  w-full grid justify-center grid-rows-auto-rows-fr gap-4 py-16 ">
          <h1 className="font-bold text-5xl text-center leading-tight font-sf tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className=" leading-tight flex justify-center text-[16px] font-medium poppins-regular text-gray-400">
            If you haven&apos;t found the answer you need, email us at&nbsp;{" "}
            <span className="underline decoration-white">
              gossipandgiggles@gmail.com
            </span>
          </p>
        </div>
        <div className="w-full flex justify-center">
          <FAQ />
        </div>
      </section>
    </>
  );
}

export default Home;
