import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/ui/CategoryCard";
import { FAQ } from "@/pages/FAQ";

import PropTypes from "prop-types";
import { useState } from "react";

const CatalogLayout = ({ title, img, price, description, features }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const ProductImages = img;

  CatalogLayout.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.array,
    price: PropTypes.number,
    description: PropTypes.string,
    features: PropTypes.object,
  };
  return (
    <>
      <div className="flex flex-col poppins-regular  ">
        <div className=" py-8 grid justify-center sm:gap-10 bg-hero-pattern bg-center">
          <div className="sm:py-8 grid sm:w-full max-w-[1440px] w-[316px] justify-center ">
            <div className="py-2 text-4xl poppins-extrabold  text-left sm:text-center">
              <h1 className="uppercase">{title}</h1>
            </div>
            <div className=" sm:text-center flex justify-center w-[320px] sm:w-full">
              <p>
                Ready to start your next project with us? That&apos;s great!
                Send us an message
              </p>
            </div>
          </div>
        </div>
        <section className=" h-fit">
          <div className="p-5">
            <div className="flex  gap-4 items-start flex-wrap justify-center">
              <div className="flex sm:flex-col gap-4 rounded-md overflow-clip ">
                <img
                  src={ProductImages[0]}
                  onMouseOver={() => setCurrentImage(0)}
                  className={`w-[100px] h-[100px] rounded-md  cursor-pointer `}
                  alt=""
                />
                <img
                  src={ProductImages[1]}
                  onMouseOver={() => setCurrentImage(1)}
                  className={`w-[100px] h-[100px] rounded-md border-none cursor-pointer `}
                  alt=""
                />
                <img
                  src={ProductImages[2]}
                  onMouseOver={() => setCurrentImage(2)}
                  className={`w-[100px] h-[100px] rounded-md  cursor-pointer `}
                  alt=""
                />
                <img
                  src={ProductImages[0]}
                  onMouseOver={() => setCurrentImage(0)}
                  className={`w-[100px] h-[100px] rounded-md  cursor-pointer`}
                  alt=""
                />
              </div>
              <div className="">
                <img
                  src={ProductImages[currentImage]}
                  className="min-w-[350px] min-h-[350px] w-[450px] sm:h-[450px] rounded-xl object-cover sm:p-0 p-1"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-6 px-4">
                <div>
                  <h1 className="max-w-[600px]">
                    <span className="text-4xl font-bold">
                      Gossip and Giggles Cushion Foundation
                    </span>
                  </h1>
                  <p>
                    <span className="text-sm font-normal text-neutral-500">
                      Category: Face
                    </span>
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-bold text-3xl">$15</span>
                  </p>
                </div>
                <div className="flex flex-wrap gap-8 flex-col">
                  <div className="flex flex-col gap-4">
                    {" "}
                    <p>
                      <span className="font-bold">Shades:</span>
                    </p>
                    <div className="flex gap-4">
                      <p
                        onMouseOver={() => setCurrentImage(3)}
                        onClick={() => {
                          setCurrentImage(3);
                        }}
                        className={`w-fit border rounded-full px-3 hover:text-white cursor-pointer ${
                          currentImage === 3
                            ? `bg-neutral-700 text-white  transition`
                            : ` border-solid border-neutral-400  text-neutral-600 hover:bg-neutral-700 transition`
                        }
                      `}
                      >
                        Shade 1
                      </p>
                      <p
                        onMouseOver={() => setCurrentImage(4)}
                        onClick={() => {
                          setCurrentImage(4);
                        }}
                        className={`w-fit border rounded-full px-3 hover:text-white cursor-pointer ${
                          currentImage === 4
                            ? `bg-neutral-700 text-white  transition`
                            : ` border-solid border-neutral-400  text-neutral-600 hover:bg-neutral-700 transition`
                        }
                      `}
                      >
                        Shade 2
                      </p>
                      <p
                        onMouseOver={() => setCurrentImage(5)}
                        onClick={() => {
                          setCurrentImage(5);
                        }}
                        className={`w-fit border rounded-full px-3 hover:text-white cursor-pointer ${
                          currentImage === 5
                            ? `bg-neutral-700 text-white  transition`
                            : ` border-solid border-neutral-400  text-neutral-600 hover:bg-neutral-700 transition`
                        }
                      `}
                      >
                        Shade 3
                      </p>
                    </div>
                  </div>

                  <div>
                    <Button>Business Inquiries</Button>
                  </div>
                  <div>
                    <p className="max-w-[500px]">{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{" "}
        <section className="flex flex-wrap gap-4 min-w-[300px] justify-center p-12 sm:p-12500 sm:w-full ">
          {/* content start */}

          {/* description start*/}

          <div className="flex flex-col flex-wrap max-w-[1200px]  justify-center items-center w-[800px]  xl:w-full ">
            <div className="self-stretch min-w-[300px] w-fit sm:w-[800px] xl:w-full text-black text-base font-normal leading-normal">
              <h2 className="text-xl font-semibold">
                Features of Gossip & Giggles {title}:
              </h2>
              <ul className="sm:w-full pl-4 p-2 list-disc">
                {features.map((list, index) => (
                  <li key={index}>{list}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* description end*/}

          {/* content end */}
        </section>
        <section className="flex flex-col justify-center items-center gap-4 bg-black  sm:w-full p-4 py-16">
          <div className="sm:w-full max-w-[900px]  gap-9 flex-wrap md:flex-nowrap justify-center items-center flex ">
            <div className="">
              <img className="object-cover" src={img[0]} alt={title} />
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
        <section className="grid grid-cols-2 sm:flex flex-wrap justify-center items-center gap-4 bg-white sm:w-full p-4 py-16">
          <div className="col-span-2 w-full text-2xl flex justify-center  font-semibold p-4">
            <h2 className="w-[800px]">Explore other Categories</h2>
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
