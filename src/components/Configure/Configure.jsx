import React, { useContext, useEffect, useState } from "react";
import "./configure.css";
import { useSliderContext } from "../../Context/Slider_context";
import { Link, useNavigate, useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import logoBlack from "../../assets/TiempoBlackLogo.png";
import logout from "../../assets/logout.svg";

import logo from "../../assets/TiempoWhiteLogo.png";
import SERVER_URL from "../../Shared/config";
import toast from "react-hot-toast";
import ToggleButton from "../../Utils/ToggleButton/ToggleButton";
import { Context } from "../../Context/MainContext";

const Configure = () => {
  const { isDark } = useContext(Context);

  // __________________--------_______________________________________

  var settings = {
    // dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 16,
    slidesToScroll: 16,
    speed: 700,
    // centerPadding: '50px',
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          arrows: true,
          slidesToShow: 16,
          slidesToScroll: 16,
          infinite: false,
          speed: 700,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          arrows: true,
          slidesToShow: 15,
          slidesToScroll: 15,
          infinite: false,
          speed: 700,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 10,
          slidesToScroll: 10,
          infinite: false,
          speed: 700,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 14,
          slidesToScroll: 14,
          infinite: false,
          speed: 700,
        },
      },
      {
        breakpoint: 640,
        settings: {
          arrows: true,
          slidesToShow: 8,
          slidesToScroll: 8,
          speed: 700,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 6,
          slidesToScroll: 6,
          speed: 700,
        },
      },
    ],
  };
  // --------------------------------------------------------------
  const {
    straps,
    dialsBAGUETTE,
    dialsBRUSHED,
    dialsROMAN,
    bazzels,
    initialWatch,
    activator,
    activeWatch,
    bazzelsActivator,
    dialsActivator,
    dials,
    extraStraps,
    extraStrapsActivator,
    extraStrap,

    selectedSize,
    setSelectedSize,
    selectedExtraStrapsIndex,
    extraStrapsSelector,
  } = useSliderContext();

  const { selected } = useParams();
  useEffect(() => {
    // console.log(extraStrap, "initialextraStrap watch")
  }, [extraStrap]);

  useEffect(() => {
    const navigator2Child = document.querySelectorAll(".nanigator2 div")[0];
    navigator2Child.style.background = "black";
    navigator2Child.style.color = "white";
    navigator2Child.style.border = "solid white 1px";
    document.getElementsByClassName("textContainer2")[selected].style.display =
      "block";

    document.getElementsByClassName("strapsNavigators")[0].style.display =
      "flex";
    document.getElementsByClassName("sliderContainer")[0].style.display =
      "flex";

    document.getElementsByClassName("bezzleHide")[0].style.display = "none";

    bazzels.map((i, index) => {
      document.getElementsByClassName("imgContainer2")[index].style.left = `${
        index * 200
      }%`;
    });
    dials.map((i, index) => {
      document.getElementsByClassName("imgContainer3")[index].style.left = `${
        index * 200
      }%`;
    });
    extraStraps.map((i, index) => {
      document.getElementsByClassName("imgContainer4")[index].style.left = `${
        index * 200
      }%`;
    });
  }, []);
  // EPIA = element postion in array
  const handleNavigator = (
    className,
    e,
    navigatorIndex,
    imgContainerclassName,
    EPIA,
    loopProperty
  ) => {
    const innerwidth = window.innerWidth;

    const navigator2Childs = document.querySelectorAll(".nanigator2 div");
    for (let div of navigator2Childs) {
      div.style.background = "white";
      div.style.color = "black";
      div.style.border = "1px solid white";
    }

    e.target.style.background = "black";
    e.target.style.color = "white";
    e.target.style.border = "1px solid white";

    document.getElementsByClassName("dialsNavigators")[0].style.display =
      "none";
    document.getElementsByClassName("dialsNavigators")[1].style.display =
      "none";
    document.getElementsByClassName("bezzelsNavigators")[0].style.display =
      "none";
    document.getElementsByClassName("bezzelsNavigators")[1].style.display =
      "none";
    document.getElementsByClassName("strapsNavigators")[0].style.display =
      "none";
    document.getElementsByClassName("extraStrapsNavigator")[0].style.display =
      "none";

    if (className == "dialsNavigators" && innerwidth < 1024) {
      // window.alert("lessw")
      document.getElementsByClassName("dialsNavigators")[1].style.display =
        "block";
    }
    if (className == "dialsNavigators" && innerwidth >= 1024) {
      // window.alert("gretter")
      document.getElementsByClassName("dialsNavigators")[0].style.display =
        "flex";
    }

    if (className == "bezzelsNavigators" && innerwidth < 1024) {
      // window.alert("lessw")
      document.getElementsByClassName("bezzelsNavigators")[1].style.display =
        "block";
    }
    if (className == "bezzelsNavigators" && innerwidth >= 1024) {
      document.getElementsByClassName("bezzelsNavigators")[0].style.display =
        "flex";
    }

    if (className != "dialsNavigators" && className != "bezzelsNavigators") {
      document.getElementsByClassName(className)[0].style.display = "flex";
    }

    const sliderContainer = document.getElementsByClassName("sliderContainer");
    for (let i of sliderContainer) {
      i.style.display = "none";
    }
    sliderContainer[navigatorIndex].style.display = "block";
    // now change in moveable part according to previous state like change bazzels in bazzels slider based on other sliders bazzels postion
    const activeElement = document.getElementsByClassName(
      "imgContainerclassName"
    )[initialWatch[activeWatch][EPIA][3]];
    activeElement.style.left = "0%";
    const greaterThan = [];
    const lessThan = [];
    loopProperty.map((i, index) => {
      // console.log(index,'inddex')
      if (index < initialWatch[activeWatch][EPIA][3]) {
        lessThan.push(index);
      }
      if (index > initialWatch[activeWatch][EPIA][3]) {
        greaterThan.push(index);
      }
    });
    console.log(greaterThan, "greater than");
    greaterThan.map((i, index) => {
      document.getElementsByClassName(imgContainerclassName)[i].style.left = `${
        (index + 1) * 200
      }%`;
      document.getElementsByClassName(imgContainerclassName)[
        i
      ].style.transition = `all 1s`;
    });
    lessThan.map((i) => {
      document.getElementsByClassName(imgContainerclassName)[
        i
      ].style.left = `-${(lessThan.length - i) * 110}%`;
      document.getElementsByClassName(imgContainerclassName)[
        i
      ].style.transition = `all 1s`;
    });
  };

  //  ---------------------------------- -----------------------------initial positioning  on page load -------------------------------------------------------------
  useEffect(() => {
    const initSyle = () => {
      document.getElementsByClassName("textContainer")[selected].style.display =
        "block";
      if (selected == 0) {
        document.getElementsByClassName("imgContainer")[0].style.left = `${0}%`;
        document.getElementsByClassName(
          "imgContainer"
        )[1].style.left = `${200}%`;
      } else {
        document.getElementsByClassName(
          "imgContainer"
        )[0].style.left = `${-200}%`;
        document.getElementsByClassName("imgContainer")[1].style.left = `${0}%`;
      }
      // initialWatch.map((i, index) => {
      //     document.getElementsByClassName('imgContainer')[index].style.left = `${index * 200}%`

      // })
    };
    initSyle();
  }, []);

  // const extraStrapsHandler = (index) => {
  //     setExtraStrap(index)

  // }
  const navigate = useNavigate();

  const handleLogOut = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  //Hero section

  // initial default checked setup white page load
  useEffect(() => {
    // const inputs = document.querySelectorAll('input')
    const inputs = document.getElementsByClassName("ExtraStrapCheckoutInput");
    console.log("check input:", inputs);
    selectedExtraStrapsIndex.map((index) => {
      inputs[index].checked = true;
    });
  }, []);

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const totalSum =
      (selectedSize == 41
        ? initialWatch[activeWatch]?.[0][2]
        : initialWatch[activeWatch]?.[0][2] - 750) +
      initialWatch[activeWatch]?.[1][2] +
      (selectedSize == 41
        ? initialWatch[activeWatch]?.[2][2]
        : initialWatch[activeWatch]?.[2][2] - 500 > 0
        ? initialWatch[activeWatch]?.[2][2] - 500
        : 0);
    setTotalPrice(totalSum);
  }, [selectedSize]);

  return (
    <div
      className={`${
        isDark ? "bg-black" : "bg-white"
      } overflow-hidden md:h-screen xxxl:h-screen xl:h-screen xxl:h-screen h-screen md:overflow-auto lg:h-screen pb-5  `}
    >
      <div className="flex justify-between items-center px-5 lg:px-40 py-2">
        <ToggleButton />
        {isDark ? (
          <Link to={"/"}>
            <img
              src={logo}
              alt="logo"
              className="w-16 h-16 mr-10 md:mr-12 lg:mr-14"
            />
          </Link>
        ) : (
          <img
            src={logoBlack}
            alt="logo"
            className="w-16 h-16 mr-10 md:mr-12 lg:mr-8"
          />
        )}

        <img
          className={`text-sm cursor-pointer w-16 h-16`}
          src={logout}
          alt=""
          onClick={handleLogOut}
        />
      </div>

      <div className="flex gap-x-2 items-center absolute top-24 md:top-24 right-2 md:right-14 z-[9999]">
        <h1 className={`text-sm ${isDark ? "text-white" : "text-black"}`}>
          Size:
        </h1>
        <div className="text-sm flex gap-x-2">
          <button
            onClick={() => setSelectedSize("41")}
            className={`px-3 py-1 rounded-md ${
              selectedSize === "41"
                ? "bg-white text-black border border-gray-400"
                : "border border-transparent bg-black text-white"
            } 
                            `}
          >
            41
          </button>
          <button
            onClick={() => setSelectedSize("36")}
            className={`px-3 py-1  rounded-md   ${
              selectedSize === "36"
                ? "bg-white text-black border border-gray-400"
                : "border border-transparent bg-black text-white"
            }`}
          >
            36
          </button>
        </div>
      </div>
      <div className="absolute md:left-14 top-24 md:top-24 left-2  z-[9999]">
        <Link
          to="/checkout"
          className={`py-0.5   cursor-pointer   border-b-2 ${
            isDark ? "text-white border-white" : "text-black border-black"
          }`}
        >
          Checkout Now
        </Link>
      </div>

      {/*--------------------------------------------initial size selection part end--------------------------------------------- */}
      <div className="sliderContainer sliderContainer1">
        {/*--------------------------------------------slider 1 straps part start --------------------------------------------- */}
        <div className="slider1 slider flex flex-col md:flex-row ">
          <div className="itemContainer mt-10 md:mt-20 lg:mt-5">
            {initialWatch.map((item, index) => (
              <div key={index}>
                {/* text container */}
                <div className=" hidden mid-sm:block ">
                  <div
                    className={`textContainer  ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    <h3 className="text-sm mb-1">Model</h3>
                    <h3 className="mb-2 text-3xl lg:w-full w-3/4 font-medium uppercase">
                      {item[0][1]}
                    </h3>
                    <div
                      className={`text-sm capitalize  ${
                        isDark ? "text-gray-200" : "text-[#000]"
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
                  </div>
                </div>

                <div className="imgContainer">
                  <img
                    src={item[0][0]}
                    alt=""
                    className="img1 w-[90%] h-[70%] top-[50%] translate-y-[-50%] left-[4%] absolute"
                  />
                  <img
                    src={item[1][0]}
                    alt=""
                    className="img2 w-[40%] top-[44.5%] translate-y-[-50%] left-[28%] absolute"
                  />
                  <img
                    src={item[2][0]}
                    alt=""
                    className="img3 w-[46.5%] top-[44.5%] translate-y-[-50%] left-[25%] absolute"
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
                  className={`textContainer  ${
                    isDark ? "text-white" : "text-black"
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
      {/* ----------------------------------------------------------------slider two bezzels --------------------------------------------------------------  */}

      <div className="sliderContainer sliderContainer2">
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
                className="img2 translate-y-[-50%]  absolute  w-[40%] top-[44.3%]  left-[28%] "
              />
            }
            {bazzels?.map((item, index) => (
              <div key={index} className="imgContainer2">
                {
                  <img
                    src={item[0]}
                    alt="face"
                    className="img3 w-[69%] top-[44.5%] translate-y-[-50%] left-[37.5%] absolute"
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

      {/* ---------------------------------------------------------------slider dials three ---------------------------------------------------------------- */}
      <div className="sliderContainer sliderContainer2 ">
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
                    className="img2  translate-y-[-50%]  absolute  w-[40%] top-[44.5%]  left-[28%]"
                  />
                }
              </div>
            ))}
          </div>
          <div
            className={`${
              isDark ? "text-white" : "text-black"
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
              className={`mt-2 font-medium ${
                isDark ? "text-white" : "text-black"
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

      {/* ---------------------------------------------------------------slider extra straps  ---------------------------------------------------------------- */}

      <div className="sliderContainer sliderContainer2">
        <div className="slider1 slider flex flex-col md:flex-row justify-center items-center ">
          <div className="itemContainer itemContainer2 ">
            {
              <img
                src={initialWatch[activeWatch]?.[1][0]}
                alt="face"
                className="img2 translate-y-[-50%]  absolute  w-[41%] top-[44%]  left-[27.5%] z-[9999]"
              />
            }

            {
              <img
                src={initialWatch[activeWatch]?.[2][0]}
                alt="belt"
                className="img3 w-[48%] top-[44%] translate-y-[-50%] left-[24%] absolute z-30"
              />
            }
            {extraStraps.map((item, index) => (
              <div key={index} className="imgContainer imgContainer4">
                {
                  <img
                    src={item[0]}
                    alt="face"
                    className="img1 w-[100%] left-[2%] h-[70%] top-[50%] translate-y-[-50%] absolute"
                  />
                }
              </div>
            ))}
          </div>
          <div
            className={`${
              isDark ? "text-white" : "text-black"
            } md:flex justify-start flex-col hidden`}
          >
            <h3 className="text-xs">Rubber Straps</h3>
            <h3 className="w-3/4 ">Choose additional straps (+£500)</h3>
          </div>
        </div>
      </div>

      {/*--------------------------------------------navigator parts start   --------------------------------------------- */}
      <div className="navigatorContainers">
        <div className="navigator1  xl:my-5  mx-auto overflow-hidden">
          <div
            className="dialsNavigators  items-center justify-center gap-x-10 w-full overflow-hidden hidden"
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
            {straps?.map((dial, index) => (
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
          className="nanigator2  flex items-center pt-2 pb-1 relative left-[3%] mid-xs:left-[0%] md:mt-3 
         sm:left-[10%] -bottom-6  md:static"
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

      {/*--------------------------------------------navigator parts end   --------------------------------------------- */}
      {/* <img src={dials1} alt="" /> */}
    </div>
  );
};

export default Configure;
