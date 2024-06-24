import CategoryCard from "@/components/ui/CategoryCard";
import { FAQ } from "./FAQ";
// import CaraouselSlider from "@/components/ui/CaraouselSlider";

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
import cheeksImg from "../assets/cheeks.jpg";
import LiquidBlush from "../assets/LiquidBlush.png";
import LipOil from "../assets/LipOil.png";
import Mist from "../assets/Mist.png";
import Stick from "../assets/Stick.png";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import ProductCard from "@/components/ui/ProductCard";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import girl from "../assets/1.png";

import "swiper/css";
import "swiper/css/pagination";
import Caraousel from "./Caraousel";

const Home = () => {
  return (
    <>
      {/* <div>
        <Caraousel />
      </div> */}
      {/* swiperslider */}
      {/* <section>
        <div className="w-full max-w-[1440px] h-[500px] lg:h-[585px] py-4 m-auto px-4 relative group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex]})` }}
            className="w-full h-full bg-no-repeat bg-cover rounded-2xl  bg-center"
          ></div>
        </div>
      </section> */}

      <section className="h-[450px] mt-20 sm:mt-0 min-w-[320px] md:h-[500px] bg-[#f6f7fb] flex justify-center w-full relative ">
        <div className="w-full h-fit flex justify-center">
          <img
            src={hero}
            className=" w-full max-w-[1600px] h-[250px] md:h-[500px] object-cover md:object-contain"
          ></img>
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
            Shop now the best bb cream cushion foundation
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
      {/* <section
        className="w-full flex justify-center bg-slate-100
      "
      >
        <div className="w-[1634px] h-[900px] relative">
          <div className="w-[1600px]  left-[34px] top-0 absolute bg-slate-100" />
          <div className="w-[1110px] h-32 left-[279px] top-[902px] absolute"></div>
          <div className="w-[409px] h-[134px] left-[849px] top-[351px] absolute">
            <div className="left-[109px] top-0 absolute text-gray-900 text-[21px] font-bold   leading-loose">
              Organized tasks
            </div>
            <div className="w-[300px] left-[109px] top-[47px] absolute opacity-70 text-gray-900 text-[17px] font-normal   leading-[29px]">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </div>
            <div className="w-[79px] h-[79px] left-0 top-[6px] absolute">
              <div className="w-[79px] h-[79px] left-0 top-0 absolute opacity-10 bg-red-500 rounded-[15px]" />
              <div className="w-[35px] h-[37px] left-[22px] top-[21px] absolute"></div>
            </div>
          </div>
          <div className="w-[409px] h-[134px] left-[390px] top-[351px] absolute">
            <div className="left-[109px] top-0 absolute text-gray-900 text-[21px] font-bold   leading-loose">
              Dedicated project manager
            </div>
            <div className="w-[300px] left-[109px] top-[47px] absolute opacity-70 text-gray-900 text-[17px] font-normal   leading-[29px]">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </div>
            <div className="w-[79px] h-[79px] left-0 top-[6px] absolute">
              <div className="w-[79px] h-[79px] left-0 top-0 absolute opacity-10 bg-indigo-600 rounded-[15px]" />
              <div className="w-[35px] h-[38px] left-[22px] top-[21px] absolute">
                <img
                  className="w-5 h-[23px] left-[8px] top-0 absolute"
                  src="https://via.placeholder.com/20x23"
                />
              </div>
            </div>
          </div>
          <div className="w-[409px] h-[134px] left-[849px] top-[565px] absolute">
            <div className="left-[109px] top-0 absolute text-gray-900 text-[21px] font-bold   leading-loose">
              Never miss deadline
            </div>
            <div className="w-[300px] left-[109px] top-[47px] absolute opacity-70 text-gray-900 text-[17px] font-normal   leading-[29px]">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </div>
            <div className="w-[79px] h-[79px] left-0 top-[6px] absolute">
              <div className="w-[79px] h-[79px] left-0 top-0 absolute opacity-10 bg-gray-900 rounded-[15px]" />
              <div className="w-9 h-9 left-[22px] top-[22px] absolute">
                <img
                  className="w-9 h-9 left-0 top-0 absolute opacity-50"
                  src="https://via.placeholder.com/36x36"
                />
              </div>
            </div>
          </div>
          <div className="w-[409px] h-[134px] left-[390px] top-[565px] absolute">
            <div className="left-[109px] top-0 absolute text-gray-900 text-[21px] font-bold   leading-loose">
              Easy feedback sharing
            </div>
            <div className="w-[300px] left-[109px] top-[47px] absolute opacity-70 text-gray-900 text-[17px] font-normal   leading-[29px]">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </div>
            <div className="w-[79px] h-[79px] left-0 top-[6px] absolute">
              <div className="w-[79px] h-[79px] left-0 top-0 absolute opacity-10 bg-green-400 rounded-[15px]" />
              <div className="w-9 h-[34px] left-[22px] top-[23px] absolute"></div>
            </div>
          </div>
          <div className="w-[589px] h-[135px] left-[540px] top-[118px] absolute flex-col justify-center items-center gap-[23px] inline-flex">
            <div className="w-[589px] text-center text-red-500 text-[13px] font-bold   uppercase tracking-widest">
              Why choose us
            </div>
            <div className="w-[521px] text-center text-gray-900 text-4xl font-bold   leading-[48px]">
              People choose us because we serve the best for everyone
            </div>
          </div>
          <div className="w-[123px] h-28 left-0 top-[167px] absolute">
            <div className="w-[7px] h-2 left-[116px] top-[13px] absolute"></div>
            <div className="w-[7px] h-[7px] left-[116px] top-0 absolute"></div>
            <div className="w-[7px] h-[7px] left-[116px] top-[27px] absolute"></div>
            <div className="w-[7px] h-[7px] left-[116px] top-[40px] absolute"></div>
            <div className="w-[7px] h-[7px] left-[116px] top-[53px] absolute"></div>
            <div className="w-[7px] h-[7px] left-[116px] top-[66px] absolute"></div>
            <div className="w-[7px] h-2 left-[116px] top-[79px] absolute"></div>
            <div className="w-[7px] h-[7px] left-[116px] top-[93px] absolute"></div>
            <div className="w-1.5 h-1.5 left-0 top-[106px] absolute"></div>
            <div className="w-2 h-1.5 left-[32px] top-[106px] absolute"></div>
            <div className="w-[7px] h-1.5 left-[16px] top-[106px] absolute"></div>
            <div className="w-[7px] h-1.5 left-[49px] top-[106px] absolute"></div>
            <div className="w-[7px] h-1.5 left-[66px] top-[106px] absolute"></div>
            <div className="w-[7px] h-1.5 left-[99px] top-[106px] absolute"></div>
            <div className="w-2 h-1.5 left-[82px] top-[106px] absolute"></div>
            <div className="w-[7px] h-1.5 left-[116px] top-[106px] absolute"></div>
          </div>
        </div>
      </section> */}
      {/* Best Selling */}
      <section className=" h-fit flex flex-col relative bg-[#f8edeb] w-full items-center p-4">
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
                src={LiquidBlush}
                title="Gossip and Giggles Liquid Blush"
                price="$500"
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
                src={LipOil}
                title="Gossip and Giggles Liquid Blush"
                price="$200"
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
                price="$100"
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
                price="$300"
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
