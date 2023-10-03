import React, { useContext, useEffect, useRef, useState } from 'react';
import BezzleBg from '../../assets/HomePageImg/Bezzel/BezzleBg.png';
import image1 from '../../assets/HomePageImg/Bezzel/Bezzle-1.png';
import image2 from '../../assets/HomePageImg/Bezzel/Bezzle-2.png';
import image3 from '../../assets/HomePageImg/Bezzel/Bezzle-3.png';
import image4 from '../../assets/HomePageImg/Bezzel/Bezzle-4.png';
import image5 from '../../assets/HomePageImg/Bezzel/Bezzle-5.png';
import image6 from '../../assets/HomePageImg/Bezzel/Bezzle-6.png';
import image7 from '../../assets/HomePageImg/Bezzel/Bezzle-7.png';
import image8 from '../../assets/HomePageImg/Bezzel/Bezzle-8.png';
import image9 from '../../assets/HomePageImg/Bezzel/Bezzle-9.png';
import image10 from '../../assets/HomePageImg/Bezzel/Bezzle-10.png';
import image11 from '../../assets/HomePageImg/Bezzel/Bezzle-11.png';
import image12 from '../../assets/HomePageImg/Bezzel/Bezzle-12.png';

import RighArrow from '../../assets/HomePageImg/Bezzel/RighArrowIcon.svg';
import LefArrow from '../../assets/HomePageImg/Bezzel/LeftArrowIcon.svg';
import { Context } from '../../Context/MainContext';




const BezelsSlider = () => {
  const [showFirstSlider, setShowFirstSlider] = useState(true);

  const toggleSlider = () => {
    setShowFirstSlider(!showFirstSlider);
  };

  const sliderImages1 = [image1, image2, image3, image4, image5, image6];
  const sliderImages2 = [image7, image8, image9, image10, image11, image12];

  const activeSliderImages = showFirstSlider ? sliderImages1 : sliderImages2;
  const { isDark } = useContext(Context)

  const [rotateValue, setRotateValue] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    // Set an initial rotation value to create a smooth start
    setRotateValue(360);

    // Add a timeout to smoothly transition to the initial value
    const initialRotationTimeout = setTimeout(() => {
      setRotateValue(0);
    }, 500); // Adjust the duration as needed

    return () => clearTimeout(initialRotationTimeout);
  }, []);

  const handleScroll = (event) => {
    // Adjust the rotation speed by changing the divisor (e.g., 5)
    const rotationSpeed = 5;
    const rotation = (event.deltaY / rotationSpeed + rotateValue) % 360;
    setRotateValue(rotation);
  };




  return (
    <>
      {
        isDark ?


          <div 
           className={`h-screen w-screen bg-cover lg:gap-48 gap-10 grid lg:grid-cols-2 grid-cols-1 justify-between  items-center ${isDark && 'bg-[#272c35]'}`}
         >


            <div className="relative lg:w-10/12 w-3/5 mx-auto lg:text-start text-center">
              <h1 className='uppercase font-bold text-[25px] text-white'>the bezels</h1>
              <p className='py-5 text-[16px] text-white'>Keep it classic with the sweeping dome bezel or add the fire and brilliance of a diamond packed bezel. Even Better, Coordinate with a ring of the most vivid sapphire stones.</p>
              <div className="grid grid-cols-3 gap-5">
                {activeSliderImages?.map((image, index) => (
                  <div
                    key={index}
                    className="mid-xl:w-32 mid-xl:h-32 mid-sm:w-28 mid-sm:h-28 sm:w-20 sm:h-20 lg:w-20 lg:h-20"
                    style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          :
          <div ref={containerRef}
            onWheel={handleScroll} className={` h-screen w-screen bg-cover lg:gap-48 gap-10 grid lg:grid-cols-2 grid-cols-1 justify-between  items-center ${isDark && 'bg-[#000000]'}`}
            style={{
              backgroundImage: `url(${BezzleBg})`,
              overflow: 'hidden'
            }}
          >

            <div
              className="w-1/2 transform origin-center ml-auto mr-24"
              style={{
                transform: `rotate(${rotateValue}deg)`,
                transition: 'transform 0.7s ease-in-out', // Adjust the duration as needed
              }}
            >
              <img
                src={image6}
                alt="Rotating Image"
                className="w-full h-auto "
              />
            </div>


            <div className="relative lg:w-10/12 w-3/5 mx-auto lg:text-start text-center">
              <h1 className='uppercase font-bold text-[25px] text-[#474A59]'>the bezels</h1>
              <p className='py-5 text-[16px] text-[#474A59]'>Keep it classic with the sweeping dome bezel or add the fire and brilliance of a diamond packed bezel. Even Better, Coordinate with a ring of the most vivid sapphire stones.</p>
              <div className="grid grid-cols-3 gap-5">
                {activeSliderImages.map((image, index) => (
                  <div
                    key={index}
                    className="mid-xl:w-32 mid-xl:h-32 mid-sm:w-28 mid-sm:h-28 sm:w-20 sm:h-20 lg:w-20 lg:h-20"
                    style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
                  />
                ))}
              </div>

              {/* <div className="flex items-center justify-center gap-3 mt-7">
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
              </div> */}

            </div>
          </div>
      }
    </>
  );
};

export default BezelsSlider;