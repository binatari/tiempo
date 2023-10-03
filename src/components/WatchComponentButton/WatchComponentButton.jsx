/* eslint-disable react/prop-types */
import Slider from 'react-slick';

// dials 
import paleAqua from '../../assets/baguette/aqua.svg'
import forestGreen from '../../assets/baguette/forestGreen.svg'
import lavender from '../../assets/baguette/lavendar.svg'
import purple from '../../assets/baguette/purple.svg'
import carmine from '../../assets/baguette/carmine.svg'
import whiteSmoke from '../../assets/baguette/whiteSmoke.svg'
import gray from '../../assets/baguette/gray.svg'
import blackImage from '../../assets/baguette/black.svg'
import brushGrey from '../../assets/HomePageImg/Dials/brushGray.svg'
import brushLavender from '../../assets/HomePageImg/Dials/brushLavender.svg'
import brushBlack from '../../assets/HomePageImg/Dials/brushBlack.svg'
import brushGreen from '../../assets/HomePageImg/Dials/brushGreen.svg'
import brushPurple from '../../assets/HomePageImg/Dials/brushPurple.svg'
import brushAqua from '../../assets/HomePageImg/Dials/brushAqua.svg'
import brushCarmine from '../../assets/HomePageImg/Dials/brushRed.svg'
import romanGrey from '../../assets/HomePageImg/Dials/Dial-5.png'
import romanWhite from '../../assets/HomePageImg/Dials/Dial-19.png'
import romanLavender from '../../assets/HomePageImg/Dials/Dial-6.png'
import romanBlack from '../../assets/HomePageImg/Dials/Dial-4.png'
import romanGreen from '../../assets/HomePageImg/Dials/Dial-14.png'
import romanPurple from '../../assets/HomePageImg/Dials/Dial-15.png'
import romanAqua from '../../assets/HomePageImg/Dials/Dial-16.png'
import romanCarmine from '../../assets/HomePageImg/Dials/Dial-17.png'

// bezels 
import model1 from '../../assets/HomePageImg/Bezzel/Bezzle-1.png'
import model2 from '../../assets/HomePageImg/Bezzel/Bezzle-2.png'
import model3 from '../../assets/HomePageImg/Bezzel/Bezzle-3.png'
import model4 from '../../assets/HomePageImg/Bezzel/Bezzle-4.png'
import model5 from '../../assets/HomePageImg/Bezzel/Bezzle-5.png'
import model6 from '../../assets/HomePageImg/Bezzel/Bezzle-6.png'

// body 
import body1 from '../../assets/HomePageImg/Body/Body-1.png'
import body2 from '../../assets/HomePageImg/Body/Body-2.png'
import body3 from '../../assets/HomePageImg/Body/Body-3.png'
import body4 from '../../assets/HomePageImg/Body/Body-4.png'
import body5 from '../../assets/HomePageImg/Body/Body-5.png'
import body6 from '../../assets/HomePageImg/Body/Body-6.png'
import body7 from '../../assets/HomePageImg/Body/Body-7.png'
import body8 from '../../assets/HomePageImg/Body/Body-8.png'
import body9 from '../../assets/HomePageImg/Body/Body-9.png'
import body10 from '../../assets/HomePageImg/Body/Body-10.png'
// import body10 from '../../assets/HomePageImg/watch6.svg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext, useState } from 'react';
import WatchComponentChangeButton from './WatchComponentChangeButton/WatchComponentChangeButton';
import DialsComponent from './DialsComponent';
import BezelsComponent from './BezelsComponent';
import StripesComponent from './StripesComponent';
import { Context } from '../../Context/MainContext';
import ExtraStrapes from './ExtraStrapes';


