import { Button } from "./button";
import { Input } from "./input";
import logo from "../../assets/logo.svg";

function SearchBar() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-[1341px] h-[250px] p-6 bg-gray-200 rounded-3xl flex-col justify-start items-center gap-6 inline-flex">
          <div className="w-[1293px] h-[47px] justify-center items-center inline-flex gap-6">
            <img src={logo} className="w-[85px] h-9 relative" />

            <input
              className="w-[930px] h-[47px] bg-white rounded-[10px] p-6"
              type="search"
              placeholder="Search..."
            />
            <Button> Search </Button>
            <Button variant="outline" className=" border-1">
              {" "}
              Contact{" "}
            </Button>
          </div>{" "}
          <div className="w-[1287px] h-9 px-[130px] bg-black/opacity-0 justify-start items-center gap-[7px] inline-flex">
            <Button
              variant="secondary"
              className="text-gray-600 poppins-regular font font-normal"
            >
              <div className=" text-neutral-500 text-sm font-normal">
                Cushion Foundation
              </div>
            </Button>
            <Button
              variant="secondary"
              className="text-gray-600 poppins-regular font font-normal"
            >
              <div className=" text-neutral-500 text-sm font-normal">
                Cushion Foundation
              </div>
            </Button>
            <Button
              variant="secondary"
              className="text-gray-600 poppins-regular font font-normal"
            >
              <div className=" text-neutral-500 text-sm font-normal">
                Cushion Foundation
              </div>
            </Button>
            <Button
              variant="secondary"
              className="text-gray-600 poppins-regular font font-normal"
            >
              <div className=" text-neutral-500 text-sm font-normal">
                Cushion Foundation
              </div>
            </Button>
            <Button
              variant="secondary"
              className="text-gray-600 poppins-regular font font-normal"
            >
              <div className=" text-neutral-500 text-sm font-normal">
                Cushion Foundation
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
