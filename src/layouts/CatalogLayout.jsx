import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/ui/CategoryCard";
import { FAQ } from "@/pages/FAQ";
import { Section } from "lucide-react";
import PropTypes from "prop-types";
const CatalogLayout = ({
  title,
  img1,
  img2,
  img3,
  img4,
  img5,
  price,
  description,
  features,
}) => {
  CatalogLayout.propTypes = {
    title: PropTypes.string.isRequired,
    img1: PropTypes.string,
    img2: PropTypes.string,
    img3: PropTypes.string,
    img4: PropTypes.string,
    img5: PropTypes.string,
    description: PropTypes.string,
    features: PropTypes.object,
  };
  return (
    <>
      <div className="flex flex-col poppins-regular  ">
        <div className=" py-8 grid justify-center sm:gap-10">
          <div className="sm:py-8 grid sm:w-full max-w-[1440px] w-[316px] justify-center">
            <div className="py-2 text-4xl poppins-extrabold  text-left sm:text-center">
              <h1>{title}</h1>
            </div>
            <div className=" sm:text-center flex justify-center w-[320px] sm:w-full">
              <p>
                Ready to start your next project with us? That&apos;s great!
                Send us an message
              </p>
            </div>
          </div>
        </div>

        <section className="flex flex-col justify-center items-center gap-4 over sm:w-full p-8 bg-white ">
          <div className="w-full max-w-[1280px] justify-center grid items-center gap-4 sm:flex my-8">
            {/* mainimage */}
            <div className=" w-[316px] lg:w-[400px] xl:w[688px] shrink-0 justify-center items-center flex">
              <img
                className="grow shrink basis-0 self-stretch"
                src="https://via.placeholder.com/648x624"
              />
            </div>
            {/* sub images */}
            <div className="p-0 sm:p-4 flex-col w-fit justify-center items-start gap-4 grid sm:flex">
              <div className=" h-fit max-h-[304px] justify-start items-start gap-4 flex">
                <div className="w-[148px] lg:w-[195px] h-fit max-h-[304px] ">
                  <img src="https://via.placeholder.com/316x304" />
                </div>
                <div className="w-[148px] lg:w-[195px] h-fit max-h-[304px] ">
                  <img src="https://via.placeholder.com/316x304" />
                </div>
              </div>
              <div className=" h-fit max-h-[304px] justify-start items-start gap-4 flex">
                <div className="w-[148px] lg:w-[195px] h-fit max-h-[304px] ">
                  <img src="https://via.placeholder.com/316x304" />
                </div>
                <div className="w-[148px] lg:w-[195px] h-fit max-h-[304px] ">
                  <img src="https://via.placeholder.com/316x304" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-start items-center gap-4 min-w-[300px] p-12 sm:p-8 bg-white sm:w-full ">
          {/* content start */}
          <div>
            <div className="w-full justify-start min-w-[300px] max-w-[832px] grid gap-4">
              {" "}
              {/* title */}
              <div className=" text-black text-3xl sm:text-4xl poppins-regular font-bold ">
                Gossip and Giggles {title}
              </div>
              {/* price cta start */}
              <div className="flex-col justify-start gap-4 items-start flex">
                <div className="grid ">
                  <p className=" text-black text-base font-regular ">
                    $ {price}.00 USD
                  </p>
                </div>
                <div className="w-full max-w-60 flex-col justify-start items-start mb-6 flex">
                  <Button className="self-stretch px-6 py-3  bg-black border border-black justify-center items-center gap-2 inline-flex">
                    Business Inquries
                  </Button>
                </div>
              </div>
              {/* price cta end */}
            </div>

            {/* description start*/}

            <div className="flex-col justify-start items-start gap-16 max-w-[832px] flex">
              <div className="sm:w-full min-w-[300px] text-black text-base font-normal leading-normal">
                {description}
              </div>
              <div className="sm:w-full min-w-[300px]  text-black text-base font-normal leading-normal">
                <h2 className="text-xl font-semibold">
                  Features of Gossip & Giggles {title}:
                </h2>
                <ul className="pl-4 p-2 list-disc">{features}</ul>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch pt-2 justify-start items-start gap-6 inline-flex">
                <div className="flex-col justify-start items-start gap-2 inline-flex"></div>
              </div>
            </div>

            {/* description end*/}

            {/* content end */}
          </div>
        </section>

        <section className="flex flex-col justify-center items-center gap-4 bg-black  sm:w-full p-4 py-16">
          <div className="sm:w-full max-w-[900px]  gap-9 flex-wrap md:flex-nowrap justify-center items-center flex ">
            <div className="">
              <img
                className="object-cover"
                src="https://via.placeholder.com/616x640"
              />
            </div>

            <div className="p-4 flex-col text-white w-full justify-start items-start flex">
              <div className="text-center text-white text-base font-semibold  py-4">
                Discover
              </div>
              <div className="self-stretch  flex-col justify-center items-start gap-6 flex">
                <div className="self-stretch text-xl sm:text-3xl font-bold  ">
                  Enhance Your Beauty with Our Premium Products
                </div>
                <div className="self-stretch text-base font-normal ">
                  Our product is designed to meet all your makeup needs. With
                  high-quality ingredients and a wide range of shades, it&apos;s
                  perfect for any occasion.
                </div>
              </div>
              <div className="flex py-8">
                <Button variant="outline" className="text-black">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 sm:flex justify-center items-center gap-4 bg-white  sm:w-full p-4 py-16">
          <div className="col-span-2 text-2xl font-semibold p-4">
            <h2>Explore other Categories</h2>
          </div>
          <CategoryCard
            title="Face"
            src="https://via.placeholder.com/616x640"
          />
          <CategoryCard
            title="Face"
            src="https://via.placeholder.com/616x640"
          />{" "}
          <CategoryCard
            title="Face"
            src="https://via.placeholder.com/616x640"
          />{" "}
          <CategoryCard
            title="Face"
            src="https://via.placeholder.com/616x640"
          />
        </section>
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
      </div>
      ;
    </>
  );
};

export default CatalogLayout;
