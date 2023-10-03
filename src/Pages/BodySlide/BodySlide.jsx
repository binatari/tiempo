import React, { useContext, useRef, useState } from 'react'
import BodyBg from '../../assets/HomePageImg/Body/BodyBg.png';
import image1 from '../../assets/HomePageImg/Body/Body-1.png';
import image2 from '../../assets/HomePageImg/Body/Body-2.png';
import image3 from '../../assets/HomePageImg/Body/Body-3.png';
import image4 from '../../assets/HomePageImg/Body/Body-4.png';
import image5 from '../../assets/HomePageImg/Body/Body-5.png';
import image6 from '../../assets/HomePageImg/Body/Body-6.png';
import image7 from '../../assets/HomePageImg/Body/Body-7.png';
import image8 from '../../assets/HomePageImg/Body/Body-8.png';
import image9 from '../../assets/HomePageImg/Body/Body-9.png';
import image10 from '../../assets/HomePageImg/Body/Body-10.png';
import image11 from '../../assets/HomePageImg/Body/Body-11.png';
import image12 from '../../assets/HomePageImg/Body/Body-12.png';
import RighArrow from '../../assets/HomePageImg/Body/RighArrowIcon.svg';
import LefArrow from '../../assets/HomePageImg/Body/LeftArrowIcon.svg';
import { Context } from '../../Context/MainContext';





const BodySlide = () => {
  const [showFirstSlider, setShowFirstSlider] = useState(true);

  const toggleSlider = () => {
    setShowFirstSlider(!showFirstSlider);
  };

  const sliderImages1 = [image1, image2, image3, image4, image5, image6];
  const sliderImages2 = [image7, image8, image9, image10, image11, image12];

  const activeSliderImages = showFirstSlider ? sliderImages1 : sliderImages2;
  const { isDark } = useContext(Context)





  return (
    <>
      {
        isDark ?

          <div className={`w-screen bg-cover h-screen lg:gap-48 gap-10  grid lg:grid-cols-2 grid-cols-1 justify-between items-center ${isDark && 'bg-[#272c35]'}`}
          >

            <div className="relative lg:w-10/12 w-3/5 mx-auto lg:text-start text-center mt-7">
              <h1 className='uppercase font-bold text-[25px] text-white py-10'>The Bodys</h1>

              <div className="grid grid-cols-3 mid-sm:gap-14 gap-10">
                {activeSliderImages.map((image, index) => (
                  <div
                    key={index}
                    className="mid-xl:w-32 mid-xl:h-52 mid-sm:w-24 mid-sm:h-40 lg:w-20 lg:h-32 w-20 h-32"
                    style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
                  />
                ))}
              </div>
              
            </div>
          </div>

          :
          <div className=" w-screen bg-cover h-screen lg:gap-48 gap-10  grid lg:grid-cols-2 grid-cols-1 justify-between items-center"
            style={{
              backgroundImage: `url(${BodyBg})`,
            }}
          >
          
          
          <div
           className="w-3/4 mx-auto "
        >
          <img
            src={image6}
            alt="Rotating Image"
            className="w-1/2 h-auto "
          />
        </div>


            <div className="relative lg:w-10/12 w-3/5 mx-auto lg:text-start text-center mt-7">
              <h1 className='uppercase font-bold text-[25px] text-[#474A59] py-10'>The Bodys</h1>

              <div className="grid grid-cols-3 mid-sm:gap-14 gap-10">
                {activeSliderImages.map((image, index) => (
                  <div
                    key={index}
                    className="mid-xl:w-32 mid-xl:h-52 mid-sm:w-24 mid-sm:h-40 lg:w-20 lg:h-32 w-20 h-32"
                    style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
                  />
                ))}
              </div>
              <div className="flex items-center justify-center gap-3 mt-7">
                <button
                  onClick={toggleSlider}
                  className="text-2xl text-gray-500 focus:outline-none"
                >
                  <img className='xl:w-[55px] xl:h-[55px] lg:w-[45px] lg:h-[45px] w-[40px] h-[40px]' src={LefArrow} alt='' />
                </button>
                <button
                  onClick={toggleSlider}
                  className="text-2xl text-gray-500 focus:outline-none"
                >
                  <img className='xl:w-[55px] xl:h-[55px] lg:w-[45px] lg:h-[45px] w-[40px] h-[40px]' src={RighArrow} alt='' />
                </button>
              </div>
            </div>
          </div>
      }
    </>

  )
}

export default BodySlide