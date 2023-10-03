/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import customizeWatch1 from '../../../assets/HomePageImg/CustomizeWatch/customizeWatch-1.png';
import customizeWatch2 from '../../../assets/HomePageImg/CustomizeWatch/customizeWatch-2.png';
import customizeWatch3 from '../../../assets/HomePageImg/CustomizeWatch/customizeWatch-3.png';
import { Context } from '../../../Context/MainContext';
const TheFirstParallaxContent = () => {
    const { isDark } = useContext(Context)
    return (
        <div className={`lg:text-justify flex flex-col justify-center items-center text-center py-14 ${isDark ? 'bg-[#000000]' : 'parallax-bg h-screen'} `}>
            <h1 className={`text-[25px] ${isDark ? 'text-white' : 'text-black'}`}>Customize your watch</h1>
            <p className={`w-full lg:w-3/5 py-5 lg:px-0 px-7 ${isDark ? 'text-white' : 'text-black'}`}>Fashion your treasured timepiece to your exact preferences, forging a watch that mirrors your individuality. Craft every facet to embody your style and essence, creating a truly personalized masterpiece.</p>
            <div className='flex gap-4 md:gap-8  mid-xl:py-14 py-6 px-5'>
                <img src={customizeWatch1} alt='watch image' className='w-28 sm:w-36 h-44 sm:h-44 md:w-36 md:h-60 lg:h-60 xl:w-44 xl:h-72' />
                <img src={customizeWatch2} alt='watch image' className='w-32 sm:w-36 h-44 sm:h-44 md:w-36 md:h-60 lg:h-60 xl:w-44 xl:h-72' />
                <img src={customizeWatch3} alt='watch image' className='w-32 sm:w-36 h-44 sm:h-44 md:w-36 md:h-60 lg:h-60 xl:w-44 xl:h-72' />
            </div>
        </div>
    );
};

export default TheFirstParallaxContent;