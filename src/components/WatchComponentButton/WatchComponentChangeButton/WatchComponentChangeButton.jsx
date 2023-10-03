/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import dialsIcon from '../../../assets/icons/dialsIcon.svg'
import bezelsIcon from '../../../assets/icons/bezelsIcon.svg'
import stripeIcon from '../../../assets/icons/stripeIcon.svg'
import { Context } from '../../../Context/MainContext';
const WatchComponentChangeButton = ({ setButtonSet, buttonSet }) => {
    const buttonData = [
        {
            name: 'The Dials',
            icon: dialsIcon
        },
        {
            name: 'The Bezels',
            icon: bezelsIcon
        },
        {
            name: 'The Straps',
            icon: stripeIcon
        },
        {
            name: 'Add Second Straps (+£500)',
            icon: stripeIcon
        },

    ]

    const { isDark } = useContext(Context)
    return (
        <div className=' mt-10 w-full flex gap-x-2 md:gap-x-5 items-center justify-center mx-auto'>
            {
                buttonData?.map((data, index) => {
                    const { name, icon } = data
                    return (
                        <button key={index} className={` ${isDark ? 'bg-black text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-black hover:text-white'} flex gap-x-2 items-center justify-center py-2 px-2 md:px-5 
                          rounded-full ${buttonSet === name ? 'border-gray-400 border-[2px]' : 'border-gray-200 border-[2px]'}`} onClick={() => setButtonSet(name)}>
                            {/* <img src={icon} alt="dials Icon" className='w-5 h-5' /> */}
                            <span className='text-[10px] md:text-xs mid-xl:text-xs font-medium' >
                                {name}
                            </span>
                        </button>
                    )
                })
            }

        </div>
    );
};

export default WatchComponentChangeButton;