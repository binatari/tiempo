/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import EditIcon from "../../../assets/HomePageImg/EditIcon.png";
// import model2 from "../../../assets/HomePageImg/Bezzel/Bezzle-2.png";
import model2 from '../../../assets/bezzels/White.png'
import model3 from "../../../assets/bezzels/01.png";
import model6 from "../../../assets/bezzels/Dark-Blue-B.png";
import model5 from "../../../assets/bezzels/green.png";
import body1 from "../../../assets/BODY/Body default.png";
import body2 from "../../../assets/BODY/Body.png";
import body3 from "../../../assets/HomePageImg/Body/Body-3.png";
import body10 from "../../../assets/HomePageImg/Body/Body-10.png";
import body8 from "../../../assets/HomePageImg/Body/Body-8.png";
// import romanGray from "../../../assets/HomePageImg/Dials/Dial-5.png"; 
import romanGray from "../../../assets/1K Renders rolex watch/Double Diamond rolex watch/Dial/Grey.png";
import romanWhite from "../../../assets/HomePageImg/Dials/Dial-19.png";
// import romanAqua from "../../../assets/HomePageImg/Dials/Dial-16.png";
import romanAqua from "../../../assets/1K Renders rolex watch/Double Diamond rolex watch/Dial/Blue.png";
import brushGrey from "../../../assets/HomePageImg/Dials/brushGray.svg";
import brushBlack from "../../../assets/HomePageImg/Dials/brushBlack.svg";
import brushAqua from "../../../assets/HomePageImg/Dials/brushAqua.svg";
import { Context } from "../../../Context/MainContext";
import romanLavender from '../../../assets/HomePageImg/Dials/Dial-6.png'
import romanGreen from '../../../assets/HomePageImg/Dials/Dial-14.png'
// import romanPurple from '../../../assets/HomePageImg/Dials/Dial-15.png'
import romanPurple from "../../../assets/1K Renders rolex watch/Double Diamond rolex watch/Dial/Purple.png";
// import brushWhite from '../../../assets/DIALS/2nd type/Greenbagrolex_2-1.svg'
import brushWhite from '../../../assets/1K Renders rolex watch/Rolex rubberband watch/Dial/White.png'
// import brushGreen from '../../../assets/DIALS/2nd type/Greenbagrolex_2-7.svg'
import brushGreen from '../../../assets/1K Renders rolex watch/Rolex rubberband watch/Dial/Green.png'
// import baguetteRed from '../../../assets/DIALS/1st type/Greenbagrolex_2-2.svg'
import baguetteRed from "../../../assets/1K Renders rolex watch/Baguette watch/Dial/Red.png";
import baguetteWhite from "../../../assets/1K Renders rolex watch/Baguette watch/Dial/White.png";
// import baguetteWhite from '../../../assets/DIALS/1st type/Greenbagrolex_2-1.svg'
import { useSliderContext } from "../../../Context/Slider_context";