const WatchComponentButton = ({ selectedSize, setDialPrice, setBezelPrice, setStrapPrice, extraStrapPrice, setExtraStrapPrice, setSelectedComponents, selectedComponents }) => {
    const [buttonSet, setButtonSet] = useState('The Dials')
    const { isDark } = useContext(Context)
    const baguetteDials = [
        {
            price: 2500,
            filename: 'baguetteAqua',
            name: 'Aqua',
            img: paleAqua
        },
        {
            price: 2500,
            filename: 'baguetteGreen',
            name: 'Green',
            img: forestGreen
        },
        {
            price: 2500,
            filename: 'baguetteLavender',
            name: 'Lavender',
            img: lavender
        },
        {
            price: 2500,
            filename: 'baguettePurple',
            name: 'Purple',
            img: purple
        },
        {
            price: 2500,
            filename: 'baguetteCarmine',
            name: 'Carmine',
            img: carmine
        },
        {
            price: 2500,
            filename: 'baguetteWhite',
            name: 'White',
            img: whiteSmoke
        },
        {
            price: 2500,
            filename: 'baguetteGray',
            name: 'Gray',
            img: gray
        },
        {
            price: 2500,
            filename: 'baguetteBlack',
            name: 'Black',
            img: blackImage
        },
    ]
    const romanDials = [
        {
            price: 1000,
            filename: 'romanAqua',
            name: 'Aqua',
            img: romanAqua
        },
        {
            price: 1000,
            filename: 'romanGreen',
            name: 'Green',
            img: romanGreen
        },
        {
            price: 1000,
            filename: 'romanLavender',
            name: 'Lavender',
            img: romanLavender
        },
        {
            price: 1000,
            filename: 'romanPurple',
            name: 'Purple',
            img: romanPurple
        },
        {
            price: 1000,
            filename: 'romanCarmine',
            name: 'Carmine',
            img: romanCarmine
        },
        {
            price: 1000,
            filename: 'romanWhite',
            name: 'White',
            img: romanWhite
        },
        {
            price: 1000,
            filename: 'romanGray',
            name: 'Gray',
            img: romanGrey
        },
        {
            price: 1000,
            filename: 'romanBlack',
            name: 'Black',
            img: romanBlack
        },
    ]
    const brushDials = [
        {
            price: 1000,
            filename: 'brushAqua',
            name: 'Aqua',
            img: brushAqua
        },
        {
            price: 1000,
            filename: 'brushGreen',
            name: 'Green',
            img: brushGreen
        },
        {
            price: 1000,
            filename: 'brushLavender',
            name: 'Lavender',
            img: brushLavender
        },
        {
            price: 1000,
            filename: 'brushPurple',
            name: 'Purple',
            img: brushPurple
        },
        {
            price: 1000,
            filename: 'brushCarmine',
            name: 'Carmine',
            img: brushCarmine
        },
        {
            price: 1000,
            filename: 'brushWhite',
            name: 'White',
            img: brushGrey
        },
        {
            price: 1000,
            filename: 'brushGray',
            name: 'Gray',
            img: brushGrey
        },
        {
            price: 1000,
            filename: 'brushBlack',
            name: 'Black',
            img: brushBlack
        },
    ]

    const bezels41 = [
        {

            price41: 0,
            filename: 'model1',
            name: 'Model',
            img: model1
        },
        {
            price41: 2500,
            filename: 'model2',
            name: 'Model',
            img: model3
        },
        {
            price41: 2500,
            filename: 'model3',
            name: 'Model',
            img: model2
        },
        {
            price41: 2500,
            filename: 'model4',
            name: 'Model',
            img: model4
        },
        {
            price41: 2500,
            filename: 'model5',
            name: 'Model',
            img: model5
        },
        {
            price41: 2500,
            filename: 'model6',
            name: 'Model',
            img: model6
        },

    ]
    const bezels36 = [
        {
            price: 0,
            filename: 'model1',
            name: 'Model',
            img: model1
        },
        {
            price36: 2000,
            filename: 'model2',
            name: 'Model',
            img: model3
        },
        {
            price36: 2000,
            filename: 'model3',
            name: 'Model',
            img: model2
        },
        {
            price36: 2000,
            filename: 'model4',
            name: 'Model',
            img: model4
        },
        {
            price36: 2000,
            filename: 'model5',
            name: 'Model',
            img: model5
        },
        {
            price36: 2000,
            filename: 'model6',
            name: 'Model',
            img: model6
        },

    ]

    const dialsForPhone = [
        {
            filename: 'baguetteAqua',
            name: 'Aqua',
            img: paleAqua
        },
        {
            filename: 'baguetteGreen',
            name: 'Green',
            img: forestGreen
        },
        {
            filename: 'baguetteLavender',
            name: 'Lavender',
            img: lavender
        },
        {
            filename: 'baguettePurple',
            name: 'Purple',
            img: purple
        },
        {
            filename: 'baguetteCarmine',
            name: 'Carmine',
            img: carmine
        },
        {
            filename: 'baguetteWhite',
            name: 'White',
            img: whiteSmoke
        },
        {
            filename: 'baguetteGray',
            name: 'Gray',
            img: gray
        },
        {
            filename: 'baguetteBlack',
            name: 'Black',
            img: blackImage
        }, {
            filename: 'romanAqua',
            name: 'Aqua',
            img: romanAqua
        },
        {
            filename: 'romanGreen',
            name: 'Green',
            img: romanGreen
        },
        {
            filename: 'romanLavender',
            name: 'Lavender',
            img: romanLavender
        },
        {
            filename: 'romanPurple',
            name: 'Purple',
            img: romanPurple
        },
        {
            filename: 'romanCarmine',
            name: 'Carmine',
            img: romanCarmine
        },
        {
            filename: 'romanWhite',
            name: 'White',
            img: romanGrey
        },
        {
            filename: 'romanGray',
            name: 'Gray',
            img: romanGrey
        },
        {
            filename: 'romanBlack',
            name: 'Black',
            img: romanBlack
        }, {
            filename: 'brushAqua',
            name: 'Aqua',
            img: brushAqua
        },
        {
            filename: 'brushGreen',
            name: 'Green',
            img: brushGreen
        },
        {
            filename: 'brushLavender',
            name: 'Lavender',
            img: brushLavender
        },
        {
            filename: 'brushPurple',
            name: 'Purple',
            img: brushPurple
        },
        {
            filename: 'brushCarmine',
            name: 'Carmine',
            img: brushCarmine
        },
        {
            filename: 'brushWhite',
            name: 'White',
            img: brushGrey
        },
        {
            filename: 'brushGray',
            name: 'Gray',
            img: brushGrey
        },
        {
            filename: 'brushBlack',
            name: 'Black',
            img: brushBlack
        },
    ]

    const stripes41 = [
        {
            price: 11250,
            filename: 'body1',
            name: 'DATEJUST OYSTER 41',
            img: body1,
        },
        {
            price: 12000,
            filename: 'body2',
            name: 'DATEJUST JUBILEE 41',
            img: body2
        },

    ]
    const stripes36 = [
        {
            price: 10500,
            filename: 'body1',
            name: 'DATEJUST OYSTER 36',
            img: body1
        },
        {
            price: 11250,
            filename: 'body2',
            name: 'DATEJUST JUBILEE 36',
            img: body2
        },
    ]

    const extra = [

        {
            price: 500,
            filename: 'body3',
            name: 'Gray',
            img: body3
        },
        {
            price: 500,
            filename: 'body4',
            name: 'Green',
            img: body4
        },
        {
            price: 500,
            filename: 'body5',
            name: 'Carmine',
            img: body5
        },
        {
            price: 500,
            filename: 'body6',
            name: 'Lavender',
            img: body6
        },
        {
            price: 500,
            filename: 'body7',
            name: 'White',
            img: body7
        },
        {
            price: 500,
            filename: 'body8',
            name: 'Black',
            img: body8
        },
        {
            price: 500,
            filename: 'body9',
            name: 'Purple',
            img: body9
        },
        {
            price: 500,
            filename: 'body10',
            name: 'Blue',
            img: body10
        },

    ]


    var settings = {
        // dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 16,
        slidesToScroll: 16,
        speed: 500,
        centerPadding: '50px',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    arrows: true,
                    slidesToShow: 16,
                    slidesToScroll: 16,
                    infinite: false,

                }
            },
            {
                breakpoint: 1280,
                settings: {
                    arrows: true,
                    slidesToShow: 15,
                    slidesToScroll: 15,
                    infinite: false,

                }
            },
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    slidesToShow: 10,
                    slidesToScroll: 10,
                    infinite: false,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 8,
                    slidesToScroll: 8,
                    infinite: false,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: true,
                    slidesToShow: 8,
                    slidesToScroll: 8
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            }
        ]
    };

    const handleDialClick = (newDialName) => {
        setSelectedComponents((prevSelectedComponents) => ({
            ...prevSelectedComponents,
            dialName: newDialName,
        }));
    };
    const handleStripeClick = (newStripeName) => {
        setSelectedComponents((prevSelectedComponents) => ({
            ...prevSelectedComponents,
            stripeName: newStripeName,
        }));
    };

    return (
        <div className='my-5 ' >
            <div className='px-10 block lg:hidden'>
                {
                    buttonSet === 'The Dials' &&
                    <Slider  {...settings} className='w-full block lg:hidden'>
                        {
                            dialsForPhone?.map((image, index) => {
                                const { img, filename } = image;
                                return (
                                    <div key={index} className='p-2 border rounded border-gradient-custom'>
                                        <img src={img} alt="dial image" className=" w-full xl:h-full  cursor-pointer" 
                                        onClick={() => { handleDialClick(filename) }} />
                                        {/* <h6 className='text-xs text-black bg-transparent text-center my-2 hidden sm:block'>{name}</h6> */}
                                    </div>
                                )
                            }
                            )
                        }

                    </Slider>
                }
                {
                    buttonSet === 'The Straps' &&
                    <Slider  {...settings} className='w-full   hidden'>
                        {
                            selectedSize === '41' ? <>
                                {
                                    stripes41?.map((image, index) => {
                                        const { img, filename } = image;
                                        return (
                                            <div key={index} className='p-2 border rounded border-gradient-custom hidden'>
                                                <img src={img} alt="" className="w-[30px] h-[56px]  cursor-pointer mx-auto " onClick={() => { handleStripeClick(filename) }} />
                                                {/* <h6 className='text-xs text-black bg-transparent text-center my-2 hidden sm:block'>{name}</h6> */}
                                            </div>
                                        )
                                    }
                                    )
                                }
                            </>
                                :

                                <>
                                    {
                                        stripes36?.map((image, index) => {
                                            const { img, filename } = image;
                                            return (
                                                <div key={index} className='p-2 border rounded border-gradient-custom hidden'>
                                                    <img src={img} alt="" className="w-[30px] h-[56px]  cursor-pointer mx-auto " onClick={() => { handleStripeClick(filename) }} />
                                                    {/* <h6 className='text-xs text-black bg-transparent text-center my-2 hidden sm:block'>{name}</h6> */}
                                                </div>
                                            )
                                        }
                                        )
                                    }
                                </>
                        }



                    </Slider>
                }
            </div>

            {
                buttonSet === 'The Dials' && <DialsComponent setDialPrice={setDialPrice} baguetteDials={baguetteDials} brushDials={brushDials} romanDials={romanDials} setSelectedComponents={setSelectedComponents} selectedComponents={selectedComponents} />

            }
            {
                buttonSet === 'The Bezels' &&
                <BezelsComponent selectedSize={selectedSize} setBezelPrice={setBezelPrice} bezels36={bezels36} bezels41={bezels41} setSelectedComponents={setSelectedComponents} selectedComponents={selectedComponents} />
            }
            {
                buttonSet === 'The Straps' &&
                <StripesComponent selectedSize={selectedSize} setStrapPrice={setStrapPrice} stripes36={stripes36} stripes41={stripes41} setSelectedComponents={setSelectedComponents} selectedComponents={selectedComponents} />
            }
            {
                buttonSet === 'Add Second Straps (+£500)' &&
                <ExtraStrapes extraStrapPrice={extraStrapPrice} setExtraStrapPrice={setExtraStrapPrice} stripes={extra} setSelectedComponents={setSelectedComponents} selectedComponents={selectedComponents} />
            }

            <div className='mt-5'>
                <WatchComponentChangeButton setButtonSet={setButtonSet} buttonSet={buttonSet} />
            </div>


        </div>
    );
};

export default WatchComponentButton;