import React, { useContext } from 'react';
import bezelGroup from '../../../../assets/bezel-group.png'
import { Context } from '../../../../Context/MainContext';
import Bimage1 from "../../../../assets/HomePageImg/Bezzel/Nbezzle-1.png";
import Bimage2 from "../../../../assets/HomePageImg/Bezzel/Nbezzle-2.png";
import Bimage3 from "../../../../assets/HomePageImg/Bezzel/Nbezzle-3.png";
import Bimage4 from "../../../../assets/HomePageImg/Bezzel/Nbezzle-4.png";
import Bimage5 from "../../../../assets/HomePageImg/Bezzel/Nbezzle-5.png";
import Bimage6 from "../../../../assets/HomePageImg/Bezzel/Nbezzle-6.png";
const TheNewBezels = () => {
    const { isDark } = useContext(Context)
    const BezzlesliderImages = [
        Bimage1,
        Bimage2,
        Bimage3,
        Bimage4,
        Bimage5,
        Bimage6,
    ];
    return (
        <div className=' w-10/12 lg:w-3/4 mid-xl:w-8/12 mx-auto xl:mt-40 '>
            <div className='py-10'>
                <h1 className={`text-center mid-xl:text-[30px] lg:text-[27px] md:text-[24px] text-[21px] uppercase ${isDark ? 'text-white' : 'text-black '}`}>The Bezels</h1>
                <div className='h-[3px] border-b border-[#bdbdbd]  w-[100px] mx-auto pt-2'>
                </div>

            </div>
            <div className='grid lg:grid-cols-2 justify-center items-center gap-10'>
                <div className=''>
                    <h1 className={`md:text-[20px] text-[18px]  uppercase ${isDark ? 'text-white' : 'text-black'}`}>
                        Bezels
                    </h1>
                    <p
                        className={`${isDark ? 'text-[#8C8C8C] md:text-[17px] lg:text-[19px] text-[14px] text-justify' : 'text-[#474A59]'} leading-[23.7px] md:text-[17px] lg:text-[19px] text-[14px] pt-4 text-justify`}>
                        Keep it classic with the sweeping dome bezel or add the fire  and brilliance of a diamond packed bezel. Even Better, coordinate with a ring of the most vivid sapphire stones.
                    </p>
                </div>
                <div className=' grid grid-cols-3 gap-5'>
                    {
                        BezzlesliderImages?.map((image, index) => {
                            return (
                                <img key={index} src={image} alt="bezels" className='w-10/12 mx-auto' />
                            )
                        })
                    }
                   
                    {/* <img src={bezelGroup} alt="" className='w-full mx-auto' /> */}
                </div>
            </div>
        </div>
    );
};

export default TheNewBezels;