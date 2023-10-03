import React, { useContext, useState } from 'react'

import configureWatch1_41 from '../../../assets/HomePageImg/ConfigureWatch/configureWatch1-41mm.png';
import configureWatch1_36 from '../../../assets/HomePageImg/ConfigureWatch/configureWatch1-36mm.png';
import DoubleArrow from '../../../assets/HomePageImg/ConfigureWatch/DoubleArrow.svg';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../Context/MainContext';



const ConfigureDrawer_1 = () => {
  const [swapContent, setSwapContent] = useState(false);

  const handleArrowClick = () => {
    setSwapContent(!swapContent);
  };

  const navigate = useNavigate()
  const handleImagesData = () => {
    const data = {
      dial: 'romanAqua',
      bezel: 'model2',
      stripe: 'body2'
    }
    navigate('/configure', { state: data })
  }
  const { isDark } = useContext(Context)
  return (

    <div className={`h-screen px-20 grid lg:grid-cols-4 grid-cols-1 ${isDark && 'bg-black'}`}  >


      <div className="col-span-1 lg:col-span-2 mx-auto lg:my-auto mt-14 xxxl:mt-24">
        <div className="relative">
          <h2 className="left-4 mid-xl:ml-[40px]  xl:ml-[26px] text-gray-500 text-center lg:text-[30px] md:text-[25px] text-[15px] mt-5 bg-opacity-50 ">
            {swapContent ? '36 MM' : '41 MM'}
          </h2>
          <h1 className='font-bold uppercase absolute left-0 text-gray-500 w-full mid-xl:text-[68px] lg:text-[55px] md:text-[35px] text-[20px] text-center  z-0'>Datejust {swapContent ? '36' : '41'}</h1>
          <div className='relative mid-xl:mt-8 lg:mt-5 xxxl:ml-0 xl:ml-10'>
            <img src={configureWatch1_41} alt="Left" className="mid-xl:w-[228px] mid-xl:h-[378px] lg:w-[225px] lg:h-[260px] mt-24  md:w-[170px] md:h-[200px] h-[150px] xxxl:ml-14 xl:ml-[26px] lg:ml-[20px] mid-xl:ml-[48px] relative z-10 " />
          </div>
        </div>
        <div className='w-full text-center xxxl:mt-14 xl:ml-5 md:mt-14 mt-7'>
          <button className='lg:text-[18px] md:text-[14px] text-[12px] uppercase  bg-gray-200   lg:px-7  px-5 py-2 rounded-full  xl:ml-0 lg:ml-[20px] mid-xl:ml-[47px] text-black border border-[#C7C7C7]' onClick={handleImagesData}>Start</button>
        </div>

      </div>

      <div className="col-span-1 flex justify-center items-center">
        <button onClick={handleArrowClick}>
          <img className='lg:w-24 lg:h-24 md:w-20 md:h-20 w-14 h-14 mid-xl:mt-0 lg:mt-3' src={DoubleArrow} alt='' />
        </button>
      </div>

      <div className="col-span-1  mx-auto my-auto">
        <div className="relative">
          <img src={configureWatch1_36} alt="watchImg" className="xl:w-[162px] xl:h-[266px] lg:w-[120px] lg:h-[240px] lg:mt-20  md:w-32 md:h-40 w-24 h-32 md:ml-5 ml-5" />
          <h2 className="lg:text-[18px] text-[14px] top-4 uppercase left-4 text-center text-gray-500 bg-opacity-50 p-2">
            {swapContent ? 'Datejust, 41 MM' : 'Datejust, 36 mm'}
          </h2>
        </div>
      </div>


    </div>
  )
}

export default ConfigureDrawer_1