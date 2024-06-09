import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const CategoryCard = ({ title, src }) => {
  return (
    <>
      <motion.div className="grid justify-center bg-black md:max-w-[200px] min-w-[100px] rounded-2xl lg:rounded-2xl text-white  m-1 pt-3 z-10 gap-2 cursor-pointer">
        <div className="flex justify-between px-4">
          <a href="" className="font-bold poppins-bold">
            {title}
          </a>
          <ArrowRightCircleIcon className="h-6 w-6 text-white transform -rotate-45" />
        </div>
        <div className="min-w-[100px] m-2  rounded-xl lg:rounded-xl overflow-clip">
          <img src={src} alt={title} className="h-[180px] object-cover" />
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
