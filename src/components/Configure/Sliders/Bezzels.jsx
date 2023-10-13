/* eslint-disable react/prop-types */

const Bezzels = ({ initialWatch, activeWatch, bazzels, isDark, selectedSize }) => {
    return (
        <div className="sliderContainer sm:-mt-10 md:mt-0 sliderContainer2">
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
                            src={initialWatch[activeWatch]?.[1][0]}
                            alt="belt"
                            className="img2 md:translate-y-[-50%] mobile:translate-y-[-50%] sm:translate-y-[-62%]  absolute  w-[40%] top-[44.3%]  left-[28%] "
                        />
                    }
                    {bazzels?.map((item, index) => (
                        <div key={index} className="imgContainer2">
                            {
                                <img
                                    src={item[0]}
                                    alt="face"
                                    className="img3 w-[69%] top-[44.5%] md:translate-y-[-50%] mobile:translate-y-[-50%] sm:translate-y-[-120%] left-[37.5%] absolute"
                                />
                            }
                        </div>
                    ))}
                </div>
                <div className={`${isDark ? "text-white" : "text-black"}`}>
                    <div className="hidden md:block">
                        {/* <p className='text-xs mb-2'>Step 3/3</p> */}
                        <h3 className="text-sm mb-1">Bezels</h3>
                        <h3 className="mb-2 text-3xl w-3/4 ">
                            {initialWatch[activeWatch]?.[2][1]}
                        </h3>
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
                    </div>

                    <h3></h3>
                </div>
            </div>
        </div>
    )
}

export default Bezzels