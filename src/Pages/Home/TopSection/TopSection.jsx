import paintBG from "../../../assets/HomePageImg/TopSection/paint-bg.png";
import watchBG from "../../../assets/HomePageImg/TopSection/watch-bg.svg";
import timepoLogoDarkMode from "../../../assets/TiempoWhiteLogo.png";
import timepoLogoWhite from "../../../assets/TiempoBlackLogo.png";

import { useContext } from "react";
import { Context } from "../../../Context/MainContext";


//Tope section

const TopSection = () => {

   
     const { isDark } = useContext(Context);
    
  return (
    <div
    className={`max-w-full ${
      isDark ? "bg-[#000000]" : "bg-white"
    } lg:h-screen`}
  >
      {/* top bg */}
      <div
        className="hidden md:block  lg:mb-20 md:h-[208px] h-14"
        style={{
          backgroundImage: `url(${paintBG})`,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="block md:hidden mb-14 lg:mb-20 md:h-[208px]  h-14">

      </div>
      {/* watch bg */}
      <div
        className="px-6 md:px-16 lg:px-20 xl:px-40 mid-xl:h-[725px] lg:h-[650px] md:h-[500px] xl:w-full xxl:h-[780px] xxxl:h-[1000px] h-[265px]"
        style={{
          backgroundImage: `url(${watchBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",

        }}
      >
        <div className="flex justify-between items-center">
          {/* <div className="w-1/6">
            <img className="float-left" src={toggle} alt="" />
          </div> */}
          { isDark ?
          <div className="lg:w-2/5 md:w-5/12 w-40 mx-auto ">
            <img className="mx-auto " src={timepoLogoDarkMode} alt="" />
          </div>
          :
          <div className="md:w-2/5 w-40 mx-auto">
            <img className="mx-auto" src={timepoLogoWhite} alt="" />
          </div>

          }
        
      
        </div>
      </div>
    </div>
  );
};

export default TopSection;