import slide1 from "../assets/slides/slide1.jpg";
import slide2 from "../assets/slides/slide2.jpg";
import slide3 from "../assets/slides/slide3.jpg";
import hero from "../assets/Hero.jpg";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [hero, slide1, slide2, slide3];

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.5,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 1.5,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};

function Caraousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const nextStep = () => {
    setDirection(1);
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };
  const prevStep = () => {
    setDirection(-1);
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1);
      return;
    }
    setCurrentIndex(currentIndex - 1);
  };
  useEffect(() => {
    const AutoPlay = setInterval(() => {
      nextStep();
    }, 3000);
    return () => clearInterval(AutoPlay);
  });

  return (
    <>
      <div className="container flex h-fit  my-4 ">
        <div className="slideshow w-full h-[500px] relative overflow-hidden rounded-3xl ">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              key={slides[currentIndex]}
              src={slides[currentIndex]}
              custom={direction}
              alt=""
              className="slides object-contain h-full w-full  absolute cursor-pointer"
            />
          </AnimatePresence>

          <button
            onClick={prevStep}
            className="absolute left-6 top-[50%] -translate-y-1/2"
          >
            <ArrowLeftCircle className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextStep}
            className=" absolute top-[50%] -translate-y-1/2 right-6"
          >
            <ArrowRightCircle className="w-6 h-6  text-white" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Caraousel;
