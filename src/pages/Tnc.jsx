import Footer from "./Footer";

function Tnc() {
  return (
    <>
      <div className="flex flex-col py-16  bg-white ">
        <div className="grid justify-center w-full gap-8">
          <div className="w-[640px] h-[202px] flex-col justify-center items-center gap-11 inline-flex">
            <div className="text-center text-gray-900 text-6xl font-bold  leading-[65px]">
              Terms & Conditions
            </div>
            <div className="w-[640px] h-[93px] opacity-70 text-center text-gray-900 text-[19px] font-normal leading-loose">
              By accessing and placing an order with UXTheme, you confirm that
              you are in agreement with and bound by the terms and conditions
            </div>
          </div>
        </div>
        <section className="flex justify-center py-16">
          <div className="w-[854px] h-[1137px] flex-col justify-center items-start gap-[43px] inline-flex">
            <div className="w-[731px] h-72 opacity-70 text-gray-900 text-[17px] font-normal   leading-[29px]">
              By accessing and placing an order with UXTheme, you confirm that
              you are in agreement with and bound by the terms and conditions
              contained in the Terms Of Use outlined below. These terms apply to
              the entire website and any email or other type of communication
              between you and UXTheme. Under no circumstances shall UXTheme team
              be liable for any direct, indirect, special, incidental or
              consequential damages, including, but not limited to, loss of data
              or profit, arising out of the use, or the inability to use, the
              materials on this site, even if UXTheme team or an authorized
              representative has been advised of the possibility of such
              damages. If your use of materials from this site results in the
              need for servicing, repair or correction of equipment or data, you
              assume any costs thereof. UXTheme will not be responsible for any
              outcome that may occur during the course of usage of our
              resources.
            </div>
            <div className="h-[148px] flex-col justify-center items-start gap-5 inline-flex">
              <div className="text-gray-900 text-[19px] font-bold   leading-loose">
                License
              </div>
              <div className="w-[731px] h-24 opacity-70 text-gray-900 text-[17px] font-normal   leading-[29px]">
                By purchasing or downloading resource (“item” or “file”) you are
                being granted a license to use these files for specific uses
                under certain conditions. Ownership remains with UXTheme, and
                you are required to abide by the following licensing terms.
              </div>
            </div>
            <div className="w-[854px] h-[190px] relative flex-col justify-start items-start flex">
              <div className="text-gray-900 text-[19px] font-bold   leading-loose">
                Security
              </div>
              <div className="w-[830px] h-[146px] opacity-70 text-gray-900 text-[17px] font-normal   leading-[50px]">
                You have rights for royalty free use of our resources for any or
                all of your personal.
                <br />
                You are not required to attribute or link to UXTheme in any of
                projects.
                <br />
                We reserve the rights to change prices and revise the resources
                usage policy in any moment.
              </div>
              <div className="w-[9px] h-[109px] relative">
                <div className="w-[9px] h-[9px] left-0 top-0 absolute bg-zinc-900 rounded-full" />
                <div className="w-[9px] h-[9px] left-0 top-[50px] absolute bg-zinc-900 rounded-full" />
                <div className="w-[9px] h-[9px] left-0 top-[100px] absolute bg-zinc-900 rounded-full" />
              </div>
            </div>
            <div className="h-[230px] flex-col justify-center items-start gap-5 inline-flex">
              <div className="text-gray-900 text-[19px] font-bold   leading-loose">
                Embedded content from other websites
              </div>
              <div className="w-[731px] h-[178px] opacity-70 text-gray-900 text-[17px] font-normal   leading-[29px]">
                Articles on this site may include embedded content (e.g. videos,
                images, articles, etc.). Embedded content from other websites
                behaves in the exact same way as if the visitor has visited the
                other website.
                <br />
                <br />
                These websites may collect data about you, use cookies, embed
                additional third-party tracking, and monitor your interaction
                with that embedded content, including tracking your interaction
                with the embedded content if you have an account and are logged
                in to that website.
              </div>
            </div>
            <div className="h-[110px] flex-col justify-center items-start gap-5 inline-flex">
              <div className="text-gray-900 text-[19px] font-bold   leading-loose">
                Changes about terms
              </div>
              <div className="w-[731px] h-[58px] opacity-70 text-gray-900 text-[17px] font-normal   leading-[29px]">
                If we change our terms of use we will post those changes on this
                page. Registered users will be sent an email that outlines
                changes made to the terms of use.
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Tnc;
