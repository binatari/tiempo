import React, { useContext } from 'react';
import WatchImg from '../../../assets/HomePageImg/CustomizeWatch/TheWatch.png';
import { Context } from '../../../Context/MainContext';

const TheStickyParallax = () => {
    const { isDark } = useContext(Context)

    return (
        <div className='text-center lg:py-14 py-8 hidden lg:block'>
            <div className={`${isDark ? 'border-gray-600' : 'border-gray-300'}  `}>
                <h1 className={` lg:text-[40px] text-[32px]  font-bold ${isDark ? 'text-white' : 'text-[#474A59]'} `}>The watch</h1>
                <p className={`lg:text-[16px] text-[14px] ${isDark ? 'text-white' : 'text-black'}`}>A timeless piece, respected<br /> globally, serves as the perfect canvas.<br />
                    Rolex Datejust 41 and 36</p>
                <img className='pt-5 mid-xl:w-[400px] mid-xl:h-[400px] lg:w-[300px] lg:h-[300px] w-[200px] h-[200px] mx-auto' src={WatchImg} alt='' />
            </div>
        </div>
    );
};

export default TheStickyParallax;