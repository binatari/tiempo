import PopularCollection from "../../Pages/Home/PopularCollection/PopularCollection";
import HeroSection from "../../Pages/Home/HeroSection/HeroSection";
// import TheFirstParallaxContent from '../../Pages/Home/ParallaxData/TheFirstParallaxContent'
// import TheSecondParallax from '../../Pages/Home/ParallaxData/TheSecondParallax'
// import TheThirdParallax from '../../Pages/Home/ParallaxData/TheThirdParallax'
// import TheForthParallax from '../../Pages/Home/ParallaxData/TheForthParallax'
// import TheStickyParallax from '../../Pages/Home/ParallaxData/TheStickyParallax'
import Footer from "../../Shared/Footer/Footer";
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { gsap } from 'gsap'
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/MainContext";
// import BezelsSlider from '../../Pages/BezelsSlide/BezelsSlider'
// import BodySlide from '../../Pages/BodySlide/BodySlide'
// import DialSlide from '../../Pages/DialSlide/DialSlide'
import { AiOutlineClose } from "react-icons/ai";
import TabletImages from "../../Pages/Home/TabletImages/TabletImages";
import TheDisplay from "../../Pages/Home/TheDisplay/TheDisplay";
import TheNewDials from "../../Pages/Home/TheNewDials/TheNewDials";
import TheNewBezels from "../../Pages/Home/TheNewDials/TheNewBezels/TheNewBezels";
import TheStraps from "../../Pages/Home/TheStraps/TheStraps";
import TopSection from "../../Pages/Home/TopSection/TopSection";

import logo from "../../assets/TiempoBlackLogo.png";

const Home = () => {
  const { isDark } = useContext(Context);
  const [isLoadingPopUp, setIsLoadingPopUp] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const handleUnderstandClick = () => {
    // Save 'true' in localStorage

    localStorage.setItem("understood", "true");
    // Hide the popup
    setIsLoadingPopUp(false);
  };

  useEffect(() => {
    setIsLoadingPopUp(true);
    // Check if the user has already clicked 'I understand'
    const understood = localStorage.getItem("understood");
    if (understood === "true") {
      setShowPopup(false);
      setIsLoadingPopUp(false);
    }
  }, []);

  return (
    <>
      <div
        className={` hide-scrollbar ${isDark ? "bg-[#000000]" : "bg-white"} `}
      >
        {/* popup   */}
        {isLoadingPopUp ? (
          <>
            {showPopup == true && (
              <div className={`popup ${showPopup ? "show" : ""}`}>
                <div className="popup-content ">
                  <div className="flex items-end justify-end text-black">
                    <button onClick={handleUnderstandClick}>
                      <AiOutlineClose size={27} className="cursor-pointer" />
                    </button>
                  </div>
                  <div className=" p-4 md:px-14">
                    <div className="flex items-center justify-center mb-10">
                      <img src={logo} className=" w-20 h-20 md:w-28 md:h-28" />
                    </div>
                    <p className="font-semibold uppercase text-[20px] text-black my-3">
                      Information
                    </p>
                    <p className="text-[11px] md:text-[14px] text-gray-700 ">
                      RW Luxury is an independent company which <br />{" "}
                      customizes authentic watches customer&apos;s <br />{" "}
                      request and is in no way affiliated with the <br />{" "}
                      manufactures.
                    </p>
                    <button
                      onClick={handleUnderstandClick}
                      className="px-10 py-2 bg-black text-[14px] md:text-[16px] rounded-full text-white mt-6 md:mt-8 uppercase hover:bg-white hover:text-black border border-transparent hover:border-[1px] hover:border-[#000] duration-100"
                    >
                      I understand
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <></>
        )}
        {/* popup end */}

        <div>
          <TopSection></TopSection>
        </div>
        <div className="mt-[0px]">
          <HeroSection></HeroSection>
        </div>

        {/* <div className=''>
          <CustomIngenieur></CustomIngenieur>
        </div> */}
        <div data-aos="fade-up" className="my-10 md:my-10">
          <TheNewDials />
        </div>

        <div data-aos="fade-up" className="mb-10 ">
          <TheNewBezels />
        </div>

        <div data-aos="fade-up">
          <TheStraps></TheStraps>
        </div>

        <div data-aos="fade-up">
          <PopularCollection></PopularCollection>
        </div>

        <div data-aos="fade-up">
          <TheDisplay></TheDisplay>
        </div>

        <div data-aos="fade-up" className="">
          <TabletImages></TabletImages>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
