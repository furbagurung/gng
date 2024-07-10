import CategoryCard from "@/components/ui/CategoryCard";
import { FAQ } from "./FAQ";
// import CaraouselSlider from "@/components/ui/CaraouselSlider";
import Marquee from "react-fast-marquee";

import "../App.css";
import hero from "../assets/Hero.jpg";
// import herobg from "../assets/hero_bg.jpg";
import cushion from "../assets/Cushion.png";
import { Button } from "@/components/ui/button";
import sulfate from "../assets/sulfate-free.jpg";
import certificate from "../assets/certificate.png";
// import CaraouselSlider from "../components/ui/CaraouselSlider";

import faceImg from "../assets/face.jpg";
import eyeImg from "../assets/eye.jpg";
import spray from "../assets/spray.jpg";
import bbc from "../assets/cushion/bbc.png";
import cheeksImg from "../assets/cheeks.jpg";

//gif
import blushGif from "@/assets/gif/blush.gif";
import lipbalmGif from "@/assets/gif/lip-balm.gif";
import eyelashesGif from "@/assets/gif/eyelashes.gif";
import cosmeticsGif from "@/assets/gif/cosmetics.gif";
import powderGif from "@/assets/gif/powder.gif";
import boxGif from "@/assets/gif/box.gif";
import manufactureGif from "@/assets/gif/manufacture.gif";

import Mist from "../assets/Mist.png";
import Stick from "../assets/Stick.png";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import ProductCard from "@/components/ui/ProductCard";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import { ISO } from "@/components/iso";

