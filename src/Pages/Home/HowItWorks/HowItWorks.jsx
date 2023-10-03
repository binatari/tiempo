import React from "react";
import dial from "../../../assets/HomePageImg/HowItWorks/howItWorksDial.png";
import bezels from "../../../assets/HomePageImg/HowItWorks/howItWorksBezzle.png";
import straps from "../../../assets/HomePageImg/HowItWorks/HowItWorksStraps.png";


// import curveLeft  from "../../../assets/HomePageImg/HowItWorks/left-curve.png";
// import curveRight from "../../../assets/HomePageImg/HowItWorks/right-curve.png";

// import tab from "../../src/assets/tab.png";
// import laptop from "../../src/assets/laptop.png";
// import tablet from "../../src/assets/tablet.png";

const HowItWorks = () => {
  return (
    <div className="px-6  mx-auto w-9/12 mt-10 md:mt-16 lg:mt-24">
    <h2 className="mb-4 md:mb-5 lg:mb-10 text-xl md:text-2xl lg:text-3xl text-center font-medium uppercase">
      how it’s works
    </h2>
    {/* <hr className="h-px w-16 md:w-20 lg:w-24 bg-[#989898] mx-auto" /> */}
    <hr className="border border-[#989898] w-28 mx-auto mt-8"/>
    {/* the dials start */}
    <div className="w-full mt-12 md:mt-20 lg:mt-26 flex gap-6 md:gap-0 flex-col md:flex-row-reverse items-center justify-center">
      <div className="flex-1">
        <img
          className="w-[200px] md:w-[250px] lg:w-[295px]"
          src={dial}
          alt=""
        />
      </div>
      <div className="flex-1">
        <p className="text-xl md:text-2xl lg:text-3xl text-center font-semibold text-[#474A59]">
          01/
        </p>
      </div>
      <div className="flex-1">
        <h2 className="mb-1.5 md:mb-2 lg:mb-4 text-lg md:text-xl lg:text-2xl text-[#474A59] font-semibold uppercase">
          the dials
        </h2>
        <hr className="h-0.5 w-8 md:w-11 bg-[#E6E6E6]" />
        <p className=" text-justify mt-4 md:mt-4 lg:mt-10 mb-6 md:mb-6 lg:mb-14 text-sm lg:text-base font-normal text-[#474A59]">
          Keep it classic with the sweeping dome bezel or add the fire and
          brilliance of a diamond packed bezel. Even Better, coordinate with a
          ring of the most vivid sapphire stones.
        </p>
        <button className="px-4 md:px-5 lg:px-10 py-1.5 md:py-2 lg:py-3 border-solid border rounded-3xl border-[#474A59] text-sm lg:text-base font-normal uppercase text-[#3D3B3C]">
          Configure
        </button>
      </div>
    </div>
    {/* the dials end */}
    {/* the bezels start */}
    <div className="relative mt-16 md:mt-24 lg:mt-36 flex gap-6 md:gap-0 flex-col md:flex-row items-center justify-center ">
      {/* curve */}
      {/* <img
        className="hidden lg:block absolute  lg:top-[50%] lg:right-[-60%] translate-x-[-50%]
       translate-y-[-50%] "
        src={curveLeft}
        alt=""
      /> */}
      <div className="flex-1">
        <img
          className="w-[200px] md:w-[250px] lg:w-[295px]"
          src={bezels}
          alt=""
        />
      </div>
      <div className="flex-1">
        <p className="text-xl md:text-2xl lg:text-3xl text-center font-semibold text-[#474A59]">
          02/
        </p>
      </div>
      <div className="flex-1">
        <h2 className="mb-1.5 md:mb-2 lg:mb-4 text-lg md:text-xl lg:text-2xl text-[#474A59] font-semibold uppercase">
          the bezels
        </h2>
        <hr className="h-0.5 w-8 md:w-11 bg-[#E6E6E6]" />
        <p className=" text-justify mt-4 md:mt-4 lg:mt-10 mb-6 md:mb-6 lg:mb-14 text-sm lg:text-base font-normal text-[#474A59]">
          Keep it classic with the sweeping dome bezel or add the fire and
          brilliance of a diamond packed bezel. Even Better, coordinate with a
          ring of the most vivid sapphire stones.
        </p>
        <button className="px-4 md:px-5 lg:px-10 py-1.5 md:py-2 lg:py-3 border-solid border rounded-3xl border-[#474A59] text-sm lg:text-base font-normal uppercase text-[#3D3B3C]">
          Configure
        </button>
      </div>
    </div>
    {/* the bezrls end */}
    {/* the straps start */}
    <div className="relative mt-16 md:mt-24 lg:mt-36 flex gap-6 md:gap-0 flex-col md:flex-row-reverse items-center justify-center z-10">
      {/* curve */}
      {/* <img
        className=" absolute  lg:top-[50%] lg:right-[30%] translate-x-[-50%]
       translate-y-[-50%] "
        src={curveRight}
        alt=""
      /> */}
      <div className="flex-1">
        <img
          className="w-[200px] md:w-[250px] lg:w-[295px]"
          src={straps}
          alt=""
        />
      </div>
      <div className="flex-1">
        <p className="text-xl md:text-2xl lg:text-3xl text-center font-semibold text-[#474A59]">
          03/
        </p>
      </div>
      <div className="flex-1">
        <h2 className="mb-1.5 md:mb-2 lg:mb-4 text-lg md:text-xl lg:text-2xl text-[#474A59] font-semibold uppercase">
          the straps
        </h2>
        <hr className="h-0.5 w-8 md:w-11 bg-[#E6E6E6]" />
        <p className=" text-justify mt-4 md:mt-4 lg:mt-10 mb-6 md:mb-6 lg:mb-14 text-sm lg:text-base font-normal text-[#474A59]">
          A choice between the distinctive design of the Jubilee or the sporty
          Oyster bracelet made even harder by the assortment of our vivid
          integrated rubber straps
        </p>
        <button className="px-4 md:px-5 lg:px-10 py-1.5 md:py-2 lg:py-3 border-solid border rounded-3xl border-[#474A59] text-sm lg:text-base font-normal uppercase text-[#3D3B3C]">
          Configure
        </button>
      </div>
    </div>
    {/* the straps end */}
    {/* tiempo start*/}
    {/* <div className="mt-16 md:mt-24 lg:mt-48 ">
      <div className="px-0 md:px-10 lg:px-14 mb-10 md:mb-16 lg:mb-20 ">
        <p className="pl-4 md:pl-8 lg:pl-12 border-l-2 border-[#5D5D5D] xl:text-[34px]  mid-xl:text-[30px] lg:text-[25px] leading-[30px] md:leading-[45px]  text-[#474A59]">
          Tiempo empowers customers to customize their own ingenieur
          chronograph, allowing for a more personalized and intelligent
          experience.
        </p>
      </div>
     
    </div> */}
    {/* tiempo end*/}
  </div>

  );
};

export default HowItWorks;
