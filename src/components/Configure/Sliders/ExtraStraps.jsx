/* eslint-disable react/prop-types */
const ExtraStraps = ({ initialWatch, activeWatch, isDark, extraStraps, setInvoiceMod }) => {
    return (
        <div className="sliderContainer sm:-mt-10 md:mt-0 sliderContainer2">
            <div className="slider1 slider flex flex-col md:flex-row justify-center items-center ">
                <div className="itemContainer itemContainer2 ">
                    {
                        <img
                            src={initialWatch[activeWatch]?.[1][0]}
                            alt="face"
                            className="img2  sm:scale-75 md:scale-100 sm:translate-y-[-29%] md:translate-y-[-50%] mobile:translate-y-[-50%]  absolute  w-[41%] top-[44%]  left-[27.5%] z-[9999]"
                        />
                    }

                    {
                        <img
                            src={initialWatch[activeWatch]?.[2][0]}
                            alt="belt"
                            className="img3 w-[48%] top-[44%] sm:scale-75 md:scale-100 md:translate-y-[-50%] mobile:translate-y-[-50%] sm:translate-y-[-32%] left-[24%] absolute z-30"
                        />
                    }
                    {extraStraps.map((item, index) => (
                        <div key={index} className="imgContainer imgContainer4">
                            {
                                <img
                                    src={item[0]}
                                    alt="face"
                                    className="img1 w-[100%] left-[2%] h-[70%] top-[50%] md:translate-y-[-50%] mobile:translate-y-[-50%] sm:translate-y-[-70%] sm:scale-75 md:scale-100 absolute object-cover"
                                />
                            }
                        </div>
                    ))}
                </div>
                <div
                    className={`${isDark ? "text-white" : "text-black"
                        } md:flex justify-start flex-col hidden`}
                >
                    <h3 className="text-xs">Rubber Straps</h3>
                    <h3 className="w-3/4 ">Choose additional straps (+£500)</h3>
                    <button onClick={() => setInvoiceMod(true)} className="bg-white text-black rounded-xl uppercase my-2 font-medium mt-10 px-10 py-2">
                                        confirm order
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ExtraStraps