const Home = () => {
  return (
    <>
      <section className="h-[500px] pt-20 sm:pt-0 min-w-[320px] md:h-[500px] bg-[#f6f7fb] flex justify-center w-full relative ">
        <div className="w-full h-fit flex justify-center">
          <motion.img
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            src={hero}
            className=" w-full max-w-[1600px] h-[250px] md:h-[500px] object-cover md:object-contain"
          />
        </div>

        <div className="min-w-[300px] max-w-[80%] grid  justify-center items-center gap-1 absolute bottom-8">
          <motion.h1
            initial={{ opacity: 0, y: 250 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className=" font-bold sm:text-4xl text-3xl leading-tight poppins-bold text-center tracking-tight"
          >
            Discover the secrets of Beauty
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 250 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="  text-center text-[14px] font-normal poppins-regular"
          >
            Shop now the best BB cream cushion foundation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 250 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex justify-center mt-4"
          >
            <Button variant="default" width="200px">
              <NavLink
                to="contact"
                className="  text-[14px] font-medium py-2 px-4 rounded poppins-regular"
              >
                Contact Us
              </NavLink>
            </Button>
          </motion.div>
        </div>
      </section>
      {/* //what we produce */}
      <section className="min-w-[320px] sm:h-[650px] grid w-full justify-center items-center bg-f relative p-8 sm:pb-60 bg-white">
        <div className=" lg:w-full grid justify-center gap-4 py-16 mb-6 ">
          <motion.h1
            initial={{ opacity: 0, y: 250 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-4xl  text-center lg:text-4xl leading-tight  poppins-bold  tracking-tight"
          >
            What we produce?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 250 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className=" leading-tight flex  text-center text-[14px] font-medium poppins-regular"
          >
            Our cosmetics are current with trends and are of the newest
            technologies available
          </motion.p>
        </div>
        <motion.ul className="z-10 lg:w-full sm:w-fit sm:flex grid justify-center gap-4 p-2 w-full">
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="grid items-center gap-6 justify-center  border rounded-xl sm:w-[250px] pb-6"
          >
            <img src={blushGif} className="w-[200px]" />
            <p className="text-xl  justify-center flex opacity-50">
              Face Makeup
            </p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="grid items-center gap-6 justify-center border rounded-xl w-[250px] pb-6"
          >
            <img src={eyelashesGif} className="w-[200px]" />
            <p className="text-xl justify-center flex opacity-50">Eyes Makup</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="grid items-center gap-6 justify-center  border rounded-xl w-[250px] pb-6"
          >
            <img src={lipbalmGif} className="w-[200px]" />
            <p className="text-xl justify-center flex opacity-50">
              Face Makeup
            </p>
          </motion.li>
        </motion.ul>
      </section>
      {/* Shop our collection */}
      <section className="min-w-[320px] lg:h-[375px] h-[650px] grid bg-[#f8edeb;]  w-full justify-center relative p-4">
        <div className=" lg:w-full grid justify-center gap-4 py-16 mb-6 ">
          <motion.h1
            initial={{ opacity: 0, y: 250 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-4xl  text-center lg:text-4xl leading-tight  poppins-bold  tracking-tight"
          >
            Shop our Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 250 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className=" leading-tight flex  text-center text-[14px] font-medium poppins-regular"
          >
            Shop now the best bb cream cushion foundation with Gossip and
            Giggles
          </motion.p>
        </div>
        <motion.ul className="z-10 lg:w-full w-fit lg:flex grid grid-cols-2 justify-center gap-0 p-2 ">
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            <CategoryCard title="Face" src={faceImg} />
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.9 }}
          >
            {" "}
            <CategoryCard title="Cheeks" src={cheeksImg} />
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.9 }}
          >
            {" "}
            <CategoryCard title="Eye" src={eyeImg} />
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: 250 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.9 }}
          >
            <CategoryCard title="Lips" src={faceImg} />
          </motion.li>
        </motion.ul>
      </section>
      {/* why Gossip */}
      <motion.section
        initial={{ opacity: 0, y: 250 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.9 }}
        className="lg:h-[500px] min-w-[320px] h-[500px] bg-black  flex flex-col relative  w-full items-center px-6"
      >
        <div className="  w-full flex flex-col text-white justify-center items-center gap-1 pt-40 pb-10 lg:pt-[150px]">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="w-full text-center font-bold text-3xl lg:text-4xl leading-tight poppins-bold tracking-tight"
          >
            What makes us Gossips?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 250 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className=" lg:w-[700px] min-w-[320px] p-4 text-center leading-tight flex justify-center text-[16px] font-normal poppins-regular"
          >
            Together We &apos;re building a safe, welcoming space in beauty and
            beyond. This is makeup made to feel good in, without hiding what
            makes you unique. And it&apos;s all vegan and cruelty free.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 250 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="flex w-full justify-center align-top"
          >
            <NavLink
              href="#"
              className="flex items-center w-auto text-[14px] underline-offset-3 border-b-2 decoration-white font-medium  poppins-regular"
            >
              Our Story
            </NavLink>
            <ChevronRightIcon className="h-4 w-4 text-white" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 250 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className=" flex justify-center z-10"
        >
          <img
            src={cushion}
            className="object-cover md:h-[300px] min-w-24"
          ></img>
        </motion.div>
      </motion.section>
      {/* sustainable */}
      <motion.section
        initial={{ opacity: 0, y: 250 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.01, duration: 0.5 }}
        className="lg:h-[600px] h-[350px] sm:h-[450px] bg-white flex flex-col w-full relative md:pt-[50px] p-4 "
      >
        <div className="  w-full grid justify-center grid-rows-auto-rows-fr gap-4 pt-32">
          <motion.h1
            initial={{ opacity: 0, y: 250 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.02, duration: 0.5 }}
            className="font-bold text-3xl lg:text-4xl leading-tight text-center  poppins-bold  tracking-tight"
          >
            Sustainable Beauty
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 250 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.03, duration: 0.5 }}
            className=" leading-tight text-center text-[14px] font-medium poppins-regular"
          >
            We are committed to environmental sustainability
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 250 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.04, duration: 0.5 }}
          className="sm:w-full  mix-blend-multiply flex  object-cover justify-center overflow-clip py-10"
        >
          <img
            src={sulfate}
            className="object-cover transform scale-150 sm:scale-100"
          ></img>
        </motion.div>
      </motion.section>
      {/* what we do customized service */}
      <section className="w-full flex-col justify-center  bg-slate-100 items-center gap-6 p-4 pb-6 py-10">
        <div className="w-full p-9   flex-col justify-center items-center gap-1 inline-flex">
          <motion.h1
            initial={{ opacity: 0, y: 250 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.02, duration: 0.5 }}
            className=" text-center poppins-bold text-[#e37ca9] uppercase "
          >
            what we do
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 250 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.03, duration: 0.5 }}
            className="text-center text-gray-900 text-4xl font-bold"
          >
            Customized services
          </motion.p>
        </div>
        <motion.ul className=" grid justify-center p-6">
          <div className="lg:w-full max-w-[1400px] sm:w-fit sm:flex flex-wrap grid justify-center gap-4 p-2 pb-9 w-full">
            {" "}
            <motion.li
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="flex items-start justify-center rounded-xl w-fit gap-4 p-4 sm:p-6 bg-gray-50"
            >
              <div className="p-2 ">
                <img src={powderGif} className="min-w-[40px] w-10 rounded-lg" />
              </div>
              <div className="grid w-[240px] sm:w-[400px]  shrink-0 items-start justify-start gap-2">
                <h2 className="text-xl font-bold justify-start flex ">
                  Custom Formulas
                </h2>
                <p className="text-sm">
                  We create special beauty product recipes just for you. Whether
                  it&apos;s skincare, haircare, or makeup, we work with you to
                  make products that match your brand and quality needs.
                </p>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="flex items-start justify-center rounded-xl w-fit gap-4 p-4 sm:p-6 bg-gray-50"
            >
              <div className="p-2">
                <img
                  src={cosmeticsGif}
                  className="min-w-[40px]  w-10 rounded-lg"
                />
              </div>
              <div className="grid w-[240px] sm:w-[400px]  shrink-0 items-start justify-start gap-2">
                <h2 className="text-xl font-bold justify-start flex ">
                  Private Label
                </h2>
                <p className="text-sm">
                  Start your own beauty line with our help. We handle everything
                  from creating the product to designing the packaging, making
                  it easy for you to launch your brand.
                </p>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="flex items-start justify-center rounded-xl w-fit gap-4 p-4 sm:p-6 bg-gray-50"
            >
              <div className="p-2 bg-blend-multiply">
                <img src={boxGif} className="min-w-[40px]  w-10  rounded-lg" />
              </div>
              <div className="grid  w-[240px] sm:w-[400px]  shrink-0 items-start justify-start gap-2">
                <h2 className="text-xl font-bold justify-start flex ">
                  Packaging Options
                </h2>
                <p className="text-sm">
                  Choose from various packaging designs to suit your brand. We
                  offer different shapes, sizes, and materials to make your
                  products look great and stand out.
                </p>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="flex  items-start justify-center rounded-xl w-fit gap-6 p-2 sm:p-6 bg-gray-50"
            >
              <div className="p-2">
                <img
                  src={manufactureGif}
                  className="min-w-[40px]  w-10 rounded-lg"
                />
              </div>
              <div className="grid w-[240px] sm:w-[400px] shrink-0 items-start justify-start gap-2">
                <h2 className="text-xl font-bold justify-start flex ">
                  Flexible Production
                </h2>
                <p className="text-sm">
                  We can produce both small and large orders to meet your needs.
                  Our modern facilities ensure quick delivery and high-quality
                  products, whether you need a few items or a large batch.
                </p>
              </div>
            </motion.li>
          </div>
        </motion.ul>
      </section>
      {/* iso */}
      <div className="z-10 h-[100px] sm:h-[200px] p-6 my-10 overflow-y-hidden  justify-center flex items-center w-full">
        <ISO />
      </div>
      {/* Best Selling */}
      <section className=" h-fit flex flex-col relative  w-full items-center p-4">
        <div className="  w-full flex flex-col justify-center items-center gap-4 pt-[100px]">
          <motion.h1
            initial={{ opacity: 0, y: 250 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full text-center font-bold text-3xl lg:text-4xl leading-tight poppins-bold  tracking-tight"
          >
            Best Sellings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 250 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className=" leading-tight text-center text-[14px] font-medium poppins-regular"
          >
            Shop now the best bb cream cushion foundation
          </motion.p>
        </div>
        <div className="flex  justify-center w-full py-10">
          {" "}
          <ul className="lg:w-full w-fit lg:flex grid grid-cols-2 shrink-1 justify-center gap-6 p-2">
            <motion.li
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {" "}
              <ProductCard
                className="grid"
                src={bbc}
                title="Cushion BB Cream Foundation"
                price="$15"
              />
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {" "}
              <ProductCard
                src={spray}
                title="Gossip and Giggles Setup Spray"
                price="$18"
              />
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {" "}
              <ProductCard
                src={Stick}
                title="Gossip and Giggles Liquid Blush"
                price="$10"
              />
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <ProductCard
                src={Mist}
                title="Gossip and Giggles Hair Fragrance Mist"
                price="$30"
              />
            </motion.li>
          </ul>
        </div>
      </section>
      {/* Certification */}
      <section className="h-auto flex flex-col bg-white w-full relative pt-[50px]">
        <div className="  w-full grid justify-center grid-rows-auto-rows-fr gap-4 lg:pt-[10px] ">
          <motion.h1
            initial={{ opacity: 0, y: 250 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-bold text-3xl lg:text-4xl text-center leading-tight  poppins-bold tracking-tight"
          >
            Certification
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 250 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className=" leading-tight flex justify-center text-[14px] font-medium poppins-regular"
          >
            Certification of Quality System
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 250 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center py-4 "
        >
          <img src={certificate} className="p-8 sm:w-[600px]"></img>
          {/* <CaraouselSlider /> */}
        </motion.div>
      </section>
      {/* FAQ */}
      <section className="text-white bg-black flex flex-col w-full relative pb-11 p-4 ">
        <div className="  w-full grid gap-4 py-16 ">
          <h1 className="font-bold md:text-4xl text-3xl justify-center lg:text-center text-left leading-tight  poppins-bold racking-tight">
            <p className=" leading-tight justify-center px-1 lg:flex grid sm:text-center text-left poppins-bold ">
              Frequently Asked Questions
            </p>
          </h1>
          <p className=" leading-tight justify-center px-1 lg:flex grid sm:text-center text-left text-[16px] font-medium poppins-regular text-gray-400">
            If you haven&apos;t found the answer you need, email us at&nbsp;{" "}
            gossipandgiggles@gmail.com
          </p>
        </div>
        <div className="w-full flex justify-center">
          <FAQ />
        </div>
      </section>
    </>
  );
};

export default Home;
