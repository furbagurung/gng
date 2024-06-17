import { Button } from "@/components/ui/button";
import { FAQ } from "@/pages/FAQ";
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
}) => {
  CatalogLayout.propTypes = {
    title: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  };
  return (
    <>
      <div className="flex flex-col  ">
        <div className="grid sm:flex flex-col justify-center sm:gap-10">
          <div className="sm:py-8 grid justify-center border">
            {" "}
            <div className=" text-4xl poppins-extrabold text-center ">
              <h1>{title}</h1>
            </div>
            <div className="text-center flex justify-center  w-[320px] sm:w-full p-4">
              <p>
                Ready to start your next project with us? That&apos;s great!
                Send us an message
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex  bg-white justify-center">
          <div className=" max-w-[1440px]  flex-col justify-center items-center gap-6 inline-flex">
            <div className="self-stretch  p-8 flex-col justify-center items-start gap-12 flex ">
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="w-[1312px] justify-center items-start gap-4 inline-flex">
                  <div className="w-[648px] h-[624px] justify-center items-center flex">
                    <img
                      className="grow shrink basis-0 self-stretch"
                      src="https://via.placeholder.com/648x624"
                    />
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                    <div className="self-stretch h-[304px] justify-start items-start gap-4 inline-flex">
                      <img
                        className="grow shrink basis-0 self-stretch"
                        src="https://via.placeholder.com/316x304"
                      />
                      <img
                        className="grow shrink basis-0 self-stretch"
                        src="https://via.placeholder.com/316x304"
                      />
                    </div>
                    <div className="self-stretch h-[304px] justify-start items-start gap-4 inline-flex">
                      <img
                        className="grow shrink basis-0 self-stretch"
                        src="https://via.placeholder.com/316x304"
                      />
                      <div className="w-[316px] h-[304px] relative">
                        <img
                          className="w-[316px] h-[304px] left-0 top-0 absolute"
                          src="https://via.placeholder.com/316x304"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-20 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                  <div className="self-stretch text-black text-[40px] font-bold   leading-[48px]">
                    Gossip and Giggles {title}
                  </div>
                  <div className="flex-col justify-start items-start gap-8 flex">
                    <div className="flex-col justify-start items-start gap-4 flex">
                      <div className="w-[832px] text-black text-base font-normal   leading-normal">
                        {description}
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-6 flex">
                      <div className="self-stretch pt-2 justify-start items-start gap-6 inline-flex">
                        <div className="flex-col justify-start items-start gap-2 inline-flex"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[400px] flex-col justify-start items-start gap-6 inline-flex">
                  <div className="self-stretch h-[42px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch text-black text-[32px] font-bold   leading-[41.60px]">
                      Rs. 55{" "}
                    </div>
                  </div>

                  <div className="w-full flex-col justify-center items-start gap-6 flex">
                    <div className="flex-col justify-center items-start gap-4 flex  ">
                      <div className="h-[120px]  pt-2 flex-col justify-start items-start gap-4 flex">
                        <Button className="self-stretch px-6 py-3  bg-black border border-black justify-start items-center gap-2 inline-flex">
                          <div className=" text-base font-normal   leading-normal">
                            Contact Us for Bulk Order
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="w-full flex justify-center bg-white">
          <div className="w-[1440px] h-[864px] px-16 py-28 bg-white flex-col justify-start items-center gap-20 inline-flex">
            <div className="self-stretch justify-start items-center gap-20 inline-flex">
              <img
                className="grow shrink basis-0 h-[640px]"
                src="https://via.placeholder.com/616x640"
              />
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch h-[234px] flex-col justify-start items-start gap-4 flex">
                  <div className="text-center text-black text-base font-semibold font-['Roboto'] leading-normal">
                    Discover
                  </div>
                  <div className="self-stretch h-[194px] flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch text-black text-5xl font-bold font-['Roboto'] leading-[57.60px]">
                      Enhance Your Beauty with Our Premium Products
                    </div>
                    <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-[27px]">
                      Our product is designed to meet all your makeup needs.
                      With high-quality ingredients and a wide range of shades,
                      it's perfect for any occasion.
                    </div>
                  </div>
                </div>
                <div className="pt-4 justify-start items-center gap-6 inline-flex">
                  <div className="px-6 py-3 border border-black justify-center items-center gap-2 flex">
                    <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                      Shop Now
                    </div>
                  </div>
                  <div className="justify-center items-center gap-2 flex">
                    <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                      Learn More
                    </div>
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white flex justify-center p-8 pb-24">
          <div className="w-[1280px] h-[366px] justify-start items-start gap-8 inline-flex">
            <div className="w-[406px] h-[366px] flex-col justify-start items-start gap-6 inline-flex">
              <img
                className="w-[406px] h-[244px] relative rounded-lg"
                src="https://via.placeholder.com/406x244"
              />
              <div className="self-stretch h-[98px] flex-col justify-center items-start gap-1 flex">
                <div className="self-stretch text-black text-xl font-medium font-['Inter'] leading-[30px]">
                  Product{" "}
                </div>
                <div className="self-stretch text-zinc-500 text-xl font-medium font-['Inter'] leading-[30px]">
                  Body text for first product
                </div>
                <div className="self-stretch text-black text-xl font-medium font-['Inter'] leading-[30px]">
                  $10.99
                </div>
              </div>
            </div>
            <div className="w-[405px] h-[366px] flex-col justify-start items-start gap-6 inline-flex">
              <img
                className="w-[405px] h-[244px] relative rounded-lg"
                src="https://via.placeholder.com/405x244"
              />
              <div className="self-stretch h-[98px] flex-col justify-center items-start gap-1 flex">
                <div className="self-stretch text-black text-xl font-medium font-['Inter'] leading-[30px]">
                  Product
                </div>
                <div className="self-stretch text-zinc-500 text-xl font-medium font-['Inter'] leading-[30px]">
                  Body text for second product
                </div>
                <div className="self-stretch text-black text-xl font-medium font-['Inter'] leading-[30px]">
                  $10.99
                </div>
              </div>
            </div>
            <div className="w-[405px] h-[366px] flex-col justify-start items-start gap-6 inline-flex">
              <img
                className="w-[405px] h-[244px] relative rounded-lg"
                src="https://via.placeholder.com/405x244"
              />
              <div className="self-stretch h-[98px] flex-col justify-center items-start gap-1 flex">
                <div className="self-stretch text-black text-xl font-medium font-['Inter'] leading-[30px]">
                  Product
                </div>
                <div className="self-stretch text-zinc-500 text-xl font-medium font-['Inter'] leading-[30px]">
                  Body text for third product
                </div>
                <div className="self-stretch text-black text-xl font-medium font-['Inter'] leading-[30px]">
                  $10.99
                </div>
              </div>
            </div>
          </div>
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
