import { Button } from "@/components/ui/button";
import thankyougif from "../assets/thankyou.gif";
import { NavLink } from "react-router-dom";

function thankyou() {
  return (
    <>
      <div className="grid justify-center  bg-white w-full ">
        <div className="flex justify-center ">
          <img className="w-[400px]" src={thankyougif} />
        </div>
        <div className="min-w-[300px] max-w-[1920px] flex  flex-col  justify-center items-center gap-[16px] p-8">
          <h1 className=" font-bold sm:text-4xl text-3xl leading-tight poppins-bold text-center tracking-tight">
            Thank you
          </h1>
          <p className=" max-w-[706px] w-[360px] md:w-[706px] text-[14px] sm:text-[18px] text-center  font-normal poppins-regular">
            Thank you for enquiring! We hope to see you hop on the call! In case
            you want to get in touch with us instantly, please send us an email
            at <u>gossipandgigglesofficial@gmail.com</u>
          </p>
        </div>
        <div className="flex justify-center">
          <NavLink to="/">
            <Button className="px-[24px] py-[10px]">
              <p>Back to Home</p>
            </Button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default thankyou;
