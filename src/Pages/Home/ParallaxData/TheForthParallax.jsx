import React, { useContext } from 'react'
import image1 from '../../../assets/HomePageImg/Body/Body-1.png';
import image2 from '../../../assets/HomePageImg/Body/Body-2.png';
import image3 from '../../../assets/HomePageImg/Body/Body-3.png';
import image4 from '../../../assets/HomePageImg/Body/Body-4.png';
import image5 from '../../../assets/HomePageImg/Body/Body-5.png';
import image6 from '../../../assets/HomePageImg/Body/Body-6.png';
import image7 from '../../../assets/HomePageImg/Body/Body-7.png';
import image8 from '../../../assets/HomePageImg/Body/Body-8.png';
import image9 from '../../../assets/HomePageImg/Body/Body-9.png';
import image10 from '../../../assets/HomePageImg/Body/Body-10.png';
import image11 from '../../../assets/HomePageImg/Body/Body-11.png';
import image12 from '../../../assets/HomePageImg/Body/Body-12.png';
import RightArrow from '../../../assets/HomePageImg/RightArrow.svg'
import LeftArrow from '../../../assets/HomePageImg/LeftArrow.svg'
import { Context } from '../../../Context/MainContext';
const TheForthParallax = () => {
    const [showFirstSlider, setShowFirstSlider] = React.useState(true);

    const toggleSlider = () => {
        setShowFirstSlider(!showFirstSlider);
    };

    const sliderImages1 = [image1, image2, image3, image4, image5, image6];
    const sliderImages2 = [image7, image8, image9, image10, image11, image12];

    const activeSliderImages = showFirstSlider ? sliderImages1 : sliderImages2;

    const { isDark } = useContext(Context)

    return (
        <div className={`relative lg:w-full w-3/5 mx-auto lg:text-start text-center ${isDark ? 'bg-[#000000]' : 'parallax-bg w-screen h-screen'}`}>
            <h1 className={`uppercase font-bold text-[25px] mx-auto lg:w-10/12 py-9  ${isDark ? 'text-white' : 'text-[#474A59]'}`}>The Bodys</h1>

            <div className="grid grid-cols-3 mid-sm:gap-14 gap-10 mx-auto lg:w-10/12">
                {activeSliderImages?.map((image, index) => (
                    <div
                        key={index}
                        className="mid-xl:w-32 mid-xl:h-56 lg:w-28 lg:h-48 mid-sm:w-24 mid-sm:h-40 w-20 h-32"
                        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
                    />
                ))}
            </div>
            <div className="flex items-center justify-center gap-3 mt-7">
                <button
                    onClick={toggleSlider}
                    className={`text-2xl border-2 border-violet-300 rounded-full p-3 focus:outline-none ${isDark && 'bg-gray-200'} hover:bg-white`}
                >
                    <img src={LeftArrow} alt='' className='w-5 h-5' />
                </button>
                <button
                    onClick={toggleSlider}
                    className={`text-2xl border-2 border-violet-300 rounded-full p-3 focus:outline-none ${isDark && 'bg-gray-200'} hover:bg-white`}
                >
                    <img src={RightArrow} alt='' className='w-5 h-5' />
                </button>
            </div>
        </div>
    );
};

export default TheForthParallax;