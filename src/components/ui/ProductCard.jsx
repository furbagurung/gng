import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Button } from "./button";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export const ProductCard = ({ title, src, price }) => {
  return (
    <>
      <motion.div>
        <div className=" h-auto bg-white p-2  w-[300px] rounded-lg">
          <div className="rounded-full object-cover">
            <img src={src} />
          </div>
          <div className="flex flex-col p-2 gap-4 justify-center">
            <div className="flex flex-col p-1 gap-2">
              <p className=" poppins-extrabold font-extrabold leading-tight">
                {title}
              </p>
              <p className=" poppins-regular font-normal">$&nbsp;{price}</p>
            </div>
            <a href="#" className="w-full justify-center">
              <Button className="w-full flex gap-4">
                Add to Bag
                <ShoppingBagIcon className="h-6" />
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};
ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
export default ProductCard;
