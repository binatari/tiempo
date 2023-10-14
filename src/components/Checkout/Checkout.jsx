import { useContext, useEffect, useState } from 'react';
import { useSliderContext } from '../../Context/Slider_context';
import { Context } from '../../Context/MainContext';
import { Link, useNavigate } from 'react-router-dom';
import ToggleButton from '../../Utils/ToggleButton/ToggleButton';
import logoBlack from '../../assets/TiempoBlackLogo.png'
import logout from '../../assets/logout.svg'
import logo from '../../assets/TiempoWhiteLogo.png';
const Checkout = () => {
    const { initialWatch, activeWatch, extraStraps, selectedSize, selectedExtraStrapsIndex } = useSliderContext()
    const [strapPrice, setStrapePrice] = useState(initialWatch[activeWatch]?.[0][2])
    console.log(activeWatch);
    const [selectedExtraStraps, setSelectedExtraStraps] = useState([])

    const [extraStrapPrice, setExtraStrapPrice] = useState()
    const navigate = useNavigate();
    const [totalPrice, setTotalPrice] = useState()
    useEffect(() => {

        if (selectedSize == '36') {


            let name1 = "DateJust Jubilee"
            let name2 = "DateJust Oyester"

            if ((initialWatch[activeWatch][0][1]).toLowerCase() == (name1.toLowerCase())) {
                let price = (Number(initialWatch[activeWatch]?.[0][2]) - 750)
                setStrapePrice(price)
                //   strapPrice = ( Number(initialWatch[activeWatch]?.[0][2]) -  750)
                //   window.alert("hit")
                console.log((Number(initialWatch[activeWatch][0][2]) - 750), "price")
                // window.alert("jubli")

            }
            if ((initialWatch[activeWatch][0][1]).toLowerCase() == (name2.toLowerCase())) {
                // window.alert("oyester")
                let price = (Number(initialWatch[activeWatch][0][2]) - 750)
                setStrapePrice(price)
                //   strapPrice = ( Number(initialWatch[activeWatch]?.[0][2]) -  750)
                console.log((Number(initialWatch[activeWatch][0][2]) - 750), "price")

            }
        }

    }, [])


    useEffect(() => {
        let slectedExtraStrapsContainer = []
        let selectedExtraStrapsPrice = 0
        selectedExtraStrapsIndex.map((strapIndex) => {
            slectedExtraStrapsContainer.push(extraStraps[strapIndex])

            console.log(extraStraps[strapIndex][2], "extra staps price")
            selectedExtraStrapsPrice += extraStraps[strapIndex][2]

        })

        setExtraStrapPrice(selectedExtraStrapsPrice);

        setSelectedExtraStraps([...slectedExtraStrapsContainer])
        let price = strapPrice + initialWatch[activeWatch][1][2] + ((selectedSize == 41) ? initialWatch[activeWatch][2][2] : ((initialWatch[activeWatch][2][2] - 500) > 0) ? (initialWatch[activeWatch][2][2] - 500) : 0) + selectedExtraStrapsPrice
        setTotalPrice(price)
        // new code ----------------------------------------------------------------------------------


    }, [strapPrice])


    const { isDark, setInvoiceMod } = useContext(Context)
    const handleGoBack = () => {
        // Go back to the previous location
        navigate(`../configure/${activeWatch}`);
    };





    const handleLogOut = () => {
        if (localStorage.getItem("token")) {
            localStorage.removeItem("token");
            navigate('/login')
        }
    };
    return (
        <div className={`${isDark ? 'bg-black' : 'bg-white'} min-h-screen`}>
            <div className="flex justify-between items-center px-5 lg:px-40 py-2">
                <ToggleButton />
                {
                    isDark ?

                        <Link to={'/'}>
                            <img src={logo} alt='logo' className='w-16 h-16 mr-8' />
                        </Link>
                        :
                        <img src={logoBlack} alt='logo' className='w-16 h-16 mr-8' />
                }






                <img className={`text-sm cursor-pointer w-16 h-16`} src={logout} alt="" onClick={handleLogOut} />
            </div>
            <div>
                <p className={`pl-5 md:pl-32 pt-5 text-xs cursor-pointer hover:underline ${isDark ? 'underline-offset-1 text-white' : 'text-black'}`} onClick={handleGoBack}>
                    Go Back
                </p>
            </div>
            <div className='flex pb-10 lg:pb-0 lg:flex-row flex-col  items-center justify-center'>


                <div className='text-white flex text-center  flex-col' >
                    <div className='watchContainerWatch'>
                        <img src={initialWatch[activeWatch]?.[0][0]} alt="" className='img1  w-[100%] h-[80%] top-[50%] translate-y-[-50%] absolute' />
                        <img src={initialWatch[activeWatch]?.[1][0]} alt="" className='img2 w-[43.5%] top-[43.9%] translate-y-[-50%] left-[27%] absolute' />

                        <img src={initialWatch[activeWatch]?.[2][0]} alt="" className='img3 w-[51%] top-[44%] translate-y-[-50%] left-[23.1%] absolute' />

                    </div>



                </div>
                <div className={`${isDark ? 'text-white border-white' : 'text-black border-black'} `}>

                    <h1 className='text-2xl md:text-4xl mb-3'><span className='font-medium'> {initialWatch[activeWatch]?.[0][1]} - {selectedSize}
                    </span></h1>
                    <div className={`text-sm capitalize  ${isDark ? 'text-gray-200' : 'text-[#000]'}`}>
                        {initialWatch[activeWatch]?.[0][1]},
                        <span className='mx-1'>
                            {selectedSize} <span className='normal-case'>mm</span>
                        </span>
                        <p className=''>
                            {initialWatch[activeWatch]?.[1][1]}
                        </p>
                        <p>
                            {initialWatch[activeWatch]?.[2][1]}
                        </p>

                    </div>

                    {
                        selectedExtraStraps?.length > 0 &&
                        <h1 className='text-xs'>Additional Straps Price: <span className='font-medium text-sm'> £{extraStrapPrice}
                        </span></h1>
                    }

                    <h1 className={`text-lg mt-5 pt-1.5 border-t  ${isDark ? 'border-white' : 'border-black'}`}>Total Price: <span className='font-medium'> £{totalPrice}
                    </span></h1>
                    <button
                        onClick={() => {
                            setInvoiceMod(true)
                            handleGoBack();
                        }}
                        className="bg-white text-black rounded-xl uppercase my-2 font-medium px-10 py-2">
                        Order Now
                    </button>
                </div>



            </div>
            {
                selectedExtraStraps?.length > 0 &&
                <div>

                    <h1 className={`text-xl text-center md:text-2xl  ${isDark ? 'text-white' : 'text-black'}`}>Selected Additional Straps</h1>
                    <div className='flex flex-wrap justify-center items-center py-10'>
                        {
                            selectedExtraStraps?.map((extraStrap, index) => <div key={index} className=''>
                                <img src={extraStrap[0]} alt="" className='img1 w-20 h-20  md:w-[130px] md:h-[130px] ' />
                            </div>)
                        }


                    </div>
                </div>
            }
        </div>
    );
};

export default Checkout;