const PopularCollectionDetails = () => {

  const { state } = useLocation();
  const { _id, bezel, stripe, dial, image, watchHeadline, watchName, body } =
    state;
  const navigate = useNavigate();
  const handleToConfigure = () => {
    navigate(`/configure`, { state: state });
  };


  const handleGoBack = () => {
    // Go back to the previous location
    navigate('../');
  };

  const { setClick } = useSliderContext()

  const { isDark } = useContext(Context)
  return (
    <div className={`h-screen w-[100vw]  ${isDark ? 'bg-[#000000]' : 'bg-white'}`}>
      <div className="grid grid-cols-2 md:grid-cols-3 md:gap-5 gap-4  w-full lg:px-14 h-screen">
        <div className="flex flex-col justify-center  lg:h-screen ml-5">

          <p className={`text-xs cursor-pointer hover:underline ${isDark ? 'underline-offset-1 text-white' : 'text-black'}`} onClick={handleGoBack}>
            Go Back
          </p>
          <h1 className={`text-2xl md:text-3xl lg:text-5xl font-semibold  mt-5 ${isDark ? 'text-white' : 'text-[#3F3F3F]'}`}>
            {watchHeadline}
          </h1>
          <p className={` text-sm md:text-lg lg:text-[22px] py-3 ${isDark ? 'text-gray-400' : 'text-[#868686]'}`}>
            {watchName}
          </p>
          <div className="flex flex-col items-start justify-center">
            <Link onClick={() => setClick(_id)}
              to={`/configure/${body}`}
              className="flex items-center gap-4 lg:ml-6 mt-3 bg-[#ffff] border border-[gradient_custom]  uppercase  py-3 md:px-7 px-5 rounded-full text-sm md:text-[16px] lg:text-[20px]"
            // onClick={handleToConfigure}
            >
              <span>
                <img className="md:w-6 md:h-6 h-4 w-4" src={EditIcon} alt="" />
              </span>
              Configure
            </Link>

          </div>
        </div>
        <div className="flex items-center justify-center ">
          <img
            src={image}
            alt="watch image"
            className=" mid-xl:h-[370px] mid-xl:w-[365px]  "
          />
        </div>
        <div className="md:flex flex-col justify-center items-center gap-10 hidden">
          <div className="flex  justify-center items-center gap-x-6 ">
            <h1 className={`text-xl font-medium ${isDark ? 'text-white' : 'text-[#3F3F3F]'}`}>Bezel</h1>
            {bezel === "model2" && (
              <img src={model2} alt="" className="ml-4 w-32 h-32" />
            )}
            {bezel === "model3" && (
              <img src={model3} alt="" className="ml-4 w-32 h-32" />
            )}
            {bezel === "model6" && (
              <img src={model6} alt="" className="ml-4 w-32 h-32" />
            )}
            {bezel === "model5" && (
              <img src={model5} alt="" className="ml-4 w-32 h-32" />
            )}
          </div>
          <div className="flex  justify-center items-center gap-x-6 ">
            <h1 className={`text-xl font-medium ${isDark ? 'text-white' : 'text-[#3F3F3F]'}`}>Dial</h1>
            {dial === "romanGray" && (
              <img src={romanGray} alt="" className="ml-4 w-32 h-32" />
            )}
            {dial === "romanAqua" && (
              <img src={romanAqua} alt="" className="ml-4 w-32 h-32" />
            )}
            {dial === "brushWhite" && (
              <img src={brushWhite} alt="" className="ml-4 w-32 h-32" />
            )}
            {dial === "baguetteRed" && (
              <img src={baguetteRed} alt="" className="ml-4 w-32 h-32" />
            )}
            {dial === "baguetteWhite" && (
              <img src={baguetteWhite} alt="" className="ml-4 w-32 h-32" />
            )}
            {dial === "brushGreen" && (
              <img src={brushGreen} alt="" className="ml-4 w-32 h-32" />
            )}
            {dial === "romanPurple" && (
              <img src={romanPurple} alt="" className="ml-4 w-32 h-32" />
            )}
          </div>
          <div className="flex  justify-center items-center gap-x-6 ">
            <h1 className={`text-xl font-medium ${isDark ? 'text-white' : 'text-[#3F3F3F]'}`}>Strap</h1>
            {stripe === "body1" && (
              <img src={body1} alt="" className="w-24 h-32 lg:w-48 lg:h-48" />
            )}
            {stripe === "body2" && (
              <img src={body2} alt="" className="w-24 h-32 lg:w-48 lg:h-48" />
            )}
            {stripe === "body3" && (
              <img src={body3} alt="" className="w-24 h-32 lg:w-28 lg:h-40" />
            )}
            {stripe === "body10" && (
              <img src={body10} alt="" className="w-24 h-32 lg:w-28 lg:h-40" />
            )}
            {stripe === "body8" && (
              <img src={body8} alt="" className="w-24 h-32 lg:w-28 lg:h-40" />
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default PopularCollectionDetails;
