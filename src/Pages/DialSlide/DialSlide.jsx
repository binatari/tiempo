import React, { useContext, useEffect, useRef, useState } from 'react'
import DialBg from '../../assets/HomePageImg/Dials/DialBg.png';
import image1 from '../../assets/HomePageImg/Dials/Dial-1.png';
import image2 from '../../assets/HomePageImg/Dials/Dial-2.png';
import image3 from '../../assets/HomePageImg/Dials/Dial-3.png';
import image4 from '../../assets/HomePageImg/Dials/Dial-4.png';
import image5 from '../../assets/HomePageImg/Dials/Dial-5.png';
import image6 from '../../assets/HomePageImg/Dials/Dial-6.png';
import image7 from '../../assets/HomePageImg/Dials/Dial-7.png';
import image8 from '../../assets/HomePageImg/Dials/Dial-8.png';
import image9 from '../../assets/HomePageImg/Dials/Dial-9.png';
import image10 from '../../assets/HomePageImg/Dials/Dial-10.png';
import image11 from '../../assets/HomePageImg/Dials/Dial-11.png';
import image12 from '../../assets/HomePageImg/Dials/Dial-12.png';
import image13 from '../../assets/HomePageImg/Dials/Dial-13.png';
import image14 from '../../assets/HomePageImg/Dials/Dial-14.png';
import image15 from '../../assets/HomePageImg/Dials/Dial-15.png';
import image16 from '../../assets/HomePageImg/Dials/Dial-16.png';
import image17 from '../../assets/HomePageImg/Dials/Dial-17.png';
import image18 from '../../assets/HomePageImg/Dials/Dial-18.png';
import RightArrow from '../../assets/HomePageImg/Dials/RighArrowIcon.svg';
import LeftArrow from '../../assets/HomePageImg/Dials/LeftArrowIcon.svg';
import { Context } from '../../Context/MainContext';

const DialSlide = () => {
  const [showFirstSlider, setShowFirstSlider] = useState(true);

  const toggleSlider = () => {
    setShowFirstSlider(!showFirstSlider);
  };

  const sliderImages1 = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
  const sliderImages2 = [image10, image11, image12, image13, image14, image15, image16, image17, image18];

  const activeSliderImages = showFirstSlider ? sliderImages1 : sliderImages2;
  const { isDark } = useContext(Context)



  

  return (
    <>
      {
        isDark ?
          <div

         
           className={`bg-cover w-screen h-screen lg:gap-48 gap-10 grid lg:grid-cols-2 grid-cols-1 justify-between  items-center ${isDark && 'bg-[#272c35]'}`}
          
          >
           

            <div className="relative lg:w-10/12 w-3/5 mx-auto">
              <h1 className='uppercase  lg:text-start text-center font-bold text-[25px] text-white py-9'>The dials</h1>
              <div className="grid grid-cols-3 gap-5">
                {activeSliderImages.map((image, index) => (
                  <div
                    key={index}
                    className="mid-xl:w-32 mid-xl:h-32 md:w-28 lg:w-20 lg:h-20 md:h-28 mid-sm:w-28 mid-sm:h-28 sm:w-24 sm:h-24 w-14 h-14"
                    style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
                  />
                ))}
              </div>
              <div className="flex items-center justify-center gap-3 mt-7">
                <button
                  onClick={toggleSlider}
                  className="text-2xl text-gray-500 focus:outline-none"
                >
                  <img className='xl:w-[55px] xl:h-[55px] lg:w-[45px] lg:h-[45px] w-[40px] h-[40px]' src={LeftArrow} alt='' />
                </button>
                <button
                  onClick={toggleSlider}
                  className="text-2xl text-gray-500 focus:outline-none"
                >
                  <img className='xl:w-[55px] xl:h-[55px] lg:w-[45px] lg:h-[45px] w-[40px] h-[40px]' src={RightArrow} alt='' />
                </button>
              </div>
            </div>
          </div>
          :
          <div

        
          className="bg-cover w-screen h-screen lg:gap-48 gap-10 grid lg:grid-cols-2 grid-cols-1 justify-between  items-center"
           

         
          >


            <div className="relative lg:w-10/12 w-3/5 mx-auto">
              <h1 className='uppercase  lg:text-start text-center font-bold text-[25px] text-[#474A59] py-9'>The dials</h1>
              <div className="grid grid-cols-3 gap-5">
                {activeSliderImages.map((image, index) => (
                  <div
                    key={index}
                    className="mid-xl:w-32 mid-xl:h-32 md:w-28 lg:w-20 lg:h-20 md:h-28 mid-sm:w-28 mid-sm:h-28 sm:w-24 sm:h-24 w-14 h-14"
                    style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
                  />
                ))}
              </div>
              <div className="flex items-center justify-center gap-3 mt-7">
                <button
                  onClick={toggleSlider}
                  className="text-2xl text-gray-500 focus:outline-none"
                >
                  <img className='xl:w-[55px] xl:h-[55px] lg:w-[45px] lg:h-[45px] w-[40px] h-[40px]' src={LeftArrow} alt='' />
                </button>
                <button
                  onClick={toggleSlider}
                  className="text-2xl text-gray-500 focus:outline-none"
                >
                  <img className='xl:w-[55px] xl:h-[55px] lg:w-[45px] lg:h-[45px] w-[40px] h-[40px]' src={RightArrow} alt='' />
                </button>
              </div>
            </div>
          </div>
      }
    </>

  )
}

export default DialSlide