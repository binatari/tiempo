import { useContext, useEffect } from "react";
import "./configure.css";
import { useSliderContext } from "../../Context/Slider_context";
import { Link, useNavigate, useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoBlack from "../../assets/TiempoBlackLogo.png";
import logout from "../../assets/logout.svg";
import logo from "../../assets/TiempoWhiteLogo.png";
import ToggleButton from "../../Utils/ToggleButton/ToggleButton";
import { Context } from "../../Context/MainContext";
import InvoiceModal from "./InvoiceModal";
import SizeSelection from "./Sliders/SizeSelection";
import Bezzels from "./Sliders/Bezzels";
import Dials from "./Sliders/Dials";
import ExtraStraps from "./Sliders/ExtraStraps";
import Navigator from "./Navigators/Navigator";
import { settings } from "./data";

const Configure = () => {
  const { isDark, invoiceMod, setInvoiceMod } = useContext(Context);

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
    //extraStrap,
    selectedSize,
    setSelectedSize,
    selectedExtraStrapsIndex,
    extraStrapsSelector,
    setClick,
    click
  } = useSliderContext();

  const { selected } = useParams();

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
      document.getElementsByClassName("imgContainer2")[index].style.left = `${index * 200
        }%`;
    });
    dials.map((i, index) => {
      document.getElementsByClassName("imgContainer3")[index].style.left = `${index * 200
        }%`;
    });
    extraStraps.map((i, index) => {
      document.getElementsByClassName("imgContainer4")[index].style.left = `${index * 200
        }%`;
    });
    //eslint-disable-next-line
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
      document.getElementsByClassName(imgContainerclassName)[i].style.left = `${(index + 1) * 200
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
    //eslint-disable-next-line
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
    //eslint-disable-next-line
  }, []);

  const extraStrapSelected = extraStraps?.filter((v, i) => selectedExtraStrapsIndex?.includes(i));
  console.log(initialWatch[activeWatch])
  return (
    <>
      {invoiceMod ? <InvoiceModal extraStrapSelected={extraStrapSelected} currentWatch={initialWatch[activeWatch]} setInvoiceMod={setInvoiceMod} /> : <></>}

      <div
        className={`${isDark ? "bg-black" : "bg-white"
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
        
        <div className="flex w-full flex-row-reverse px-5 md:px-10 justify-between">

        <div className="flex gap-x-2 items-center  top-24 md:top-24 sm:top-16 right-2 md:right-14 z-[9999]">
          <h1 className={`text-sm mobile:hidden ${isDark ? "text-white" : "text-black"}`}>

          </h1>
          <div className="text-sm flex gap-x-2">
            <button
              onClick={() => setSelectedSize("41")}
              className={`px-3 py-1 rounded-md ${selectedSize === "41"
                ? "bg-white text-black border border-gray-400"
                : "border border-transparent bg-black text-white"
                } 
                            `}
            >
              41
            </button>
            <button
              onClick={() => setSelectedSize("36")}
              className={`px-3 py-1  rounded-md   ${selectedSize === "36"
                ? "bg-white text-black border border-gray-400"
                : "border border-transparent bg-black text-white"
                }`}
            >
              36
            </button>
          </div>
          <div className="text-sm flex gap-x-2">
            <button
              onClick={() => setClick('11')}
              className={`px-3 py-1 rounded-md ${click !== '10'
                ? "bg-white text-black border border-gray-400"
                : "border border-transparent bg-black text-white"
                } 
                            `}
            >
              Regular 
            </button>
            <button
              onClick={() => setClick('10')}
              className={`px-3 py-1  rounded-md   ${click == '10'
                ? "bg-white text-black border border-gray-400"
                : "border border-transparent bg-black text-white"
                }`}
            >
              Blacked out
            </button>
          </div>
        </div>
        <div className=" md:left-14 top-24 md:top-24 left-2 sm:top-16  z-[9999]">
          <Link
            to="/checkout"
            className={`py-0.5   cursor-pointer   border-b-2 ${isDark ? "text-white border-white" : "text-black border-black"
              }`}
          >  
           Buy now
          </Link>
        </div>
        </div>

        {/*--------------------------------------------initial size selection part end--------------------------------------------- */}
        <SizeSelection initialWatch={initialWatch} click={click} activeWatch={activeWatch} isDark={isDark}
          selectedSize={selectedSize} setInvoiceMod={setInvoiceMod} />

        {/* ----------------------------------------------------------------slider two bezzels --------------------------------------------------------------  */}
        <Bezzels initialWatch={initialWatch} activeWatch={activeWatch} isDark={isDark}
          selectedSize={selectedSize} bazzels={bazzels} />

        {/* ---------------------------------------------------------------slider dials three ---------------------------------------------------------------- */}
        <Dials initialWatch={initialWatch} activeWatch={activeWatch} isDark={isDark}
          selectedSize={selectedSize} dials={dials} />

        {/* ---------------------------------------------------------------slider extra straps  ---------------------------------------------------------------- */}

        <ExtraStraps
          initialWatch={initialWatch}
          activeWatch={activeWatch}
          isDark={isDark}
          extraStraps={extraStraps}
        />

        {/*--------------------------------------------navigator parts start   --------------------------------------------- */}
        <Navigator
          dialsBAGUETTE={dialsBAGUETTE}
          dialsBRUSHED={dialsBRUSHED}
          dialsROMAN={dialsROMAN}
          dialsActivator={dialsActivator}
          dials={dials}
          settings={settings}
          bazzels={bazzels}
          bazzelsActivator={bazzelsActivator}
          extraStraps={extraStraps}
          extraStrapsSelector={extraStrapsSelector}
          extraStrapsActivator={extraStrapsActivator}
          straps={straps}
          activator={activator}
          click={click}
          handleNavigator={handleNavigator}
        />

        {/*--------------------------------------------navigator parts end   --------------------------------------------- */}
        {/* <img src={dials1} alt="" /> */}
      </div>
    </>
  );
};

export default Configure;
