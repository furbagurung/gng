import PropTypes from "prop-types";
// import { motion } from "framer-motion";
// import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import BuyNow from "@/components/ui/BuyNow";
import { NavLink } from "react-router-dom";

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
          <NavLink to="contact" className="w-full justify-center">
            <div className="w-full flex gap-4">
              <BuyNow price={price} className="w-full" />
            </div>
          </NavLink>
        </div>
      </div>
      {/* <div className="group relative overflow-hidden">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={src}
            className="w-[400px] hover:scale-125  object-cover transition duration-300"
          />
        </div>
        <div className="my-5 relative left-[-200px] group-hover:left-[10px] duration-500">
          <p className=" text-2xl font-semibold poppins-bold">{title}</p>
          <p className="text-3xl">{price}</p>
        </div>
      </div> */}
    </>
  );
};
ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
export default ProductCard;
