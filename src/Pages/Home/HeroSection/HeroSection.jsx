import { useContext, useEffect, useState } from "react";

import RightArrow from "../../../assets/HomePageImg/RightArrow.svg";
import LeftArrow from "../../../assets/HomePageImg/LeftArrow.svg";
import EditIcon from "../../../assets/HomePageImg/EditIcon.png";
import EditIconWhite from "../../../assets/HomePageImg/Edit.png";

// import ConfigureDrawer_3 from '../ConfigureDrawer_3/ConfigureDrawer_3';
// import ConfigureDrawer_1 from '../ConfigureDrawer_1/ConfigureDrawer_1';
// import ConfigureDrawer_2 from '../ConfigureDrawer_2/ConfigureDrawer_2';
import SERVER_URL from "../../../Shared/config";
import { Link, useNavigate } from "react-router-dom";
import ToggleButton from "../../../Utils/ToggleButton/ToggleButton";
import { toast } from "react-hot-toast";
import TeimpoWhitelogo from "../../../assets/TiempoWhiteLogo.png";
import TiempoBlacklogo from "../../../assets/TiempoBlackLogo.png";

import logout from "../../../assets/logout.svg";

import bannerImage1 from "../../../assets/blue.png";
import bannerImage2 from "../../../assets/green.png";
import bannerImage3 from "../../../assets/red.png";

import Hero41mmWhite from "../../../assets/HomePageImg/36mmHeroWhite.svg";
import Hero36mmWhite from "../../../assets/HomePageImg/41mmHeroWhite.svg";

import Hero41mmBlack from "../../../assets/HomePageImg/36mmHeroBlack.svg";
import Hero36mmBlack from "../../../assets/HomePageImg/41mmHeroBlack.svg";

import { Context } from "../../../Context/MainContext";
import Bgimage from "../../../assets/Hero-bg.png";

import { useSliderContext } from "../../../Context/Slider_context";

