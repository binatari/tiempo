/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Stage, PresentationControls, OrbitControls } from "@react-three/drei";
import { Suspense, useContext, useEffect, useState } from "react";
import { Context } from "../../../Context/MainContext";
import WatchComponentButton from "../../WatchComponentButton/WatchComponentButton";
import { ModelContext } from "../../../Context/ModelContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../../../assets/TiempoWhiteLogo.png';
import logoBlack from '../../../assets/TiempoBlackLogo.png';
import logout from '../../../assets/logout.svg';
import ToggleButton from "../../../Utils/ToggleButton/ToggleButton";
import arrow from '../../../assets/HomePageImg/RightArrow.svg'
import WatchDetails from "../../WatchComponentButton/WatchDetails";

const ConfigurationPage = () => {
    const [dialPrice, setDialPrice] = useState(0)
    const [bezelPrice, setBezelPrice] = useState(0)
    const [strapPrice, setStrapPrice] = useState(0)
    const [extraStrapPrice, setExtraStrapPrice] = useState(0)
    const [selectedSize, setSelectedSize] = useState('41')

    useEffect(() => {
        // Calculate the total price whenever one of the component prices changes
        const totalPrice = dialPrice + bezelPrice + strapPrice + extraStrapPrice;

        // Update the selectedComponents object with the new total price
        setSelectedComponents((prevSelectedComponents) => ({
            ...prevSelectedComponents,
            sum: totalPrice,
        }));
    }, [dialPrice, bezelPrice, strapPrice, extraStrapPrice]);

    const {
        // body 
        BlackBody,
        BlueBody,
        GreenBody,
        GreyBody,
        PinkBody,
        PurpleBody,
        RedBody,
        WhiteBody,
        MetalBody1,
        MetalBody2,
        // Dials 
        BlackDial,
        BlueDial,
        GreenDial,
        GreyDial,
        PinkDial,
        PurpleDial,
        RedDial,
        WhiteDial,

        // baguette 
        BaguetteBlackDial,
        BaguetteBlueDial,
        BaguetteGreenDial,
        BaguetteGreyDial,
        BaguettePinkDial,
        BaguettePurpleDial,
        BaguetteRedDial,
        BaguetteWhiteDial,

        // RomanDial 
        RomanBlackDial,
        RomanBlueDial,
        RomanGreenDial,
        RomanGreyDial,
        RomanPinkDial,
        RomanPurpleDial,
        RomanRedDial,
        RomanWhiteDial,
        // Bezels 

        BlackBezel,
        BlueBezel,
        GreenBezel,
        RedBezel,
        WhiteBezel,
        MetalBezel

    } = useContext(ModelContext)

    const [selectedComponents, setSelectedComponents] = useState({
        dialName: 'baguetteAqua',
        bezelName: 'model1',
        stripeName: 'body1',
        sum: 0
    });

    const { isDark } = useContext(Context)
    const { state } = useLocation()
    const { bezel, stripe, dial, dialPriceData, bezelsPriceData, strapPriceData, size } = state;
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setDialPrice(dialPriceData)
        setBezelPrice(bezelsPriceData)
        setStrapPrice(strapPriceData)
    }, [dialPriceData, bezelsPriceData, strapPriceData])

    useEffect(() => {
        if (state) {
            setSelectedComponents({
                dialName: dial,
                bezelName: bezel,
                stripeName: stripe,
                sum: 0
            })
        }
        else {
            setSelectedComponents({
                dialName: 'baguetteAqua',
                bezelName: 'model1',
                stripeName: 'body1',
                sum: 0
            })
        }
    }, [dial, bezel, stripe, state])

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
    }, [])

    useEffect(() => {
        setSelectedSize(size)
    }, [size])


    const navigate = useNavigate()

    const handleLogOut = () => {
        if (localStorage.getItem("token")) {
            localStorage.removeItem("token");
            navigate('/login')
        }
    };


    const [open, setOpen] = useState(false);
    console.log(strapPriceData)

    return (
        <div className={`lg:h-screen  ${isDark ? 'bg-[#000000]' : 'bg-white'}`} >
            <div className="w-full xl:w-11/12 xxl:w-[1440px] relative ">

                <div className="flex gap-x-2 items-center absolute top-24 md:top-20 right-2 md:right-14 ">
                    <h1 className={`text-sm ${isDark ? 'text-white' : 'text-black'}`}>
                        Size:
                    </h1>
                    <div className="text-sm rounded">
                        <button onClick={() => setSelectedSize('41')}
                            className={`px-3 py-1 
                        border border-transparent
                        ${isDark ? 'bg-black text-white' : "bg-white text-black"}
                    ${(selectedSize === '41') && ' border border-gray-400'} 
                            `}
                            >
                    41</button>
                        <button onClick={() => setSelectedSize('36')} className={`px-3 py-1 border border-transparent   ${isDark ? 'bg-black text-white' : "bg-white text-black"} ${(selectedSize === '36') && ' border border-gray-400'}`}>36</button>
                    </div>

                </div>
                <div className={`flex justify-between items-center px-5 lg:px-20 py-3 ${isDark ? 'bg-black/50' : 'bg-white/50'}`}>
                    <ToggleButton />

                    {
                        isDark ? <Link to={'/'}>
                            <img src={logo} alt='logo' className='w-16 h-16' />
                        </Link>
                            :
                            <Link to={'/'}>
                                <img src={logoBlack} alt='logo' className='w-16 h-16' />
                            </Link>
                    }

                    <img className={`text-sm cursor-pointer w-16 h-16`} src={logout} alt="" onClick={handleLogOut} />

                </div>

                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 ">
                    <div className="flex flex-col items-center justify-center w-full  pt-10">
                        {
                            isLoading ? <p className={`h-[400px] flex justify-center items-center ${isDark ? 'text-white' : 'text-black'}`}>
                                Just a moment. Your desired watch is rendering.
                            </p>
                                :

                                <Canvas
                                    dpr={1}
                                    camera={{ fov: 47 }}
                                    className="absolute mx-auto w-11/12 md:w-full 
                                h-[300px] md:h-[470px] lg:h-[60vh] mid-xl:h-[55vh] "

                                    style={{ height: '', touchAction: 'none', }}
                                >
                                    {/* <color attach="background" args={['#00000000']} /> */}
                                    <Suspense fallback={null}>
                                        <ambientLight intensity={0.05} />
                                        <directionalLight intensity={2.5} />
                                        {/* <pointLight position={[0, 10, 10]} intensity={0.05} /> */}

                                        <PresentationControls speed={2} zoom={0.8}>
                                            <Stage
                                                environment={'sunset'}
                                                intensity={0.0}
                                                adjustCamera={1}
                                                preset={'rembrandt'}
                                                shadows={false}
                                            >
                                                {/* body  */}
                                                <>
                                                    {
                                                        selectedComponents?.stripeName === 'body1' && <MetalBody1 scale={0.5} position={[0, 0.25, 0]} intensity={1.5} />
                                                    }
                                                    {
                                                        selectedComponents?.stripeName === 'body2' && <MetalBody2 scale={0.5} position={[0, 0.25, 0]} intensity={1.5} />
                                                    }
                                                    {
                                                        selectedComponents?.stripeName === 'body3' && <GreyBody scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.stripeName === 'body4' && <GreenBody scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.stripeName === 'body5' && <RedBody scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.stripeName === 'body6' && <PinkBody scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.stripeName === 'body7' && <WhiteBody scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.stripeName === 'body8' && <BlackBody scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.stripeName === 'body9' && <PurpleBody scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.stripeName === 'body10' && <BlueBody scale={0.5} position={[0, 0.25, 0]} />
                                                    }

                                                </>

                                                {/* dials */}
                                                <>

                                                    {/* Brushes  */}

                                                    {
                                                        selectedComponents?.dialName === 'brushAqua' && <BlueDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.dialName === 'brushGreen' && <GreenDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.dialName === 'brushLavender' && <PinkDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.dialName === 'brushPurple' && <PurpleDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.dialName === 'brushCarmine' && <RedDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.dialName === 'brushWhite' && <WhiteDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.dialName === 'brushGray' && <GreyDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.dialName === 'brushBlack' && <BlackDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }

                                                    {/* Baguette  */}
                                                    {
                                                        selectedComponents?.dialName === 'baguetteAqua' && <BaguetteBlueDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.dialName === 'baguetteGreen' && <BaguetteGreenDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.dialName === 'baguetteLavender' && <BaguettePinkDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.dialName === 'baguettePurple' && <BaguettePurpleDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.dialName === 'baguetteCarmine' && <BaguetteRedDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.dialName === 'baguetteWhite' && <BaguetteWhiteDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.dialName === 'baguetteGray' && <BaguetteGreyDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.dialName === 'baguetteBlack' && <BaguetteBlackDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }

                                                    {/* RomanBlackDial */}
                                                    {
                                                        selectedComponents?.dialName === 'romanAqua' && <RomanBlueDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.dialName === 'romanGreen' && <RomanGreenDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.dialName === 'romanLavender' && <RomanPinkDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.dialName === 'romanPurple' && <RomanPurpleDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.dialName === 'romanCarmine' && <RomanRedDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.dialName === 'romanWhite' && <RomanWhiteDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.dialName === 'romanGray' && <RomanGreyDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.dialName === 'romanBlack' && <RomanBlackDial scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                </>

                                                {/* bezels */}
                                                <>
                                                    {
                                                        selectedComponents?.bezelName === 'model1' && <MetalBezel scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.bezelName === 'model3' && <WhiteBezel scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.bezelName === 'model2' && <BlackBezel scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.bezelName === 'model4' && <RedBezel scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.bezelName === 'model5' && <GreenBezel scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                    {
                                                        selectedComponents?.bezelName === 'model6' && <BlueBezel scale={0.5} position={[0, 0.25, 0]} />
                                                    }
                                                </>

                                                <OrbitControls enableZoom={true} enableRotate={false} enablePan={false} />
                                            </Stage>

                                        </PresentationControls>

                                    </Suspense>

                                </Canvas>
                        }

                        <div className={` flex flex-col items-center gap-x-3 mt-3 md:mt-10 mid-xl:mt-10  px-20 py-2 md:py-5  rounded ${isDark ? 'bg-gray-500/50' : 'bg-gray-200/90'}`}>
                            <div className="flex items-center gap-x-3">
                                <span className="p-1 rounded-full bg-white border border-white hover:shadow-lg shadow cursor-pointer " onClick={() => setOpen(true)}>
                                    <img src={arrow} alt="" className="w-4 h-4 -rotate-90" />
                                </span>
                                <p className={`text-xs md:text-sm text-center ${isDark ? 'text-white' : 'text-black'}`}>Total Price : £{selectedComponents?.sum} <span className="hover:underline cursor-pointer" onClick={() => setOpen(true)}>(See details)</span> </p>
                            </div>
                            <div className="w-full flex justify-center items-center">

                                <button className={`uppercase text-xs md:text-sm cursor-pointer rounded mt-2 px-5 py-1  ${isDark ? 'bg-black text-white hover:bg-black/80 ' : 'bg-white text-black hover:bg-white/80'}`}>
                                    order request
                                </button>
                            </div>
                        </div>

                        {
                            open && <WatchDetails
                                dialPrice={dialPrice}
                                bezelPrice={bezelPrice}
                                strapPrice={strapPrice}
                                extraStrapPrice={extraStrapPrice}
                                selectedSize={selectedSize}
                                selectedComponents={selectedComponents}
                                open={open}
                                setOpen={setOpen}
                            />
                        }
                    </div>

                    <div>
                        <WatchComponentButton
                            selectedSize={selectedSize}
                            setDialPrice={setDialPrice}
                            setBezelPrice={setBezelPrice}
                            setStrapPrice={setStrapPrice}
                            extraStrapPrice={extraStrapPrice}
                            setExtraStrapPrice={setExtraStrapPrice}
                            setSelectedComponents={setSelectedComponents}
                            selectedComponents={selectedComponents}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfigurationPage;