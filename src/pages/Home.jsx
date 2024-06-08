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
      <section className="h-[450px] md:h-[600px] bg-[#f6f7fb] flex flex-col w-full relative p-4">
        <div className="w-full h-fit flex justify-center">
          <img src={hero} className="md:h-[600px] min-w-46 object-cover"></img>
        </div>

        <div className="  w-full grid justify-center items-center gap-1 pt-[100px] absolute bottom-8 p-4">
          <h1 className="font-bold lg:text-5xl text-4xl leading-tight font-sf text-center tracking-tight p-2">
            Discover the secrets of Beauty products
          </h1>
          <p className=" leading-tight text-center text-[16px] font-medium poppins-regular">
            Shop now the best BB cream cushion foundation
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
      <section className="lg:h-[375px] h-[650px] grid  w-full justify-center relative p-4">
        <div className=" lg:w-full grid justify-center gap-2 py-16 mb-6 ">
          <h1 className="font-bold text-4xl  text-center lg:text-5xl leading-tight font-sf tracking-tight">
            Shop our Collection
          </h1>
          <p className=" leading-tight flex  text-center text-[16px] font-medium poppins-regular">
            Shop now the best bb cream cushion foundation
          </p>
        </div>
        <div className="lg:w-full w-fit lg:flex grid grid-cols-2 justify-center gap-0 p-2 ">
          <CategoryCard title="Face" src={faceImg} />
          <CategoryCard title="Cheeks" src={cheeksImg} />
          <CategoryCard title="Eye" src={eyeImg} />
          <CategoryCard title="Lips" src={faceImg} />
        </div>
      </section>

      {/* why Gossip */}
      <section className="lg:h-[500px] h-[550px] bg-black  flex flex-col relative  w-full items-center px-6">
        <div className="  w-full flex flex-col text-white justify-center items-center gap-1 py-40 lg:py-[150px]">
          <h1 className="w-full text-center font-bold text-4xl lg:text-5xlleading-tight font-sf tracking-tight">
            What makes us Gossips?
          </h1>
          <p className=" lg:w-[700px] w-[400px] p-4 text-center leading-tight flex justify-center text-[16px] font-normal poppins-regular">
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
        <motion.div className="overflow-clip flex justify-center gap-5 absolute top-[450px] md:top-[100px] lg:top-[400px] z-50">
          <img
            src={cushion}
            className="object-cover md:h-[300px] min-w-24"
          ></img>
        </motion.div>
      </section>

      {/* sustainable */}
      <section className="lg:h-[600px] h-[450px] bg-white flex flex-col w-full relative md:pt-[50px] p-4 ">
        <div className="  w-full grid justify-center grid-rows-auto-rows-fr gap-4 lg:pt-[250px] pt-40 ">
          <h1 className="font-bold text-4xl lg:text-5xl leading-tight text-center font-sf tracking-tight">
            Sustainable Beauty
          </h1>
          <p className=" leading-tight text-center text-[16px] font-medium poppins-regular">
            We are committed to environmental sustainability
          </p>
        </div>
        <div className="w-full mix-blend-multiply flex justify-center py-10">
          <img src={sulfate}></img>
        </div>
      </section>
      {/* Best Selling */}
      <section className="md:h-[500px] h-fit flex flex-col relative  w-full items-center p-4">
        <div className="  w-full flex flex-col  justify-center items-center gap-1 pt-[100px]">
          <h1 className="w-full text-center font-bold text-4xl lg:text-5xl leading-tight font-sf tracking-tight">
            Best Sellings
          </h1>
          <p className=" leading-tight text-center text-[16px] font-medium poppins-regular">
            Shop now the best bb cream cushion foundation
          </p>
        </div>
        <div className="flex h-[900px]  justify-center w-full py-16">
          {" "}
          <div className="lg:w-full w-fit lg:flex grid grid-cols-2 justify-center gap-2 p-2">
            {" "}
            <ProductCard
              className="grid"
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
      <section className="h-auto flex flex-col bg-white w-full relative pt-[50px] md:pt-[500px] lg:pt-[300px]">
        <div className="  w-full grid justify-center grid-rows-auto-rows-fr gap-4 md:pt-[250px] lg:pt-[10px] ">
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
      <section className="text-white bg-black flex flex-col w-full relative pb-11 p-4 ">
        <div className="  w-full grid gap-4 py-16 ">
          <h1 className="font-bold md:text-5xl text-4xl text-center leading-tight font-sf tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className=" leading-tight w-full justify-center px-8 gap- lg:flex grid text-center text-[16px] font-medium poppins-regular text-gray-400">
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
