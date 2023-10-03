/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';

import { Context } from '../../Context/MainContext';

const ExtraStrapes = ({  setExtraStrapPrice, stripes, setSelectedComponents, selectedComponents }) => {
    const handleExtraStripeClick = (newStripeName) => {
        setSelectedComponents((prevSelectedComponents) => ({
          ...prevSelectedComponents,
          stripeName: prevSelectedComponents?.stripeName === newStripeName ? '' : newStripeName,
        }));
      };

      const [selectedStripes, setSelectedStripes] = useState([]); // To store selected stripes


      const handleStripeClick = (newStripeName, price) => {
        // Check if the stripe is already included in selectedStripes
        const isSelected = selectedStripes.includes(newStripeName);
    
        // Create a new array with updated selected stripes
        const updatedSelectedStripes = isSelected
          ? selectedStripes.filter((stripe) => stripe !== newStripeName)
          : [...selectedStripes, newStripeName];
    
        setSelectedStripes(updatedSelectedStripes);
    
        // Calculate the new price based on selected stripes
        const newPrice = updatedSelectedStripes.reduce((acc, stripeName) => {
          const stripe = stripes?.find((stripe) => stripe?.filename === stripeName);
          return acc + stripe.price;
        }, 0);
    
        setExtraStrapPrice(newPrice);
      };


    const { isDark } = useContext(Context)
    return (
        <div className='flex flex-col items-center justify-center lg:justify-end lg:h-[50vh]'>
            <h2 className={`font-medium text-center mb-2 ${isDark ? 'text-white' : 'text-black'}`}>THE EXTRA STRAPS</h2>
            <div className='grid grid-cols-8 lg:grid-cols-4 xl:grid-cols-4 justify-center items-center gap-5 xl:gap-x-5 mt-2'>
                {
                    stripes?.map((dial, index) => {
                        const { img, name, filename, price } = dial;
                        return (
                            <div key={index} className={`flex justify-center items-center flex-col cursor-pointer   ${selectedComponents?.stripeName === filename && ''}`} >
                                <img
                                    onClick={() => handleExtraStripeClick(filename)}
                                    src={img} alt="stripe image" className='md:w-14 md:h-20' />
                                <input
                                    type="checkbox"
                                    checked={selectedStripes.includes(filename)}
                                    onChange={() => handleStripeClick(filename, price)}

                                    className={`mt-2 rounded-full w-4 h-4 accent-black`} name="extra straps"
                                />
                                {/* <p className='text-xs py-1'>{name}</p> */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ExtraStrapes;