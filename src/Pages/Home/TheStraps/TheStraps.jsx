import React, { useContext } from "react";
import image1 from "../../../assets/HomePageImg/StrapsImg/strap1.png";
import image2 from "../../../assets/HomePageImg/StrapsImg/strap2.png";
import image3 from "../../../assets/HomePageImg/StrapsImg/strap3.png";
import image4 from "../../../assets/HomePageImg/StrapsImg/strap4.png";
import strapColor1 from "../../../assets/HomePageImg/StrapsImg/strapColor1.png";
import strapColor2 from "../../../assets/HomePageImg/StrapsImg/strapColor2.png";
import strapColor3 from "../../../assets/HomePageImg/StrapsImg/strapColor3.png";
import strapColor4 from "../../../assets/HomePageImg/StrapsImg/strapColor4.png";
import strapColor5 from "../../../assets/HomePageImg/StrapsImg/strapColor5.png";
import strapColor6 from "../../../assets/HomePageImg/StrapsImg/strapColor6.png";
import strapColor7 from "../../../assets/HomePageImg/StrapsImg/strapColor7.png";
import { Context } from "../../../Context/MainContext";

const TheStraps = () => {
  const { isDark } = useContext(Context)
  return (
    <div className="mt-20 pb-10 md:pb-16 lg:pb-52 md:bg-paint bg-no-repeat md:bg-bottom xl:bg-contain">
      <h2 className={`mb-2 lg:mb-4 text-xl md:text-2xl lg:text-3xl text-center uppercase ${isDark ? 'text-[#ffffff]' : 'text-[#000000]'}`}>
        The Straps
      </h2>
      <hr className="h-px w-16 md:w-20 lg:w-24 bg-[#989898] mx-auto" />
      <div className="mt-10 md:mt-16 lg:mt-14 flex flex-col lg:flex-row-reverse gap-10 md:gap-10 xl:gap-14  items-center mx-auto lg:w-9/12 w-10/12">
        <div className="w-full ">
          <h3 className={`${isDark ? 'text-white' : 'text-black'} text-lg md:text-xl mb-3 lg:mb-5 uppercase `}>
            Straps
          </h3>
          <p className={`text-base md:text-lg  text-justify  capitalize ${isDark ? 'text-[#8C8C8C]' : 'text-[#474A59]'} leading-[23.7px] lg:text-xl `}>
            A choice between the distinctive design of the Jubilee or the sporty
            Oyster bracelet made even harder by the assortment of our vivid
            integrated rubber straps.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mid-xl:gap-6 gap-6" >
             <img className="mx-auto mid-xl:w-[95.76px] mid-xl:h-[156.99px] lg:w-[99px] lg:h-[125px]" src={image1} alt="straps" />
             <img className="mx-auto mid-xl:w-[95.76px] mid-xl:h-[156.99px] lg:w-[99px] lg:h-[125px]" src={image2} alt="straps" />
             <img className="mx-auto mid-xl:w-[95.76px] mid-xl:h-[156.99px] lg:w-[99px] lg:h-[125px]" src={image3} alt="straps" />
                 <img className="mx-auto mid-xl:w-[95.76px] mid-xl:h-[156.99px] lg:w-[99px] lg:h-[125px]" src={image4} alt="straps" />
                 </div>
        </div>
   
        <div className="mt-10 lg:mt-14 grid gap-x-10 gap-y-10 md:gap-y-10 lg:gap-y-20 grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mx-auto lg:w-9/12 w-10/12">
               <img className="mx-auto mid-xl:w-[95.76px] mid-xl:h-[156.99px]" src={strapColor1} alt="straps" />
               <img className="mx-auto mid-xl:w-[95.76px] mid-xl:h-[156.99px]" src={strapColor2} alt="straps" />
               <img className="mx-auto mid-xl:w-[95.76px] mid-xl:h-[156.99px]" src={strapColor3} alt="straps" />
               <img className="mx-auto mid-xl:w-[95.76px] mid-xl:h-[156.99px]" src={strapColor4} alt="straps" />
               <img className="mx-auto mid-xl:w-[95.76px] mid-xl:h-[156.99px]" src={strapColor5} alt="straps" />
               <img className="mx-auto mid-xl:w-[95.76px] mid-xl:h-[156.99px]" src={strapColor6} alt="straps" />
               <img className="mx-auto mid-xl:w-[95.76px] mid-xl:h-[156.99px]" src={strapColor7} alt="straps" />
              
             </div>
    </div>
  );
};

export default TheStraps;