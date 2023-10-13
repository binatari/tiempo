/* eslint-disable react/prop-types */

const SizeSelection = ({ initialWatch, activeWatch, isDark, selectedSize, setInvoiceMod }) => {
    return (
        <div className="sliderContainer sm:-mt-10 md:mt-0 sliderContainer1">
            {/*--------------------------------------------slider 1 straps part start --------------------------------------------- */}
            <div className="slider1 slider flex flex-col md:flex-row ">
                <div className="itemContainer mt-10 md:mt-20 lg:mt-5">
                    {initialWatch.map((item, index) => (
                        <div key={index}>
                            {/* text container */}
                            <div className=" hidden mid-sm:block ">
                                <div
                                    className={`textContainer  ${isDark ? "text-white" : "text-black"
                                        }`}
                                >
                                    <h3 className="text-sm mb-1">Model</h3>
                                    <h3 className="mb-2 text-3xl lg:w-full w-3/4 font-medium uppercase">
                                        {item[0][1]}
                                    </h3>
                                    <div
                                        className={`text-sm capitalize  ${isDark ? "text-gray-200" : "text-[#000]"
                                            }`}
                                    >
                                        {initialWatch[activeWatch]?.[0][1]},
                                        <span className="mx-1">
                                            {selectedSize} <span className="normal-case">mm</span>
                                        </span>
                                        <p className="">{initialWatch[activeWatch]?.[1][1]}</p>
                                        <p>{initialWatch[activeWatch]?.[2][1]}</p>
                                    </div>
                                    {/* <h1>Total Price : £{totalPrice}</h1> */}
                                    <h1 className="mt-2 font-medium">
                                        <span>Watch Price :</span>
                                        <span className="mx-2">
                                            £
                                            {(selectedSize == 41
                                                ? initialWatch[activeWatch]?.[0][2]
                                                : initialWatch[activeWatch]?.[0][2] - 750) +
                                                initialWatch[activeWatch]?.[1][2] +
                                                (selectedSize == 41
                                                    ? initialWatch[activeWatch]?.[2][2]
                                                    : initialWatch[activeWatch]?.[2][2] - 500 > 0
                                                        ? initialWatch[activeWatch]?.[2][2] - 500
                                                        : 0)}
                                        </span>
                                    </h1>
                                    <button onClick={() => setInvoiceMod(true)} className="bg-white text-black rounded-xl uppercase my-2 font-medium mt-10 px-10 py-2">
                                        Checkout
                                    </button>

                                </div>
                            </div>

                            <div className="imgContainer">
                                <img
                                    src={item[0][0]}
                                    alt=""
                                    className="img1 w-[90%] h-[70%] md:top-[50%] mobile:top-[50%] sm:top-[30%] translate-y-[-50%] left-[4%] absolute"
                                />
                                <img
                                    src={item[1][0]}
                                    alt=""
                                    className="img2 w-[40%] md:top-[44.5%] mobile:top-[44.5%] sm:top-[24.5%] translate-y-[-50%] left-[28%] absolute"
                                />
                                <img
                                    src={item[2][0]}
                                    alt=""
                                    className="img3 w-[46.5%] md:top-[44.5%] mobile:top-[44.5%] sm:top-[24.5%] translate-y-[-50%] left-[25%] absolute"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className=" overflow-hidden mid-sm:hidden text-white">
                    {initialWatch.map((item, index) => (
                        <div
                            key={index}
                            className="textContainer2 block mid-sm:hidden mt-5 "
                        >
                            <div
                                className={`textContainer  ${isDark ? "text-white" : "text-black"
                                    }`}
                            >
                                <h3 className="text-xs mb-1">Bracelet</h3>
                                <h3 className="text-2xl font-medium uppercase">
                                    {item[0][1]}
                                </h3>
                                <h1>
                                    {/* <h3 className=''>{initialWatch[activeWatch]?.[0][1]}</h3>
                        <h3 className=''>{initialWatch[activeWatch]?.[0][2]}</h3>
                        <h3 className=''>{initialWatch[activeWatch]?.[1][1]}</h3>
                        <h3 className=''>{initialWatch[activeWatch]?.[1][2]}</h3> */}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/*--------------------------------------------slider 1 straps part end   --------------------------------------------- */}
        </div>
    )
}

export default SizeSelection