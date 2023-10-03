import React, { useContext, useEffect, useRef, useState } from 'react'
import { Context } from '../../Context/MainContext'
import ThewatchBgImage from '../../assets/HomePageImg/TheWatchBgImage.png';
import WatchImg from '../../assets/HomePageImg/CustomizeWatch/TheWatch.png';
import customizeWatch1 from '../../assets/HomePageImg/CustomizeWatch/customizeWatch-1.png';
import customizeWatch2 from '../../assets/HomePageImg/CustomizeWatch/customizeWatch-2.png';
import customizeWatch3 from '../../assets/HomePageImg/CustomizeWatch/customizeWatch-3.png';




import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import BezelsSlider from '../BezelsSlide/BezelsSlider';
import DialSlide from '../DialSlide/DialSlide';
import BodySlide from '../BodySlide/BodySlide';


const TheWatchSection = () => {
    const { isDark } = useContext(Context)

    // const [rotateValue, setRotateValue] = useState(0);

    // useEffect(() => {
    //   const handleScroll = (event) => {
    //     // Adjust the rotation speed by changing the divisor (e.g., 10)
    //     const rotationSpeed = 10;
    //     const rotation = (event.deltaY / rotationSpeed + rotateValue) % 360;
    //     setRotateValue(rotation);
    //   };

    //   window.addEventListener('wheel', handleScroll);
    //   return () => {
    //     window.removeEventListener('wheel', handleScroll);
    //   };
    // }, [rotateValue]);





    return (

        <div

            className={`h-screen hide-scrollbar grid lg:grid-cols-2 grid-cols-1 mt-20  lg:w-screen bg-cover ${isDark && 'bg-[#000000]'}`} style={{
                backgroundImage: `url(${ThewatchBgImage})`,

            }}>

            <Parallax className='hide-scrollbar' pages={3}>
                <ParallaxLayer speed={0.5}>
                    <div className={`w-1/2 h-screen hide-scrollbar text-center lg:py-14 py-8 hidden lg:block z-10  ${isDark && 'bg-[#000000]'}`}>
                        <div className={`${isDark ? 'border-gray-600' : 'border-gray-300'} `}>
                            <h1 className={` lg:text-[40px] text-[32px]  font-bold ${isDark ? 'text-white' : 'text-[#474A59]'} `}>The watch</h1>
                            <p className={`lg:text-[16px] text-[14px] ${isDark ? 'text-white' : 'text-black'}`}>A timeless piece, respected<br /> globally, serves as the perfect canvas.<br />
                                Rolex Datejust 41 and 36</p>

                            {/* <div
                                 className="w-1/2 transform origin-center"
                                 style={{
                                 transform: `rotateY(${rotateValue}deg)`, // Rotate along the Y-axis (left to right)
                                 transition: 'transform 0.3s ease-in-out',
                                 }}
                                >
                              <img
                                src={WatchImg}
                                alt="Rotating Image"
                                className="pt-5 mid-xl:w-[400px] mid-xl:h-[420px] xxxl:w-[440px] xxxl:h-[470px] lg:w-[270px] lg:h-[290px] w-[200px] h-[200px] mx-auto"
                                />
                              </div> */}

                            <img
                                src={WatchImg}
                                alt="Rotating Image"
                                className="pt-5 mid-xl:w-[400px] mid-xl:h-[420px] xxxl:w-[440px] xxxl:h-[470px] lg:w-[270px] lg:h-[290px] w-[200px] h-[200px] mx-auto"
                            />


                        </div>
                    </div>
                </ParallaxLayer>





                <ParallaxLayer speed={0.5}>
                    <div className={`h-screen hide-scrollbar w-1/2  lg:ml-auto lg:text-justify lg:flex hidden flex-col  items-center py-14 ${isDark ? 'bg-[#000000] h-screen' : 'parallax-bg '} `}>
                        <h1 className={`text-[25px] font-bold ${isDark ? 'text-white' : 'text-black'}`}>Customize your watch</h1>
                        <p className={`w-full lg:w-3/5 py-5 lg:px-0 px-7 ${isDark ? 'text-white' : 'text-black'}`}>Fashion your treasured timepiece to your exact preferences, forging a watch that mirrors your individuality. Craft every facet to embody your style and essence, creating a truly personalized masterpiece.</p>
                        <div className='flex gap-4 md:gap-8  mid-xl:py-14 py-6 px-5'>
                            <img src={customizeWatch1} alt='watch image' className='w-28 sm:w-36 h-44 sm:h-44 md:w-36 md:h-60 lg:w-24 lg:h-36 mid-xl:w-36 mid-xl:h-56 xl:w-40 xl:h-64' />
                            <img src={customizeWatch2} alt='watch image' className='w-32 sm:w-36 h-44 sm:h-44 md:w-36 md:h-60 lg:w-24 lg:h-36 mid-xl:w-36 mid-xl:h-56 xl:w-40 xl:h-64' />
                            <img src={customizeWatch3} alt='watch image' className='w-32 sm:w-36 h-44 sm:h-44 md:w-36 md:h-60 lg:w-24 lg:h-36 mid-xl:w-36 mid-xl:h-56 xl:w-40 xl:h-64' />
                        </div>
                    </div>
                </ParallaxLayer>


                <ParallaxLayer speed={0.5}>
                    <div className={`lg:h-screen hide-scrollbar h-[60vh] w-4/5 mx-auto lg:text-justify flex lg:hidden flex-col justify-center items-center py-14 ${isDark ? 'bg-[#000000]' : 'parallax-bg '} `}>
                        <h1 className={`text-[25px] ${isDark ? 'text-white' : 'text-black'}`}>Customize your watch</h1>
                        <p className={`w-full lg:w-3/5 py-5 lg:px-0 px-7 ${isDark ? 'text-white' : 'text-black'}`}>Fashion your treasured timepiece to your exact preferences, forging a watch that mirrors your individuality. Craft every facet to embody your style and essence, creating a truly personalized masterpiece.</p>
                        <div className='flex gap-4 md:gap-8  mid-xl:py-14 py-6 px-5'>
                            <img src={customizeWatch1} alt='watch image' className='w-28 sm:w-36 h-44 sm:h-44 md:w-36 md:h-60 lg:h-60 xl:w-44 xl:h-72' />
                            <img src={customizeWatch2} alt='watch image' className='w-32 sm:w-36 h-44 sm:h-44 md:w-36 md:h-60 lg:h-60 xl:w-44 xl:h-72' />
                            <img src={customizeWatch3} alt='watch image' className='w-32 sm:w-36 h-44 sm:h-44 md:w-36 md:h-60 lg:h-60 xl:w-44 xl:h-72' />
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer speed={0.5} className='mt-[100vh] hide-scrollbar '>
                    <BezelsSlider></BezelsSlider>
                </ParallaxLayer>
                <ParallaxLayer speed={0.5} className='mt-[200vh]  hide-scrollbar'>
                    <DialSlide></DialSlide>
                </ParallaxLayer>
                <ParallaxLayer speed={0.5} className='mt-[300vh] hide-scrollbar'>
                    <BodySlide></BodySlide>
                </ParallaxLayer>
            </Parallax>

        </div>

    )
}

export default TheWatchSection