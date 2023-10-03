/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { Context } from '../../Context/MainContext';

const BezelsComponent = ({ selectedSize, setBezelPrice, bezels36, bezels41, setSelectedComponents, selectedComponents }) => {
    const handleDialClick = (newBezelName) => {
        setSelectedComponents((prevSelectedComponents) => ({
            ...prevSelectedComponents,
            bezelName: newBezelName,
        }));
    };
    const { isDark } = useContext(Context)

    useEffect(() => {
        if (selectedSize === '41') {
            if (selectedComponents?.bezelName === 'model1') {
                setBezelPrice(0)
            } if (selectedComponents?.bezelName === 'model2') {
                setBezelPrice(2500)
            } if (selectedComponents?.bezelName === 'model3') {
                setBezelPrice(2500)
            } if (selectedComponents?.bezelName === 'model4') {
                setBezelPrice(2500)
            } if (selectedComponents?.bezelName === 'model5') {
                setBezelPrice(2500)
            } if (selectedComponents?.bezelName === 'model6') {
                setBezelPrice(2500)
            }
        }
        if (selectedSize === '36') {
            if (selectedComponents?.bezelName === 'model1') {
                setBezelPrice(0)
            } if (selectedComponents?.bezelName === 'model2') {
                setBezelPrice(2000)
            } if (selectedComponents?.bezelName === 'model3') {
                setBezelPrice(2000)
            } if (selectedComponents?.bezelName === 'model4') {
                setBezelPrice(2000)
            } if (selectedComponents?.bezelName === 'model5') {
                setBezelPrice(2000)
            } if (selectedComponents?.bezelName === 'model6') {
                setBezelPrice(2000)
            }
        }
    }, [selectedSize, selectedComponents?.bezelName, setBezelPrice])

    return (
        <div className='lg:h-[50vh] flex flex-col justify-center lg:justify-end items-center'>
            <h2 className={`font-medium hidden  lg:block text-center mb-2 ${isDark ? 'text-white' : 'text-black '}`}>THE BEZELS</h2>
            <div className='mt-2 flex justify-center items-center gap-x-2'>

                {
                    selectedSize === '41' ? <>
                        {
                            bezels41?.map((dial, index) => {
                                const { img, name, filename, price } = dial;
                                return (
                                    <div key={index} className={`flex justify-center items-center flex-col  cursor-pointer  
                            border border-transparent p-1 rounded-full 
                            
                           

                            `} onClick={() => { handleDialClick(filename), setBezelPrice(price) }}>
                                        <img src={img} alt="bezels image"
                                            className='w-[54px] h-[54px] lg:w-[60px] lg:h-[60px] ' />
                                        {/* <p className='text-xs py-1 hidden md:flex'>{name}</p> */}
                                    </div>
                                )
                            })
                        }
                    </>
                        :

                        <>
                            {
                                bezels36?.map((dial, index) => {
                                    const { img, name, filename, price } = dial;
                                    return (
                                        <div key={index} className={`flex justify-center items-center flex-col  cursor-pointer  
                            border border-transparent p-1 rounded-full 
                            
                           

                            `} onClick={() => { handleDialClick(filename), setBezelPrice(price) }}>
                                            <img src={img} alt="bezels image"
                                                className='w-[68px] h-[68px] lg:w-[60px] lg:h-[60px] ' />
                                            {/* <p className='text-xs py-1 hidden md:flex'>{name}</p> */}
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

export default BezelsComponent;