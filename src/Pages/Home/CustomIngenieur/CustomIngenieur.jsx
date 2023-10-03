import React, { useState, useEffect, useContext } from "react";
import Watchimage1 from "../../../assets/HomePageImg/CustomIngeneurSlideImage/slide1.png";
import Watchimage2 from "../../../assets/HomePageImg/CustomIngeneurSlideImage/slide2.png";
import Watchimage3 from "../../../assets/HomePageImg/CustomIngeneurSlideImage/slide3.png";
import Watchimage4 from "../../../assets/HomePageImg/CustomIngeneurSlideImage/slide4.png";
import customIngeiorBg from "../../../assets/HomePageImg/CustomIngeneurSlideImage/customIngeiorBg.png";


import image1 from "../../../assets/HomePageImg/Dials/Dial-1.png";
import image2 from "../../../assets/HomePageImg/Dials/Dial-2.png";
import image3 from "../../../assets/HomePageImg/Dials/Dial-3.png";
import image4 from "../../../assets/HomePageImg/Dials/Dial-4.png";
import image5 from "../../../assets/HomePageImg/Dials/Dial-5.png";
import image6 from "../../../assets/HomePageImg/Dials/Dial-6.png";
import image7 from "../../../assets/HomePageImg/Dials/Dial-7.png";
import image8 from "../../../assets/HomePageImg/Dials/Dial-8.png";
import image9 from "../../../assets/HomePageImg/Dials/Dial-9.png";
import image10 from "../../../assets/HomePageImg/Dials/Dial-10.png";
import image11 from "../../../assets/HomePageImg/Dials/Dial-11.png";
import image12 from "../../../assets/HomePageImg/Dials/Dial-12.png";
import image13 from "../../../assets/HomePageImg/Dials/Dial-13.png";
import image14 from "../../../assets/HomePageImg/Dials/Dial-14.png";
import image15 from "../../../assets/HomePageImg/Dials/Dial-15.png";
import image16 from "../../../assets/HomePageImg/Dials/Dial-16.png";
import image17 from "../../../assets/HomePageImg/Dials/Dial-17.png";
import image18 from "../../../assets/HomePageImg/Dials/Dial-18.png";
import RightArrow from "../../../assets/HomePageImg/Dials/rightArrow.png";
import LeftArrow from "../../../assets/HomePageImg/Dials/leftArrow.png";

// import Bimage1 from '../../../assets/HomePageImg/Bezzel/Nbezzle-1';
// import Bimage2 from '../../../assets/HomePageImg/Bezzel/Nbezzle-2';
// import Bimage3 from '../../../assets/HomePageImg/Bezzel/Nbezzle-3';
// import Bimage4 from '../../../assets/HomePageImg/Bezzel/Nbezzle-4';
// import Bimage5 from '../../../assets/HomePageImg/Bezzel/Nbezzle-5';
// import Bimage6 from '../../../assets/HomePageImg/Bezzel/Nbezzle-6';

import Bimage1 from "../../../assets/HomePageImg/Bezzel/Nbezzle-1.svg";
import Bimage2 from "../../../assets/HomePageImg/Bezzel/Nbezzle-2.svg";
import Bimage3 from "../../../assets/HomePageImg/Bezzel/Nbezzle-3.svg";
import Bimage4 from "../../../assets/HomePageImg/Bezzel/Nbezzle-4.svg";
import Bimage5 from "../../../assets/HomePageImg/Bezzel/Nbezzle-5.svg";
import Bimage6 from "../../../assets/HomePageImg/Bezzel/Nbezzle-6.svg";

import Bodyimage1 from "../../../assets/HomePageImg/Body/NBody1.png";
import Bodyimage2 from "../../../assets/HomePageImg/Body/NBody2.png";
import Bodyimage3 from "../../../assets/HomePageImg/Body/NBody3.png";
import Bodyimage4 from "../../../assets/HomePageImg/Body/NBody4.png";
import Bodyimage5 from "../../../assets/HomePageImg/Body/NBody5.png";
import Bodyimage6 from "../../../assets/HomePageImg/Body/NBody6.png";
import Bodyimage7 from "../../../assets/HomePageImg/Body/NBody7.png";
import Bodyimage8 from "../../../assets/HomePageImg/Body/NBody8.png";
import Bodyimage9 from "../../../assets/HomePageImg/Body/NBody9.png";



