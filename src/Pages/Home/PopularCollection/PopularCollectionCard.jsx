/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../Context/MainContext";
import normalBg from '../../../assets/normal-bg.png'
import hoverBg from '../../../assets/white-bg 2.png'
const PopularCollectionCard = ({ popularData, index }) => {
  const { _id, image, model, watchHeadline, watchName,  } = popularData;
  const navigate = useNavigate()
  const [hoveredIndex, setHoveredIndex] = React.useState(-1);
  const handleMouseEnter = () => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const handleViewDetails = () => {
    navigate(`/popular-collection/${_id}`, { state: popularData })
  }

  const { isDark } = useContext(Context)

  return (
    <div
      className={` py-7 px-3 rounded-lg  ${hoveredIndex === index ? 'bg-gradient-to-tr from-[#FDF5F290] via-[#E7E4E970] to-[#DFEEF270]  shadow-sm ' :
        'bg-[#DFEEF280]'}  ${isDark ? 'bg-[#C6C6C610] ' : ' '}`} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="md:flex  justify-center items-center xl:gap-6 mid-xl:gap-1">
        <div className="md:w-1/2 w-full ">
          <img className=" mx-auto md:w-full md:h-full w-7/12 h-10/12" src={image} alt="" />
        </div>

        <div className="md:text-start text-center md:mt-0 mt-4 ">
          {/* <div className="flex md:justify-end justify-center">
            <img src={loveImg} alt="icon"
              className='hover:text-white' />
          </div> */}
          <div className=" ">
            <h3 className={`text-[12px] md:mt-3 ${isDark ? 'text-white' : 'text-[#7E827F]'} ${hoveredIndex === index ? '' :
              'text-[#7E827F]'}`}>{model}</h3>
            <h3 className={`lg:text-[22px] text-[18px]  font-bold  ${isDark ? 'text-white' : 'text-[#7E827F]'}`}>
              {watchHeadline}
            </h3>
            <h3 className={`text-[14px] ${isDark ? 'text-white' : 'text-[#7E827F]'} ${hoveredIndex === index ? '' : 'text-[#868686]'}`}>{watchName}</h3>
            <button className="mt-5 bg-[#ffff] hover:bg-gray-200 hover:text-[] hover:border-[#ffff]  px-7 py-1.5 font-semibold uppercase rounded-full border-2 border-slate-200 lg:text-[12px] text-[10px]" onClick={handleViewDetails}>
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCollectionCard;
