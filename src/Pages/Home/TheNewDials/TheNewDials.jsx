import { useContext } from "react";
import image from "../../../assets/Dials-section-bg.png";
import group1 from "../../../assets/group1.png";
import group2 from "../../../assets/group2.png";
import group3 from "../../../assets/group3.png";
import { Context } from "../../../Context/MainContext";

const TheNewDials = () => {
  const textData = [
    {
      image: group1,
      name: "THE BAGUETTE DIAL",
      detail: "A Diamond on the hour, every hour",
    },
    {
      image: group2,
      name: "THE BRUSHED DIAL",
      detail:
        "Fine grain stainless steel for the ultimate stealth wealth look.",
    },
    {
      image: group3,
      name: "THE DIAMOND ROMAN DIAL",
      detail: "A true classic with a diamond twist",
    },
  ];

  const { isDark } = useContext(Context);
  return (
    <div
      className=" mid-xl:mt-28 mt-14 lg:h-screen bg-auto bg-no-repeat bg-center xl:bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="py-10 lg:py-16">
        <h1
          className={`lg:text-[30px] md:text-[27px] text-[24px] uppercase text-center ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          The Dials
        </h1>
        <div className="h-[3px] border-b border-[#bdbdbd]  w-[100px] mx-auto pt-2"></div>
      </div>
      <div className="lg:w-[65%] mid-xl:w-[70%] mx-auto  py-5">
        <div className="flex flex-col gap-5 lg:gap-[53px] ">
          {textData?.map((text, index) => {
            const { name, detail, image } = text;
            return (
              <div
                key={index}
                className={`${
                  isDark ? "text-white" : "text-black"
                }  grid lg:grid-cols-3 gap-5 mid-xl:gap-x-[65px] gap-y-10 mid-xl:gap-y-10 items-center`}
              >
                <div className="lg:col-span-2 hidden lg:block">
                  <img
                    src={image}
                    alt=""
                    className="w-10/12 mid-xl:w-11/12  mx-auto "
                  />
                </div>
                <div className="lg:flex flex-col gap-3 mid-xl:gap-1 hidden">
                  <h1 className="text-[20px] mid-xl:text-[25px]">{name}</h1>
                  <p
                    className={`leading-[23.7px] mid-xl:text-[20px] ${
                      isDark ? "text-[#8C8C8C]" : "text-[#474A59]"
                    }`}
                  >
                    {detail}
                  </p>
                </div>
                <div className="lg:hidden order-1 lg:order-2 flex-col gap-3 mid-xl:gap-1 block ml-20">
                  <h1 className="text-[20px] mid-xl:text-[25px]">{name}</h1>
                  <p
                    className={`leading-[23.7px] mid-xl:text-[20px] ${
                      isDark ? "text-[#8C8C8C]" : "text-[#474A59]"
                    }`}
                  >
                    {detail}
                  </p>
                </div>

                <div className="lg:col-span-2 lg:hidden block order-2 lg:order-1">
                  <img
                    src={image}
                    alt=""
                    className="w-10/12 mid-xl:w-11/12  mx-auto "
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TheNewDials;