const banners = [
  { color: "", content: "Banner 1 Content" },
  { color: "", content: "Banner 1 Content" },
  { color: "", content: "Banner 1 Content" },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setClick } = useSliderContext();
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + banners.length) % banners.length);
  };

  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const handleLogOut = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  //Hero section

  useEffect(() => {
    const getRole = async (token) => {
      try {
        const response = await fetch(`${SERVER_URL}/user/status`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          const json = await response.json();
          if (json?.data?.role === "admin") {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
        }
      } catch (error) {
        toast.error(error.response?.data?.error);
      }
    };
    const token = localStorage.getItem("token");
    if (token) {
      getRole(token);
    } else {
      setIsAdmin(false);
    }
  }, []);
  const { isDark } = useContext(Context);

  return (
    <div
      className="bg-cover mid-xl:bg-contain  xxxl:pt-[420px] xxl:pt-72 xl:pt-64 mid-xl:pt-48 bg-center md:bg-contain bg-no-repeat  "
      style={{ backgroundImage: `url(${Bgimage})` }}
    >
      <div
        className={`w-full lg:h-screen md:h-[920px] 
       
        relative transition-all duration-300 ease-in-out`}
      >
        <div
          className={`fixed backdrop-blur-xl top-0 right-0 w-full z-50 ${
            isDark ? "bg-black/50" : "bg-white/50"
          }`}
        >
          <div className="flex justify-between items-center px-5 lg:px-40 py-2">
            <ToggleButton />
            {isDark ? (
              <>
                {isAdmin ? (
                  <Link to={"/adminUsers"}>
                    <img
                      src={TeimpoWhitelogo}
                      alt="logo"
                      className="w-16 h-16 mr-5 md:mr-8 lg:mr-5"
                    />
                  </Link>
                ) : (
                  <img
                    src={TeimpoWhitelogo}
                    alt="logo"
                    className="w-16 h-16 mr-5 md:mr-8 lg:mr-5"
                  />
                )}
              </>
            ) : (
              <>
                {isAdmin ? (
                  <Link to={"/adminUsers"}>
                    <img
                      src={TiempoBlacklogo}
                      alt="logo"
                      className="w-16 h-16 mr-5 md:mr-8 lg:mr-5"
                    />
                  </Link>
                ) : (
                  <img
                    src={TiempoBlacklogo}
                    alt="logo"
                    className="w-16 h-16 mr-5 md:mr-8 lg:mr-5"
                  />
                )}
              </>
            )}

            {localStorage.getItem("token") ? (
              <img
                className={`text-sm cursor-pointer w-16 h-16`}
                src={logout}
                alt=""
                onClick={handleLogOut}
              />
            ) : (
              <div />
            )}
          </div>
        </div>

        <div className="flex justify-center items-center h-[400px] mid-sm:h-[800px] lg:h-[650px] lg:mt-0 md:mt-0 lg:pt-14">
          {isDark ? (
            <div className="">
              <img
                src={Hero36mmWhite}
                className="lg:w-[180px] lg:h-[200px] md:w-[145px] md:h-[165px] w-[90px] h-[100px]"
                alt=""
              />
            </div>
          ) : (
            <div className="">
              <img
                src={Hero36mmBlack}
                className="lg:w-[180px] lg:h-[200px] md:w-[145px] md:h-[165px] w-[90px] h-[100px]"
                alt=""
              />
            </div>
          )}

          {currentIndex === 0 && (
            <img
              src={bannerImage1}
              alt=""
              className=" lg:mx-14 md:mx-6 mx-2  h-[300px] sm:[450px] md:h-[500px] lg:h-[480px] xxxl:h-[600px] z-10 md:py-16 py-4"
              // data-aos="fade-right"
              // data-aos-offset="300"
              // data-aos-easing="ease-in-sine"
            />
          )}
          {currentIndex === 1 && (
            <img
              src={bannerImage2}
              alt=""
              className=" lg:mx-14 md:mx-6 mx-2  h-[300px] sm:[450px] md:h-[500px] lg:h-[480px] z-10 md:py-16 py-4 xxxl:h-[600px]"
              // data-aos="fade-right"
              // data-aos-offset="300"
              // data-aos-easing="ease-in-sine"
            />
          )}
          {currentIndex === 2 && (
            <img
              src={bannerImage3}
              alt=""
              className=" lg:mx-14 md:mx-6 mx-2  h-[300px] sm:[450px] md:h-[500px] lg:h-[480px] z-10 md:py-16 py-4 xxxl:h-[600px]"
              // data-aos="fade-right"
              // data-aos-offset="300"
              // data-aos-easing="ease-in-sine"
            />
          )}

          {isDark ? (
            <div>
              <img
                className="lg:w-[180px] lg:h-[200px] md:w-[145px] md:h-[165px] w-[90px] h-[100px]"
                src={Hero41mmWhite}
                alt=""
              />
            </div>
          ) : (
            <div>
              <img
                className="lg:w-[180px] lg:h-[200px] md:w-[145px] md:h-[165px] w-[90px] h-[100px]"
                src={Hero41mmBlack}
                alt=""
              />
            </div>
          )}
        </div>
        {/* <p className={`absolute md:top-[35%] lg:top-[35%] mid-xl:top-[38%] xl:top-[37%] md:left-[20%] xxl:top-[37%] xxxl:top-[27%] lg:left-[21%] mid-xl:left-[27%] xl:left-[29%] xxl:left-[30%] xxxl:left-[30%] uppercase text-4xl md:text-7xl lg:text-8xl xxxl:text-9xl  font-bold  hidden md:block ${isDark ? 'text-white' : 'text-[#404040]'}`}
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos="fade-left">
          <span className=''>DateJust 41
          </span>
        </p> */}

        <div
          className={`absolute md:bottom-24 lsc-mob:bottom-64 mid-sm:bottom-24 lg:bottom-20 xl:bottom-24 mid-xl:bottom-24 left-5 right-0 flex  justify-center items-center z-20  ${
            isDark ? "text-[#A6A6A6]" : "text-black"
          }`}
        >
          0{currentIndex + 1}/0{banners.length}
          <div className="flex justify-center items-center ">
            <div className="relative">
              {currentIndex === 0 && (
                <Link
                  to={"/configure/1"}
                  onClick={() => setClick("1")}
                  className={`border border-gray-300 rounded-full text-gray-950 flex items-center gap-4 ml-4  drop-shadow-[#7D9EAC] md:px-9 px-5 lg:text-[18px] md:text-[15px] text-[12px] uppercase  py-3 ${
                    isDark ? "bg-[#FCFCFC15] text-white" : "bg-[#ffff]"
                  } `}
                >
                  <span>
                    {isDark ? (
                      <img
                        className="md:w-[22px] md:h-[22px] w-[16px] :h-[16px]"
                        src={EditIconWhite}
                        alt=""
                      />
                    ) : (
                      <img
                        className="md:w-[22px] md:h-[22px] w-[16px] :h-[16px]"
                        src={EditIcon}
                        alt=""
                      />
                    )}
                  </span>
                  Configure
                </Link>
              )}
              {currentIndex === 1 && (
                <Link
                  to={"/configure/1"}
                  onClick={() => setClick("2")}
                  className={`border border-gray-300 rounded-full text-gray-950 flex items-center gap-4 ml-4  drop-shadow-[#7D9EAC] md:px-9 px-5 lg:text-[18px] md:text-[15px] text-[12px] uppercase  py-3 ${
                    isDark ? "bg-[#FCFCFC15] text-white" : "bg-[#ffff]"
                  } `}
                >
                  <span>
                    {isDark ? (
                      <img
                        className="md:w-[22px] md:h-[22px] w-[16px] :h-[16px]"
                        src={EditIconWhite}
                        alt=""
                      />
                    ) : (
                      <img
                        className="md:w-[22px] md:h-[22px] w-[16px] :h-[16px]"
                        src={EditIcon}
                        alt=""
                      />
                    )}
                  </span>
                  Configure
                </Link>
              )}

              {currentIndex === 2 && (
                <Link
                  to={"/configure/1"}
                  onClick={() => setClick("3")}
                  className={`border border-gray-300 rounded-full text-gray-950 flex items-center gap-4 ml-4  drop-shadow-[#7D9EAC] md:px-9 px-5 lg:text-[18px] md:text-[15px] text-[12px] uppercase  py-3 ${
                    isDark ? "bg-[#FCFCFC15] text-white" : "bg-[#ffff]"
                  } `}
                >
                  <span>
                    {isDark ? (
                      <img
                        className="md:w-[22px] md:h-[22px] w-[16px] :h-[16px]"
                        src={EditIconWhite}
                        alt=""
                      />
                    ) : (
                      <img
                        className="md:w-[22px] md:h-[22px] w-[16px] :h-[16px]"
                        src={EditIcon}
                        alt=""
                      />
                    )}
                  </span>
                  Configure
                </Link>
              )}
              {/* <div
                className={`w-full fixed z-10 top-0 right-0 h-screen bg-opacity-50 transition-transform duration-300 ease-in-out transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
                  }`}
              >
                <div className="h-screen bg-white">
                  <button
                    onClick={toggleDrawer}
                    className={`absolute p-4 ${currentIndex === 0 && 'text-black'} text-[#ffff] lg:text-[15px] md:text-13px text-[12px] font-bold  top-0 right-0 mt-20 mr-4 ${isDark ? 'text-white' : 'text-black'}`}
                  >
                    Close
                  </button>
                  {
                    currentIndex === 0 &&
                    <ConfigureDrawer_1 ></ConfigureDrawer_1>
                  }
                  {
                    currentIndex === 1 &&
                    <ConfigureDrawer_2 ></ConfigureDrawer_2>
                  }
                  {
                    currentIndex === 2 &&
                    <ConfigureDrawer_3 ></ConfigureDrawer_3>
                  }
                </div>
              </div> */}
            </div>
          </div>
          <div className="md:ml-5 mid-sm:ml-2 flex justify-center">
            <button
              className={`text-white text-xl   border  p-4 rounded-full mx-3 `}
              onClick={prevSlide}
            >
              {currentIndex === 0 && (
                <img
                  src={LeftArrow}
                  alt="left arrow"
                  className="md:w-4 md:h-4 mid-sm:w-3 mid-sm:h-3 w-2 h-2"
                />
              )}
              {currentIndex === 1 && (
                <img
                  src={LeftArrow}
                  alt="left arrow"
                  className="md:w-4 md:h-4 mid-sm:w-3 mid-sm:h-3 w-2 h-2"
                />
              )}
              {currentIndex === 2 && (
                <img
                  src={LeftArrow}
                  alt="left arrow"
                  className="md:w-4 md:h-4 mid-sm:w-3 mid-sm:h-3 w-2 h-2"
                />
              )}
            </button>
            <button
              className={`text-white text-xl   border  p-4 rounded-full  `}
              onClick={nextSlide}
            >
              {currentIndex === 0 && (
                <img
                  src={RightArrow}
                  alt="right arrow"
                  className="md:w-4 md:h-4 mid-sm:w-3 mid-sm:h-3 w-2 h-2"
                />
              )}
              {currentIndex === 1 && (
                <img
                  src={RightArrow}
                  alt="right arrow"
                  className="md:w-4 md:h-4 mid-sm:w-3 mid-sm:h-3 w-2 h-2"
                />
              )}
              {currentIndex === 2 && (
                <img
                  src={RightArrow}
                  alt="right arrow"
                  className="md:w-4 md:h-4 mid-sm:w-3 mid-sm:h-3 w-2 h-2"
                />
              )}
              {/* &gt; */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
