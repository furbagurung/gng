import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const CategoryCard = ({ title, src }) => {
  return (
    <>
      <motion.div
        transition={{ type: "spring", stiffness: 200 }}
        animate={{ y: -50 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="grid bg-black min-w-[10px] rounded-3xl text-white p-2 m-1 pt-3 z-10 gap-2 cursor-pointer"
      >
        <div className="flex justify-between px-2">
          <a href="" className="font-bold poppins-bold">
            {title}
          </a>
          <ArrowRightCircleIcon className="h-6 w-6 text-white transform -rotate-45" />
        </div>
        <div className=" ">
          <img
            src={src}
            alt={title}
            className="object-cover rounded-3xl w-[200px] h-[220px] m-1"
          />
        </div>
      </motion.div>
    </>
  );
};
CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
export default CategoryCard;
