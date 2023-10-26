/* eslint-disable no-unused-vars */
/ eslint-disable no-unused-vars /
import React, { useContext } from 'react';
import logoWhite from '../../assets/HomePageImg/TiempoBanarLogo.svg'
import logoBlack from '../../assets/HomePageImg/TiempoLogoBlack.svg'
import logo from '../../assets/TiempoWhiteLogo.png'
import { Context } from '../../Context/MainContext';

const Footer = () => {
    const { isDark } = useContext(Context)
    return (

        <div className={`md:h-[250px] overflow-hidden lg:mt-0 lg:h-[400px] bg-[#17181D]  px-6 md:px-16 lg:px-64`} >
            <div className='h-[50%] flex flex-col justify-center items-center lg:mt-20 mt-8'>
                {
                    isDark ?
                        <img src={logo} alt="logo" className='  lg:w-56 lg:h-56 md:w-24 md:h-24 w-20 h-20' />
                        :
                        <img src={logo} alt="logo" className='  lg:w-56 lg:h-56 md:w-24 md:h-24 w-20 h-20' />

                }
            </div>

            <div className={`flex flex-col justify-center items-center mb-3   ${isDark ? 'border-white' : 'border-[#17181D]'}`}>
                <p className=' uppercase text-gray-400 md:text-[10px] text-[8px] mt-8'>
                    Tiempo.Copyright 2023.All right reserved
                </p>
                
            </div>

        </div>
    );
};

export default Footer;