import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Context } from "../../../Context/MainContext";


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CustomIngenieur = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [Watchimage1, Watchimage2, Watchimage3, Watchimage4];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => clearInterval(interval);
  }, []);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //Dial imagesFunction
  const [showFirstSlider, setShowFirstSlider] = useState(true);

  const toggleSlider = () => {
    setShowFirstSlider(!showFirstSlider);
  };

  const sliderImages1 = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];
  const sliderImages2 = [
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
  ];

  const BezzlesliderImages = [
    Bimage1,
    Bimage2,
    Bimage3,
    Bimage4,
    Bimage5,
    Bimage6,
  ];

  const BodyliderImages = [
    Bodyimage1,
    Bodyimage2,
    Bodyimage3,
    Bodyimage4,
    Bodyimage5,
    Bodyimage6,
    Bodyimage7,
    Bodyimage8,
    Bodyimage9,

  ];




  const activeSliderImages = showFirstSlider ? sliderImages1 : sliderImages2;
  const { isDark } = useContext(Context);

  return (
    <div className="md:mt-24 mt-5 "
      style={{
        backgroundImage: `url(${customIngeiorBg})`,
        backgroundRepeat: 'no-repeat',

      }}
    >
      <h1 className="text-center lg:text-[30px]  md:text-[27px] text-[24px] uppercase text-[#474A59]">CUSTOM INGENIEUR</h1>
      <hr className="border border-[#989898] w-28 mx-auto mt-8"/>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 my-10"

      >
        <div className="col-span-1 relative mx-auto mt-10 w-full h-[903.29px]">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute mid-xl:w-[313px] ml-32 mid-xl:h-[497px] lg:w-[210px] lg:h-[330px] w-[150px] h-[230px] mt-10 ${index === currentSlide ? "block" : "hidden"
                }`}
            />
          ))}
          <div className="absolute top-0 left-0 right-0 flex justify-center ">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 mx-1 rounded-full bg-[#D9D9D9] ${index === currentSlide ? "bg-[#929292]" : ""
                  }`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>

        <div className="col-span-1 w-9/12">
          <div className="p-4">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  className=""
                  variant="fullWidth"
                  textColor="#000"
                  indicatorColor="secondary"
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"

                >
                  <Tab
                    label="The dials"
                    {...a11yProps(0)}

                  />
                  <Tab
                    className="text-[28px]"
                    label="The Bezels"
                    {...a11yProps(1)}
                    style={{ color: '#474A59' }}
                  />
                  <Tab label="The Straps"
                    {...a11yProps(2)}
                  />
                </Tabs>
              </Box>

              <CustomTabPanel value={value} index={0}>
                <>
                  {isDark ? (
                    <div
                      className={`w-screen sm:mx-32 lg:mx-0 lg:gap-48 gap-10 grid lg:grid-cols-2 grid-cols-1 justify-between mid-xl:mt-10 mt-5 ${isDark && "bg-[#272c35]"
                        }`}
                    >
                      <div className="relative lg:w-10/12 w-3/5 mx-auto">
                        <div className="grid grid-cols-3 gap-5">
                          {activeSliderImages.map((image, index) => (
                            <div
                              key={index}
                              className="mid-xl:w-32 mid-xl:h-32 md:w-28 lg:w-20 lg:h-20 md:h-28 mid-sm:w-28 mid-sm:h-28 sm:w-24 sm:h-24 w-14 h-14"

                            />
                          ))}
                        </div>
                        <div className="flex items-center justify-center gap-3 mt-7">
                          <button
                            onClick={toggleSlider}
                            className="text-2xl text-gray-500 focus:outline-none"
                          >
                            <img
                              className="xl:w-[55px] xl:h-[55px] lg:w-[45px] lg:h-[45px] w-[40px] h-[40px]"
                              src={LeftArrow}
                              alt=""
                            />
                          </button>
                          <button
                            onClick={toggleSlider}
                            className="text-2xl text-gray-500 focus:outline-none"
                          >
                            <img
                              className="xl:w-[55px] xl:h-[55px] lg:w-[45px] lg:h-[45px] w-[40px] h-[40px]"
                              src={RightArrow}
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (

                    <div className="mid-xl:mt-10 mt-5 w-screen sm:mx-32 lg:mx-0 lg:gap-48 gap-10 grid lg:grid-cols-2 grid-cols-1 justify-between ">
                      <div className="relative lg:w-10/12 w-3/5 ">
                        <div className="grid grid-cols-3 gap-5">
                          {activeSliderImages.map((image, index) => (
                            <div
                              key={index}
                              className="mid-xl:w-32 mid-xl:h-32 md:w-28 lg:w-20 lg:h-20 md:h-28 mid-sm:w-28 mid-sm:h-28 sm:w-24 sm:h-24 w-14 h-14"
                              style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: "cover",
                              }}
                            />
                          ))}
                        </div>
                        <div className="flex items-center justify-center gap-3 mt-7">
                          <button
                            onClick={toggleSlider}
                            className="text-2xl text-gray-500 focus:outline-none"
                          >
                            <img
                              className="xl:w-[55px] xl:h-[55px] lg:w-[45px] lg:h-[45px] w-[40px] h-[40px]"
                              src={LeftArrow}
                              alt=""
                            />
                          </button>
                          <button
                            onClick={toggleSlider}
                            className="text-2xl text-gray-500 focus:outline-none"
                          >
                            <img
                              className="xl:w-[55px] xl:h-[55px] lg:w-[45px] lg:h-[45px] w-[40px] h-[40px]"
                              src={RightArrow}
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>

                <div
                  className=' mid-sm:mx-32 lg:mx-0 mt-10  w-screen bg-cover lg:gap-48 gap-10 grid lg:grid-cols-2 grid-cols-1 justify-between'
                >
                  <div className="relative lg:w-10/12 w-3/5 lg:text-start text-center">

                    <div className="grid grid-cols-3 gap-8">
                      {BezzlesliderImages?.map((image, index) => (
                        <div
                          key={index}
                          className="mid-xl:w-32 mid-xl:h-32 mid-sm:w-28 mid-sm:h-28 sm:w-20 sm:h-20 lg:w-20 lg:h-20"
                          style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>


                <div
                  className=' mid-sm:mx-32 lg:mx-0 mt-10  w-screen bg-cover lg:gap-48 gap-10 grid lg:grid-cols-2 grid-cols-1 justify-between'
                >
                  <div className="relative lg:w-10/12 w-3/5 lg:text-start text-center">

                    <div className="grid grid-cols-3 gap-8">
                      {BodyliderImages?.map((image, index) => (
                        <div
                          key={index}
                          className="mid-xl:w-[116px] mid-xl:h-[102px] mid-sm:w-28 mid-sm:h-28 sm:w-20 sm:h-20 lg:w-[80px] lg:h-[70px]"
                          style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>


              </CustomTabPanel>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomIngenieur;
