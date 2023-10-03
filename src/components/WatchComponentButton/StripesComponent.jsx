/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from 'react';
import { Context } from '../../Context/MainContext';

const StripesComponent = ({ selectedSize, setStrapPrice, stripes36, stripes41, setSelectedComponents, selectedComponents }) => {
    const handleDialClick = (newStripeName) => {
        setSelectedComponents((prevSelectedComponents) => ({
            ...prevSelectedComponents,
            stripeName: newStripeName,
        }));
    };

    useEffect(() => {
        if (selectedSize === '41') {
            if (selectedComponents?.stripeName === 'body1') {
                setStrapPrice(11250)
            } if (selectedComponents?.stripeName === 'body2') {
                setStrapPrice(12000)
            }
        }
        if (selectedSize === '36') {
            if (selectedComponents?.stripeName === 'body1') {
                setStrapPrice(10500)
            } if (selectedComponents?.stripeName === 'body2') {
                setStrapPrice(11250)
            }
        }
    }, [selectedComponents?.stripeName, selectedSize, setStrapPrice])

    const { isDark } = useContext(Context)
    return (
        <div className='flex flex-col items-center justify-center lg:justify-end lg:h-[50vh]'>
            <h2 className={`font-medium text-center mb-2 ${isDark ? 'text-white' : 'text-black'}`}>THE STRAPS</h2>
            <div className='grid grid-cols-2 xl:grid-cols-2 justify-center items-center gap-5 xl:gap-x-5 mt-2'>
                {
                    selectedSize === '41' ?
                        <>
                            {
                                stripes41?.map((dial, index) => {
                                    const { img, name, filename, price } = dial;
                                    return (
                                        <div key={index} className={`flex justify-center items-center flex-col cursor-pointer   ${selectedComponents?.stripeName === filename && ''}`} onClick={() => { handleDialClick(filename), setStrapPrice(price) }}>
                                            <img src={img} alt="stripe image" className='w-10 h-16 lg:w-24 lg:h-36' />
                                            <p className={`text-xs py-1 ${isDark ? 'text-white' : 'text-black'}`}>{name}</p>
                                        </div>
                                    )
                                })
                            }
                        </>
                        :
                        <>
                            {
                                stripes36?.map((dial, index) => {
                                    const { img, name, filename, price } = dial;
                                    return (
                                        <div key={index} className={`flex justify-center items-center flex-col cursor-pointer   ${selectedComponents?.stripeName === filename && ''}`} onClick={() => { handleDialClick(filename), setStrapPrice(price) }}>
                                            <img src={img} alt="stripe image" className='w-10 h-16 lg:w-24 lg:h-36' />
                                            <p className={`text-xs py-1 ${isDark ? 'text-white' : 'text-black'}`}>{name}</p>
                                        </div>
                                    )
                                })
                            }
                        </>
                }


            </div>
        </div>
    );
};

export default StripesComponent;