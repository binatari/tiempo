import React, { useContext } from 'react'
import bigTablet from "../../../assets/HomePageImg/HowItWorks/BigTablet.png";
import leftTab from "../../../assets/HomePageImg/HowItWorks/leftTab.png";
import rightTab from "../../../assets/HomePageImg/HowItWorks/RightTab.png";
import bottomBg from "../../../assets/HomePageImg/HowItWorks/bottomBgcolor.png";
import EditIconWhite from "../../../assets/HomePageImg/EditIconWhite.png";
import EditIconBlack from "../../../assets/HomePageImg/EditIcon.png";
import { Context } from '../../../Context/MainContext';
import { Link, useNavigate } from 'react-router-dom';

const TabletImages = () => {
  const { isDark } = useContext(Context)
  const navigate = useNavigate()
  const handleToConfigure3 = () => {
    const state = {
      _id: 3,
      model: "New model",
      size: '41',
      watchHeadline: "Datejust 41",
      watchName: "Jubilee, 41 mm, platinum",
      dialPriceData: 2500,
      bezelsPriceData: 2500,
      strapPriceData: 12000,
      bezel: 'model2',
      stripe: 'body1',
      dial: 'baguetteBlack'
    }
    navigate(`/configure`, { state: state });
  };
  return (
    <div className=''>
      <div>
        <p className={`xl:text-[30px] mid-xl:text-[25px] lg:text-[21px] md:text-[17px] mid-sm:text-[16px] text-[13px] text-center w-1/2 mx-auto xl:pt-28 ${isDark ? 'text-white' : 'text-black'}`}>Tiempo empowers customers to customize their own ingenieur chronograph, allowing for a more personalized and intelligent experience.</p>
      </div>
      <div className='flex justify-center'>
        <img className="" src={bigTablet} alt="" />
      </div>

      <div className="flex justify-center md:mb-5">
        <img className="md:ml-5 ml-2 xl:w-[360px] mid-xl:w-[320px] lg:w-[245px] md:w-[187px] mid-sm:w-[102px] sm:w-[94px] w-[95px]" src={leftTab} alt="" />
        <img className="md:ml-7 ml-3 xl:w-[360px] mid-xl:w-[320px] lg:w-[245px] md:w-[187px] mid-sm:w-[102px] sm:w-[94px] w-[95px]" src={rightTab} alt="" />
      </div>
      <div className='flex justify-center py-10'>
        {isDark ?
          <Link to={'/configure/0'}
            // onClick={handleToConfigure3} 
            className="border border-gray-300 rounded-full text-[#ffffff] flex items-center gap-4 ml-4 bg-[#151515] drop-shadow-[#7D9EAC] md:px-9 px-7 lg:text-[18px] md:text-[15px] text-[10px] uppercase  py-3 "><span><img className='md:w-[22px] md:h-[22px] w-[16px] h-[16px]' src={EditIconWhite} alt='' /></span>
            Configure
          </Link>
          :
          <Link to={'/configure/0'}
            // onClick={handleToConfigure3} 
            className="border border-gray-300 rounded-full text-[#000000] flex items-center gap-4 ml-4 bg-[#FFFFFF] drop-shadow-[#7D9EAC] md:px-9 px-7 lg:text-[18px] md:text-[15px] text-[10px] uppercase  py-3 "><span><img className='md:w-[22px] md:h-[22px] w-[16px] h-[16px]' src={EditIconBlack} alt='' /></span>
            Configure
          </Link>
        }
      </div>

      <div className='w-full '>
        <img className='w-full' src={bottomBg} alt='bgColor' />
      </div>

    </div>
  )
}

export default TabletImages