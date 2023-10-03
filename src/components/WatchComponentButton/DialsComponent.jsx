/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Context } from '../../Context/MainContext';

const DialsComponent = ({ setDialPrice, baguetteDials, brushDials, romanDials, setSelectedComponents, selectedComponents }) => {
    const handleDialClick = (newDialName) => {
        setSelectedComponents((prevSelectedComponents) => ({
            ...prevSelectedComponents,
            dialName: newDialName,
        }));
    };

    const { isDark } = useContext(Context)
    return (
        <div className='lg:grid lg:h-[50vh] hidden justify-center items-center gap-5'>
            <div className=''>
                <h2 className={`font-normal text-start mb-2 ${isDark ? 'text-white' : 'text-black'}`}>THE BAGUETTE</h2>
                <div className='flex justify-center items-center gap-2 lg:gap-x-1 xl:gap-x-2 '>
                    {
                        baguetteDials?.map((dial, index) => {
                            const { img, name, filename, price } = dial;
                            return (
                                <div key={index} className={`flex justify-center items-center flex-col border border-transparent p-1 rounded-full cursor-pointer 
                                ${(selectedComponents?.dialName === filename && filename === 'baguetteAqua') && 'border border-[#bae3ec] rounded-full p-1'}
                                ${(selectedComponents?.dialName === filename && filename === 'baguetteGreen') && 'border border-[#5ba35e] rounded-full p-1'}
                                ${(selectedComponents?.dialName === filename && filename === 'baguetteLavender') && 'border border-[#e1a3e9] rounded-full p-1'}
                                ${(selectedComponents?.dialName === filename && filename === 'baguettePurple') && 'border border-[#8f3ad9] rounded-full p-1'}
                                ${(selectedComponents?.dialName === filename && filename === 'baguetteCarmine') && 'border border-[#a63f3a] rounded-full p-1'}
                                ${(selectedComponents?.dialName === filename && filename === 'baguetteWhite') && 'border border-[#efefee] rounded-full p-1'}
                                ${(selectedComponents?.dialName === filename && filename === 'baguetteGray') && 'border border-[#b1b1b1] rounded-full p-1'}
                                ${(selectedComponents?.dialName === filename && filename === 'baguetteBlack') && 'border border-[#666666] rounded-full p-1'}
                                
                                `}

                                    onClick={() => {
                                        handleDialClick(filename)
                                        setDialPrice(price)
                                    }}
                                >
                                    <img src={img} alt="dial image" className=' lg:w-12 lg:h-12 mid-xl:w-14 mid-xl:h-14' />
                                    {/* <p className='text-[10px]  py-1'>{name}</p> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className=''>
                <h2 className={`font-normal text-start mb-2 ${isDark ? 'text-white' : 'text-black'}`}>THE BRUSHED </h2>
                <div className='flex justify-center items-center lg:gap-x-1 gap-2 xl:gap-x-2'>
                    {
                        brushDials?.map((dial, index) => {
                            const { img, name, filename, price } = dial;
                            return (
                                <div key={index} className={`flex justify-center items-center  flex-col cursor-pointer border border-transparent p-1 rounded-full 
                                ${(selectedComponents?.dialName === filename && filename === 'brushAqua') && 'border border-[#bae3ec] rounded-full p-1'}
                                ${(selectedComponents?.dialName === filename && filename === 'brushGreen') && 'border border-[#5ba35e] rounded-full p-1'}
                                ${(selectedComponents?.dialName === filename && filename === 'brushLavender') && 'border border-[#e1a3e9] rounded-full p-1'}
                                ${(selectedComponents?.dialName === filename && filename === 'brushPurple') && 'border border-[#8f3ad9] rounded-full p-1'}
                                ${(selectedComponents?.dialName === filename && filename === 'brushCarmine') && 'border border-[#a63f3a] rounded-full p-1'}
                                ${(selectedComponents?.dialName === filename && filename === 'brushWhite') && 'border border-[#efefee] rounded-full p-1'}
                                ${(selectedComponents?.dialName === filename && filename === 'brushGray') && 'border border-[#b1b1b1] rounded-full p-1'}
                                ${(selectedComponents?.dialName === filename && filename === 'brushBlack') && 'border border-[#666666] rounded-full p-1'}
                               
                               `} onClick={() => {
                                        handleDialClick(filename)
                                        setDialPrice(price)
                                    }}>
                                    <img src={img} alt="dial image" className=' lg:w-12 lg:h-12 mid-xl:w-14 mid-xl:h-14' />
                                    {/* <p className='text-[10px]  py-1'>{name}</p> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className=''>
                <h2 className={`font-normal text-start mb-2 ${isDark ? 'text-white' : 'text-black'}`}>THE ROMAN</h2>
                <div className='flex justify-center items-center lg:gap-x-1 gap-2 xl:gap-x-2'>
                    {
                        romanDials?.map((dial, index) => {
                            const { img, name, filename, price } = dial;
                            return (
                                <div key={index} className={`flex justify-center items-center  flex-col  cursor-pointer   
                                
                                border border-transparent p-1 rounded-full 
                                ${(selectedComponents?.dialName === filename && filename === 'romanAqua') && 'border border-[#bae3ec] rounded-full p-1'}
                                ${(selectedComponents?.dialName === filename && filename === 'romanGreen') && 'border border-[#5ba35e] rounded-full p-1'}
                                ${(selectedComponents?.dialName === filename && filename === 'romanLavender') && 'border border-[#e1a3e9] rounded-full p-1'}
                                ${(selectedComponents?.dialName === filename && filename === 'romanPurple') && 'border border-[#8f3ad9] rounded-full p-1'}
                                ${(selectedComponents?.dialName === filename && filename === 'romanCarmine') && 'border border-[#a63f3a] rounded-full p-1'}
                                ${(selectedComponents?.dialName === filename && filename === 'romanWhite') && 'border border-[#efefee] rounded-full p-1'}
                                ${(selectedComponents?.dialName === filename && filename === 'romanGray') && 'border border-[#b1b1b1] rounded-full p-1'}
                                ${(selectedComponents?.dialName === filename && filename === 'romanBlack') && 'border border-[#666666] rounded-full p-1'}`}
                                    onClick={() => {
                                        handleDialClick(filename)
                                        setDialPrice(price)
                                    }}>
                                    <img src={img} alt="dial image"
                                        className='lg:w-12 lg:h-12 mid-xl:w-14 mid-xl:h-14 ' />
                                    {/* <p className='text-[10px]  py-1'>{name}</p> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>


        </div>
    );
};

export default DialsComponent;