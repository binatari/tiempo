import React, { useContext, useState } from 'react'
import backgroundImage2 from '../../../assets/HomePageImg/ConfigureWatch/configureWatchBg-2.png';
import configureWatch2_41 from '../../../assets/HomePageImg/ConfigureWatch/configureWatch2-41mm.png';
import configureWatch2_36 from '../../../assets/HomePageImg/ConfigureWatch/configureWatch2-36mm.png';
import DoubleArrow from '../../../assets/HomePageImg/ConfigureWatch/DoubleArrow.svg';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../Context/MainContext';


const ConfigureDrawer_2 = () => {
  const [swapContent, setSwapContent] = useState(false);

  const handleArrowClick = () => {
    setSwapContent(!swapContent);
  };

  const navigate = useNavigate()
  const handleImagesData = () => {
    const data = {
      dial: 'brushGreen',
      bezel: 'model5',
      stripe: 'body4'
    }
    navigate('/configure', { state: data })
  }
  const { isDark } = useContext(Context)

  return (
    <div className={`h-screen px-20 grid lg:grid-cols-4 grid-cols-1   ${isDark ? 'bg-[#000000]' : ''}`}  >

      <div className="col-span-1 lg:col-span-2 mx-auto lg:my-auto mt-14">
        <div className="relative">
          <h2 className="left-4 text-center text-white lg:text-[30px] md:text-[25px] text-[15px] mt-5 bg-opacity-50 ">
            {swapContent ? '36 MM' : '41 MM'}
          </h2>
          <h1 className='font-bold uppercase absolute left-0 text-[#ffff] w-full mid-xl:text-[65px] lg:text-[55px] md:text-[35px] text-[20px] text-center '>Datejust 41</h1>
          <div className=' '>
            <img src={configureWatch2_41} alt="Left" className="py-[63px] md:w-[340px] md:h-[465px] w-[230px] h-[320px] relative" />
          </div>
        </div>
        <div className='w-full text-center md:py-14 py-3'>
          <button className='lg:text-[18px] text-[14px] uppercase  bg-gray-200  hover:bg-white hover:text-black lg:px-7 lg:py-3 px-5 py-2 rounded-full text-black border border-[#C7C7C7]' onClick={handleImagesData}>Start</button>
        </div>

      </div>

      <div className="col-span-1 flex justify-center items-center">
        <button onClick={handleArrowClick}>
          <img className='lg:w-24 lg:h-24 w-20 h-20 mid-xl:mt-0 lg:mt-3' src={DoubleArrow} alt='' />
        </button>
      </div>

      <div className="col-span-1  mx-auto my-auto">
        <div className="relative">
          <img src={configureWatch2_36} alt="watchImg" className="lg:w-[162px] lg:h-[268px] lg:mt-14  md:w-48 h-48" />
          <h2 className="lg:text-[18px] text-[14px] top-4 uppercase left-4 text-center text-white bg-opacity-50 p-2">
            {swapContent ? 'Datejust, 41 MM' : 'Datejust, 36 mm'}
          </h2>
        </div>
      </div>


    </div>
  )
}

export default ConfigureDrawer_2