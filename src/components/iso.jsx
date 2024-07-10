// iso certificates
import iso from "@/assets/ISO/license.png";

export function ISO() {
  return (
    <>
      <div className="flex gap-40 cursor-pointer h-fit overflow-y-clip ">
        <div>
          {" "}
          <img src={iso} className="min-w-[300px] space-x-8 sm:w-[1029px]" />
        </div>
      </div>
    </>
  );
}
