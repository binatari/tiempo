/* eslint-disable react/prop-types */

import Slider from "react-slick";

const Navigator = ({ dialsBAGUETTE,
    dialsBRUSHED,
    dialsROMAN,
    dialsActivator,
    dials,
    settings,
    bazzels,
    bazzelsActivator,
    extraStraps,
    extraStrapsSelector,
    extraStrapsActivator,
    straps,
    activator,
    handleNavigator,
    click,
    dialsBLACK
 }) => {
    return (
        <div className="navigatorContainers">
            <div className="navigator1 landscape:lsc-mob:pb-20  xl:my-5  mx-auto overflow-hidden">
                <div
                    className="dialsNavigators  items-center justify-center gap-x-10 w-full overflow-hidden hidden flex-wrap gap-y-4"
                    style={{ display: "none" }}
                >
                    {/* ------------------------------------------- dial naivagor start ---------------------------------------- */}
                    {/* <span>Baguette</span> */}
                    <div className="flex gap-x-2">
                        {
                            dialsBAGUETTE.map((dial, index) => (
                                <img
                                    key={index}
                                    className="lg:w-8 lg:h-8  mid-xl:w-10   mid-xl:h-10 w-12 h-12  object-cover object-center"
                                    src={dial[0]}
                                    onClick={() => dialsActivator(index)}
                                />
                            ))
                            // <div key={index} className='imgNavigator'></div>
                        }
                    </div>

                    {/* <span>BRUSHED</span> */}
                    <div className="flex gap-x-2">
                        {dialsBRUSHED.map((dial, index) => (
                            <img
                                key={index}
                                className="  mid-xl:w-10 lg:w-8 lg:h-8  mid-xl:h-10 w-12 h-12  object-cover object-center"
                                src={dial[0]}
                                onClick={() => dialsActivator(dialsBAGUETTE.length + index)}
                            />
                        ))}
                    </div>
                    {/* <span>ROMAN</span> */}
                    <div className="flex gap-x-2">
                        {dialsROMAN.map((dial, index) => (
                            <img
                                key={index}
                                className="lg:w-8 lg:h-8  mid-xl:w-10  mid-xl:h-10 w-12 h-12  object-cover object-center"
                                src={dial[0]}
                                onClick={() =>
                                    dialsActivator(
                                        dialsBAGUETTE.length + dialsBRUSHED.length + index
                                    )
                                }
                            />
                        ))}
                    </div>
                    <div className="flex gap-x-2">
                        {dialsBLACK.map((dial, index) => (
                            <img
                                key={index}
                                className="lg:w-8 lg:h-8  mid-xl:w-10  mid-xl:h-10 w-12 h-12  object-cover object-center"
                                src={dial[0]}
                                onClick={() =>
                                    dialsActivator(
                                        dialsBAGUETTE.length + dialsBRUSHED.length + dialsROMAN.length + index
                                    )
                                }
                            />
                        ))}
                    </div>
                    {/* ------------------------------------------- dial navigator end------------------------------------------ */}
                </div>

                <div>
                    <Slider
                        {...settings}
                        className="dialsNavigators w-full hidden ml-1"
                        style={{ display: "none" }}
                    >
                        {dials?.map((dial, index) => {
                            // const { img, filename } = image;
                            return (
                                <div key={index} className="outline-none border-none ">
                                    <img
                                        key={index}
                                        className="w-12 h-12 lg:w-8 lg:h-8 xl:w-10 xl:h-10  cursor-pointer"
                                        src={dial[0]}
                                        onClick={() => dialsActivator(index)}
                                    />
                                </div>
                            );
                        })}
                    </Slider>
                </div>

                <div
                    className="bezzelsNavigators  w-full overflow-hidden hidden justify-center gap-x-2.5"
                    style={{ display: "none" }}
                >
                    {bazzels?.map((dial, index) => (
                        <img
                            key={index}
                            className="mid-xl:w-10 lg:w-8 lg:h-8  mid-xl:h-10 w-12 h-12  object-cover object-center"
                            src={dial[0]}
                            onClick={() => bazzelsActivator(index)}
                        />
                    ))}
                </div>

                <div className="">
                    <Slider
                        {...settings}
                        className="bezzelsNavigators bezzleHide w-full hidden ml-1"
                        style={{ display: "none" }}
                    >
                        {bazzels?.map((dial, index) => {
                            // const { img, filename } = image;
                            return (
                                <div key={index} className="outline-none border-none ">
                                    <img
                                        key={index}
                                        className="w-12 h-12 lg:w-8 lg:h-8 xl:w-10 xl:h-10  cursor-pointer"
                                        src={dial[0]}
                                        onClick={() => bazzelsActivator(index)}
                                    />
                                    {/* <img src={img} alt="dial image" className=" w-full xl:h-full  cursor-pointer" 
                                        onClick={() => { handleDialClick(filename) }} /> */}
                                </div>
                            );
                        })}
                    </Slider>
                </div>

                <div className="strapsNavigators items-center justify-center w-full overflow-hidden hidden">
                    {straps.filter((strap, i)=> click == '10' ? i >= 2 : i < 2)?.map((dial, index) => (
                        <img
                            key={index}
                            className="mid-xl:w-10 lg:w-8 lg:h-8  mid-xl:h-10 w-12 h-14  object-cover object-center"
                            src={dial[0]}
                            onClick={() => activator(index)}
                        />
                    ))}
                </div>

                <div className="extraStrapsNavigator  justify-center w-full overflow-hidden hidden relative -mt-2">
                    {extraStraps.map((dial, index) => (
                        <div key={index}>
                            <input
                                style={{ display: "inline-block" }}
                                className="ExtraStrapCheckoutInput relative left-[50%] translate-x-[-50%] w-3 h-3  md:w-3 md:h-8 "
                                type="checkbox"
                                name=""
                                id=""
                                onClick={(e) => extraStrapsSelector(e, index)}
                            />
                            <img
                                className="w-9 h-9 lg:w-10 lg:h-10 xl:w-10 xl:h-10 object-cover object-center cursor-pointer"
                                src={dial[0]}
                                onClick={() => extraStrapsActivator(index)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div
                className="nanigator2 z-[99999] landscape:lsc-mob:fixed landscape:lsc-mob:bottom-0 landscape:lsc-mob:left-0 landscape:lsc-mob:right-0 landscape:md:mx-auto mobile:left-0  flex items-center pt-2 pb-1 relative left-[3%] mid-xs:left-[0%] md:mt-3 
         sm:left-[10%] md:-bottom-6 sm:bottom-[12px] sm:scale-75 md:scale-100  md:static"
            >
                <div
                    className="mx-1 text-[10px] sm:text-xs md:text-sm  sm:w-24 md:w-32  text-center rounded-full"
                    onClick={(e) =>
                        handleNavigator(
                            "strapsNavigators",
                            e,
                            0,
                            "imgContainer",
                            0,
                            straps
                        )
                    }
                >
                    Bracelets
                </div>
                <div
                    className="mx-1 text-[10px] sm:text-xs md:text-sm w-[70px] sm:w-24 md:w-32  text-center rounded-full"
                    onClick={(e) =>
                        handleNavigator(
                            "dialsNavigators",
                            e,
                            2,
                            "imgContainer3",
                            1,
                            dials
                        )
                    }
                >
                    {" "}
                    Dials
                </div>
                <div
                    className="mx-1 text-[10px] sm:text-xs md:text-sm w-[70px] sm:w-24 md:w-32  text-center rounded-full"
                    onClick={(e) =>
                        handleNavigator(
                            "bezzelsNavigators",
                            e,
                            1,
                            "imgContainer2",
                            2,
                            bazzels
                        )
                    }
                >
                    Bezels
                </div>

                <div
                    className="mx-1 sm:text-xs md:text-sm  w-28 md:w-32  text-center text-[10px] rounded-full"
                    onClick={(e) =>
                        handleNavigator("extraStrapsNavigator", e, 3, "imgContainer4")
                    }
                >
                    Extra straps
                </div>
            </div>
        </div>
    )
}

export default Navigator