import left from "../../../assets/HomePageImg/TheDisplayClock/left.png";
import right from "../../../assets/HomePageImg/TheDisplayClock/right.png";
// import display from "../../../assets/HomePageImg/TheDisplayClock/display.png";
import React, { useContext, useEffect, useRef } from "react";


import strap1 from "../../../assets/HomePageImg/TheDisplayClock/strap1.png";
import strap2 from "../../../assets/HomePageImg/TheDisplayClock/strap2.png";
import strap3 from "../../../assets/HomePageImg/TheDisplayClock/strap3.png";
import strap4 from "../../../assets/HomePageImg/TheDisplayClock/strap4.png";
import strap5 from "../../../assets/HomePageImg/TheDisplayClock/strap5.png";
import strap6 from "../../../assets/HomePageImg/TheDisplayClock/strap6.png";
import strap7 from "../../../assets/HomePageImg/TheDisplayClock/strap7.png";
import strap8 from "../../../assets/HomePageImg/TheDisplayClock/strap8.png";
import strap9 from "../../../assets/HomePageImg/TheDisplayClock/strap9.png";
import strap10 from "../../../assets/HomePageImg/TheDisplayClock/strap10.png";

import bezel1 from "../../../assets/HomePageImg/TheDisplayClock/bezel1.png";
import bezel2 from "../../../assets/HomePageImg/TheDisplayClock/bezel2.png";
import bezel3 from "../../../assets/HomePageImg/TheDisplayClock/bezel3.png";
import bezel4 from "../../../assets/HomePageImg/TheDisplayClock/bezel4.png";
import bezel5 from "../../../assets/HomePageImg/TheDisplayClock/bezel5.png";
import bezel6 from "../../../assets/HomePageImg/TheDisplayClock/bezel6.png";


import clock2 from "../../../assets/HomePageImg/TheDisplayClock/clock2.png";


import circleWatch from "../../../assets/HomePageImg/TheDisplayClock/circleWatch.png";

import { Context } from "../../../Context/MainContext";

const strapsArray1 = [strap1, strap2, strap3, strap4, strap5];
const strapsArray2 = [strap6, strap7, strap8, strap9, strap10];
const bezelArray1 = [bezel1, bezel2, bezel3];
const bezelArray2 = [bezel4, bezel5, bezel6];
const TheDisplay = () => {



  const { isDark } = useContext(Context)

  return (
    <div className="w-[100vw] md:mt-0 mt-14">
      {/* upper display and left right big image part */}
      <div className="relative">
        <img
          src={left}
          className="absolute left-0 top-0 xs:w-[155px] xs:h-[155px] sm:w-[160px] sm:h-[160px] md:w-[200px] xl:w-[344px] lg:w-[285px] mid-xl:h-[300px] mid-xl:w-[317px]  md:h-[200px] lg:h-[320px] object-contain"
        />
        <img
          src={right}
          className="absolute right-0 top-0 xs:w-[155px] xs:h-[155px] sm:w-[160px] sm:h-[160px] md:w-[200px] mid-xl:h-[300px] mid-xl:w-[300px] xl:w-[344px] lg:w-[270px]  md:h-[200px] lg:h-[335px] object-contain"
        />
        <div className="flex items-center justify-center">
          <h1 className={`lg:text-[30px] md:text-[27px] text-[24px] uppercase text-center md:mt-36 mt-40 ${isDark ? 'text-white' : 'text-black'}`}>the display</h1>
        </div>
        <div className='h-[3px] border-b border-[#bdbdbd]  w-[100px] mx-auto pt-2'></div>
      </div>
      {/* upper display and left right big image part end */}

      {/* clock and strap part */}

      <div className="grid lg:grid-cols-2 grid-cols-1 xxl:w-[63%]  lg:w-9/12 mx-auto lg:mt-32 mt-14">
        <div className="lg:mx-0 mx-auto">
          <img className="mid-xl:w-[350px] mid-xl:h-[351px] lg:w-[300px] lg:h-[301px] md:w-[269px] md:h-[270px] w-[235px] h-[235px]" src={circleWatch} alt="watchimg" />
        </div>

        <div className="lg:mt-4 mt-14">
          <div className="flex items-center justify-center gap-3">
            {strapsArray1?.map((item, i) => (
              <img
                src={item}
                className=" w-[50px] h-[90px] md:w-[65px] md:h-[105px] mid-xl:w-[86px] mid-xl:h-[141px] lg:w-[70px] lg:h-[115px]    object-contain"
                key={i}
              />
            ))}
          </div>
          <div className="flex items-center justify-center gap-3 mt-4">
            {strapsArray2?.map((item, i) => (
              <img
                src={item}
                className=" w-[50px] h-[90px] md:w-[65px] md:h-[105px] mid-xl:w-[86px] mid-xl:h-[141px] lg:w-[70px] lg:h-[115px]  object-contain"
                key={i}
              />
            ))}
          </div>
        </div>
      </div>

      {/* clock and strap part  end*/}

      {/* bezel part */}

      <div className="md:flex items-center justify-center gap-2 lg:mt-[64px] mt-[45px] mb-[100px]">
        <div className="flex items-center justify-center gap-6 mt-4">
          {bezelArray1?.map((item, i) => (
            <img
              src={item}
              className=" w-[50px] md:w-[70px] lg:w-[95px] lg:h-[95px] h-[50px] md:h-[90px]  object-contain"
              key={i}
            />
          ))}
        </div>
        <div className="flex justify-center py-7">
          <img
            src={clock2}
            className=" w-[90px] h-[120px] md:w-[100px] mx-2 lg:w-[114px] md:h-[150px] lg:h-[183px] object-contain"
          />
        </div>
        <div className="flex items-center justify-center gap-6 ">
          {bezelArray2?.map((item, i) => (
            <img
              src={item}
              className="w-[50px] md:w-[70px] lg:w-[104px] h-[50px] md:h-[90px] lg:h-[104px] object-contain"
              key={i}
            />
          ))}
        </div>
      </div>
      {/* bezel part end */}
    </div>
  );
};

export default TheDisplay;
