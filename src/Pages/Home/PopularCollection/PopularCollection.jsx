/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import watchImg1 from "../../../assets/HomePageImg/CollectionImage/collectionImg1.png";
import watchImg2 from "../../../assets/HomePageImg/CollectionImage/collectionImg2.png";
import watchImg3 from "../../../assets/HomePageImg/CollectionImage/collectionImg3.png";
import watchImg4 from "../../../assets/HomePageImg/CollectionImage/collectionImg4.png";
import watchImg5 from "../../../assets/HomePageImg/CollectionImage/collectionImg5.png";
import watchImg6 from "../../../assets/HomePageImg/CollectionImage/collectionImg6.png";
// import loveIcon from "../../../assets/HomePageImg/CollectionImage/collectionImg1.png";

import PopularCollectionCard from "./PopularCollectionCard";
import { Context } from "../../../Context/MainContext";

const PopularCollection = () => {
  const PopularCollectionData = [
    {
      _id: '4',
      body:0,
      model: "New model",
      size: '41',
      watchHeadline: "Datejust Oyster",
      watchName: "Oyster, 41 mm, Steel",
      image: watchImg1,
      dialPriceData: 1000,
      bezelsPriceData: 2500,
      strapPriceData: 12000,
      bezel: 'model2',
      stripe: 'body1',
      dial: 'romanGray'
    },
    {
      _id: '5',
      body:1,
      model: "New model",
      size: '36',
      watchHeadline: "Datejust Jubilee",
      watchName: "Jubilee, 36 mm, Steel",
      image: watchImg2,
      dialPriceData: 1000,
      bezelsPriceData: 2500,
      strapPriceData: 12000,
      bezel: 'model3',
      stripe: 'body2',
      dial: 'romanPurple'
    },
    {
      _id: '6',
      body:1,
      model: "New model",
      size: '41',
      watchHeadline: "Datejust Jubilee",
      watchName: "Jubilee, 41 mm, Steel",
      image: watchImg3,
      dialPriceData: 1000,
      bezelsPriceData: 2500,
      strapPriceData: 12000,
      bezel: 'model2',
      stripe: 'body2',
      dial: 'brushWhite'
    },
    {
      _id: '7',
      body:0,
      model: "New model",
      size: '36',
      watchHeadline: "Datejust Oyster",
      watchName: "Oyster, 36 mm, Steel",
      image: watchImg4,
      dialPriceData: 1000,
      bezelsPriceData: 2500,
      strapPriceData: 12000,
      bezel: 'model2',
      stripe: 'body1',
      dial: 'baguetteRed'
    },
    {
      _id: '8',
      body:1,
      model: "New model",
      size: '41',
      watchHeadline: "Datejust Jubilee",
      watchName: "Jubilee, 41 mm, Steel",
      image: watchImg5,
      dialPriceData: 1000,
      bezelsPriceData: 2500,
      strapPriceData: 12000,
      bezel: 'model6',
      stripe: 'body2',
      dial: 'baguetteWhite'
    },
    {
      _id: '9',
      body:0,
      model: "New model",
      size: '36',
      watchHeadline: "Datejust Oyster",
      watchName: "Oyster, 36 mm, Steel",
      image: watchImg6,
      dialPriceData: 1000,
      bezelsPriceData: 2500,
      strapPriceData: 12000,
      bezel: 'model5',
      stripe: 'body1',
      dial: 'brushGreen'
    },
  ];
  const { isDark } = useContext(Context)

  return (
    <div className={` ${isDark && 'bg-[#000000]'} xl:mt-28 mt-20`}>
      <div className="">
        <div className="flex my-auto justify-center items-center flex-col">

          <div className="w-full h-full flex py-10 lg:py-10  justify-center items-center ">

            <span className="text-center">

              <h2 className={`lg:text-[30px]  md:text-[25px] text-[20px] py-5  font-semibold uppercase ${isDark ? 'text-white' : 'text-[#000000]'}`}>Popular designs </h2>
              <hr className="border border-[#989898] w-28 mx-auto mt-5" />
            </span>

          </div>

        </div>
      </div>

      <div className="xxl:w-11/12 w-full mx-auto grid mid-xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-8">
        {PopularCollectionData?.map((popularData, index) => (
          <PopularCollectionCard
            popularData={popularData}
            key={index}
            index={index}
          ></PopularCollectionCard>
        ))}
      </div>
    </div>
  );
};

export default PopularCollection;
