/* eslint-disable react/prop-types */
import { Box, Modal } from '@mui/material';
import React, { useContext } from 'react';
import { Context } from '../../Context/MainContext';

const WatchDetails = ({ dialPrice, bezelPrice, strapPrice, extraStrapPrice, selectedSize, selectedComponents, open, setOpen }) => {
    const { isDark } = useContext(Context)
    return (
        <Modal
            keepMounted
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box>
                <div className={`py-16 px-14 md:py-0 md:px-0 lg:w-5/12 md:w-2/3 w-full md:mx-auto md:absolute top-0 left-0 lg:left-[30%] md:top-[16%] lg:top-[10%] md:left-[15%] rounded-lg min-h-[400px] ${isDark ? 'bg-black' : 'bg-white'}`}>
                    <div className={`flex items-start justify-between p-2   ${isDark ? 'bg-black' : 'bg-white'}`}>
                        <button
                            className={`px-2 py-1 ml-auto hover:bg-red-600 hover:text-white text-sm rounded-md font-medium ${isDark ? 'text-white' : 'text-black'}`}
                            onClick={() => setOpen(false)}
                        >
                            X
                        </button>
                    </div>
                    <div className={`${isDark ? 'text-white' : 'text-black'} py-2 px-10`}>
                        <h1 className='text-lg font-semibold py-2 '> PRODUCT DETAILS</h1>
                        <hr className='w-1/3 pb-3' />
                        <h2 className='text-sm font-medium py-2 '>
                            Bezel: Baguette Treated Sapphire Bezel ({bezelPrice})
                        </h2>
                        <h2 className='text-sm font-medium py-2'>
                            Dial: Pink With Roman Numeral Hour Markers ({dialPrice})
                        </h2>
                        <h2 className='text-sm font-medium py-2'>
                            Bracelet Type: Jubilee ({strapPrice})
                        </h2>
                        <h2 className='text-sm font-medium py-2'>
                            Size Description: {selectedSize}mm
                        </h2>
                        <h2 className='text-sm font-medium py-2'>
                            Year: 2023 Brand New
                        </h2>

                        <div>
                            {extraStrapPrice > 0 && <>
                                <h2 className='text-sm font-medium py-2'>
                                    +Stripe ({extraStrapPrice})
                                </h2>
                            </>}
                        </div>

                        <h2 className=' font-medium py-2'>
                            Total Price: <span className='font-semibold text-[18px]'>
                                £{selectedComponents?.sum}
                            </span>
                        </h2>
                        <div className='my-5'>
                            <p className='text-sm mb-2'>
                                Included: Original Rolex: Warranty Card, Warranty Booklet, Swing Tag, + Five Year Warranty Card
                            </p>
                            <p className='text-xs mt-2'>
                                RW Luxury LTD is an independent company. Personalization & customizations are private commissions and not authorized or endorsed by the original manufacturers. Customized & personalized watches void any original manufactures warranty. All custom warranties are the sole responsibility of RW Luxury LTD.
                            </p>
                        </div>


                    </div>

                </div>
            </Box>
        </Modal>
    );
};

export default WatchDetails;