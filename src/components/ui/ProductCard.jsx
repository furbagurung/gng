import PropTypes from "prop-types";
// import { motion } from "framer-motion";
import { Button } from "./button";
// import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import BuyNow from "@/components/ui/BuyNow";

export const ProductCard = ({ title, src, price }) => {
  return (
    <>
      <div className=" h-auto bg-white p-2 lg:w-[200px] rounded-lg ">
        <div className="rounded-full object-cover">
          <img src={src} />
        </div>
        <div className="flex flex-col p-2 gap-4 justify-center items-stretch">
          <div className="flex flex-col p-1 gap-2">
            <p className=" poppins-regular leading-tight">{title}</p>
            <p className=" poppins-bold">{price}</p>
          </div>
          <a href="#" className="w-full justify-center">
            <div className="w-full flex gap-4">
              <BuyNow price={price} className="w-full" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
export default ProductCard;
