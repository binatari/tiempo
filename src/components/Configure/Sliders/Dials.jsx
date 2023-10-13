/* eslint-disable react/prop-types */

const Dials = ({ initialWatch, activeWatch, dials, isDark, selectedSize }) => {
    return (
        <div className="sliderContainer sm:-mt-10 md:mt-0 sliderContainer2 ">
            <div className="slider1 slider flex flex-col md:flex-row ">
                <div className="itemContainer itemContainer2 mt-5 md:mt-20  lg:mt-5">
                    {
                        <img
                            src={initialWatch[activeWatch]?.[0][0]}
                            alt="face"
                            className="img1 w-[90%] h-[70%] left-[4%] top-[50%] translate-y-[-50%] absolute"
                        />
                    }

                    {
                        <img
                            src={initialWatch[activeWatch]?.[2][0]}
                            alt="belt"
                            className="img3 w-[46%] top-[44.5%] translate-y-[-50%] left-[25%] absolute z-30"
                        />
                    }
                    {dials.map((item, index) => (
                        <div key={index} className="imgContainer imgContainer3">
                            {
                                <img
                                    src={item[0]}
                                    alt="face"
                                    className="img2 sm:translate-y-[-120%] md:translate-y-[-50%] mobile:translate-y-[-50%]  absolute  w-[40%] top-[44.5%]  left-[28%]"
                                />
                            }
                        </div>
                    ))}
                </div>
                <div
                    className={`${isDark ? "text-white" : "text-black"
                        } hidden md:block`}
                >
                    {/* <p className='mb-2 text-xs '>Step 2/3</p> */}
                    <h3 className=" text-sm mb-1">Dials</h3>
                    {/* <h3 className=''>{initialWatch[activeWatch]?.[0][1]}</h3>
                  <h3 className=''>{initialWatch[activeWatch]?.[0][2]}</h3> */}
                    <h3 className="w-3/4 text-3xl uppercase ">
                        {initialWatch[activeWatch]?.[1][1]}
                    </h3>

                    {/* extra */}

                    <h1
                        className={`mt-2 font-medium ${isDark ? "text-white" : "text-black"
                            }`}
                    >
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
                </div>
            </div>
        </div>
    )
}

export default Dials