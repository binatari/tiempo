import { useEffect, useState } from "react";
import starp1 from "../assets/BODY/Body default.png";
import starp2 from "../assets/BODY/Body.png";
// dials baguettel
import dialsBAGUETTE1 from "../assets/1K Renders rolex watch/Baguette watch/Dial/Black.png";
import dialsBAGUETTE2 from "../assets/1K Renders rolex watch/Baguette watch/Dial/Blue.png";
import dialsBAGUETTE3 from "../assets/1K Renders rolex watch/Baguette watch/Dial/Green.png";
import dialsBAGUETTE4 from "../assets/1K Renders rolex watch/Baguette watch/Dial/Grey.png";
import dialsBAGUETTE5 from "../assets/1K Renders rolex watch/Baguette watch/Dial/Pink.png";
import dialsBAGUETTE6 from "../assets/1K Renders rolex watch/Baguette watch/Dial/Purple.png";
import dialsBAGUETTE7 from "../assets/1K Renders rolex watch/Baguette watch/Dial/Red.png";
import dialsBAGUETTE8 from "../assets/1K Renders rolex watch/Baguette watch/Dial/White.png";
// dials BRUSHED
import dialsBRUSHED1 from "../assets/1K Renders rolex watch/Rolex rubberband watch/Dial/Black.png";
import dialsBRUSHED2 from "../assets/1K Renders rolex watch/Rolex rubberband watch/Dial/Blue.png";
import dialsBRUSHED3 from "../assets/1K Renders rolex watch/Rolex rubberband watch/Dial/Green.png";
import dialsBRUSHED4 from "../assets/1K Renders rolex watch/Rolex rubberband watch/Dial/Gray.png";
import dialsBRUSHED5 from "../assets/1K Renders rolex watch/Rolex rubberband watch/Dial/Pink.png";
import dialsBRUSHED6 from "../assets/1K Renders rolex watch/Rolex rubberband watch/Dial/Dark-Blue.png";
import dialsBRUSHED7 from "../assets/1K Renders rolex watch/Rolex rubberband watch/Dial/Red.png";
import dialsBRUSHED8 from "../assets/1K Renders rolex watch/Rolex rubberband watch/Dial/White.png";
import dialsBRUSHED9 from "../assets/1K Renders rolex watch/Rolex rubberband watch/Dial/Blue Logo.png";

// dials ROMAN
import dialsROMAN1 from "../assets/1K Renders rolex watch/Double Diamond rolex watch/Dial/Black.png";
import dialsROMAN2 from "../assets/1K Renders rolex watch/Double Diamond rolex watch/Dial/Blue.png";
import dialsROMAN3 from "../assets/1K Renders rolex watch/Double Diamond rolex watch/Dial/Green.png";
import dialsROMAN4 from "../assets/1K Renders rolex watch/Double Diamond rolex watch/Dial/Grey.png";
import dialsROMAN5 from "../assets/1K Renders rolex watch/Double Diamond rolex watch/Dial/Pink.png";
import dialsROMAN6 from "../assets/1K Renders rolex watch/Double Diamond rolex watch/Dial/Purple.png";
import dialsROMAN7 from "../assets/1K Renders rolex watch/Double Diamond rolex watch/Dial/Red.png";
import dialsROMAN8 from "../assets/1K Renders rolex watch/Double Diamond rolex watch/Dial/White.png";

// bezzels
import bezzel1 from "../assets/bezzels/Default.png";
import bezzel2 from "../assets/bezzels/02.png";
import bezzel3 from "../assets/bezzels/01.png";
import bezzel4 from "../assets/bezzels/blue.png"; //
import bezzel5 from "../assets/bezzels/green.png"; //
import bezzel6 from "../assets/bezzels/Red.png"; //
import bezzel10 from "../assets/bezzels/Black.png";//
import bezzel12 from "../assets/bezzels/Pink.png"; //
import bezzel13 from "../assets/bezzels/Purple.png"; //
import bezzel14 from "../assets/bezzels/grey.png"; //
import bezzel16 from "../assets/bezzels/blue-d.png"; //
// extra straps
import extraStarp1 from "../assets/1K Renders rolex watch/Rolex rubberband watch/Body/Black strap.png";
import extraStarp2 from "../assets/1K Renders rolex watch/Rolex rubberband watch/Body/Blue strap.png";
import extraStarp3 from "../assets/1K Renders rolex watch/Rolex rubberband watch/Body/Green strap.png";
import extraStarp4 from "../assets/1K Renders rolex watch/Rolex rubberband watch/Body/Grey strap.png";
import extraStarp5 from "../assets/1K Renders rolex watch/Rolex rubberband watch/Body/Pink strap.png";
import extraStarp6 from "../assets/1K Renders rolex watch/Rolex rubberband watch/Body/Purple strap.png";
import extraStarp7 from "../assets/1K Renders rolex watch/Rolex rubberband watch/Body/Red strap.png";
import extraStarp8 from "../assets/1K Renders rolex watch/Rolex rubberband watch/Body/White strap.png";
// import extraStarp9 from '../assets/1K Renders rolex watch/Rolex rubberband watch/Body/White strap.png'
// NEW  DIALS

const useSlider = () => {
  const [size, setSize] = useState(10);

  const [activeWatch, setActiveWatch] = useState(0);
  const [extraStrap, setExtraStrap] = useState();
  const [selectedSize, setSelectedSize] = useState("41");
  const [selectedExtraStrapsIndex, setSelectedExtraStapsIndex] = useState([]);

  // 4th array element is array position in parents array
  const straps = [
    [starp1, "DATEJUST OYSTER", 11250, 0],
    [starp2, "DATEJUST JUBILEE", 12000, 1],
  ];

  const dialsBAGUETTE = [
    [dialsBAGUETTE1, "The Baguette Baton", 2500, 0],
    [dialsBAGUETTE2, "The Baguette Baton", 2500, 1],
    [dialsBAGUETTE3, "The Baguette Dial", 2500, 2],
    [dialsBAGUETTE4, "The Baguette Baton", 2500, 3],
    [dialsBAGUETTE5, "The Baguette Baton", 2500, 4],
    [dialsBAGUETTE6, "The Baguette Baton", 2500, 5],
    [dialsBAGUETTE7, "The Baguette Baton", 2500, 6],
    [dialsBAGUETTE8, "The Baguette Baton", 2500, 7],
  ];
  const dialsBRUSHED = [
    [dialsBRUSHED1, "The Brushed", 1000, 8],
    [dialsBRUSHED2, "The Brushed", 1000, 9],
    [dialsBRUSHED3, "The Brushed", 1000, 10],
    [dialsBRUSHED4, "The Brushed", 1000, 11],
    [dialsBRUSHED5, "The Brushed", 1000, 12],
    [dialsBRUSHED6, "The Brushed", 1000, 13],
    [dialsBRUSHED7, "The Brushed", 1000, 14],
    [dialsBRUSHED8, "The Brushed", 1000, 15],
    [dialsBRUSHED9, "The Brushed", 1000, 16]
  ];
  const dialsROMAN = [
    [dialsROMAN1, "Diamond Roman Numeral", 1500, 21],
    [dialsROMAN2, "Diamond Roman Numeral", 1500, 22],
    [dialsROMAN3, "Diamond Roman Numeral", 1500, 23],
    [dialsROMAN4, "Diamond Roman Numeral", 1500, 24],
    [dialsROMAN5, "Diamond Roman Numeral", 1500, 25],
    [dialsROMAN6, "Diamond Roman Numeral", 1500, 26],
    [dialsROMAN7, "Diamond Roman Numeral", 1500, 27],
    [dialsROMAN8, "Diamond Roman Numeral", 1500, 28],
  ];
  const dials = [...dialsBAGUETTE, ...dialsBRUSHED, ...dialsROMAN];
  const bazzels = [
    [bezzel1, "Domed", 0, 0],
    [bezzel3, "Diamond Double Row", 2500, 1],
    [bezzel2, "Diamond Single Row", 2500, 2],
    [bezzel10, "Baguette Sapphire Single Row", 2500, 9],
    [bezzel4, "Baguette Sapphire Single Row", 2500, 3],
    [bezzel5, "Baguette Sapphire Single Row", 2500, 4],
    [bezzel12, "Baguette Sapphire Single Row", 2500, 11],
    [bezzel13, "Baguette Sapphire Single Row", 2500, 12],
    [bezzel6, "Baguette Sapphire Single Row", 2500, 5],
    [bezzel14, "Baguette Sapphire Single Row", 2500, 13],
    [bezzel16, "Baguette Sapphire Single Row", 2500, 13],
  ];
  const extraStraps = [
    [extraStarp1, "des", 500, 0],
    [extraStarp2, "des", 500, 1],
    [extraStarp3, "des", 500, 2],
    [extraStarp4, "des", 500, 3],
    [extraStarp5, "des", 500, 4],
    [extraStarp6, "des", 500, 5],
    [extraStarp7, "des", 500, 6],
    [extraStarp8, "des", 500, 7],
  ];

  const [click, setClick] = useState(null);
  console.log(click);
  const initialWatchContainer = [
    [straps[0], dialsBAGUETTE[0], bazzels[0], 36],
    [straps[1], dialsBRUSHED[1], bazzels[1], 41],
  ];
  const [initialWatch, setInitialWatch] = useState(initialWatchContainer);

  useEffect(() => {
    if (click == "1") {
      setInitialWatch([
        [straps[0], dialsROMAN[1], bazzels[1], 36],
        [straps[1], dialsROMAN[1], bazzels[1], 41],
      ]);
    }
    if (click == "2") {
      setInitialWatch([
        [straps[0], dialsROMAN[2], bazzels[1], 36],
        [straps[1], dialsROMAN[2], bazzels[1], 41],
      ]);
    }
    if (click == "3") {
      setInitialWatch([
        [straps[0], dialsROMAN[6], bazzels[1], 36],
        [straps[1], dialsROMAN[6], bazzels[1], 41],
      ]);
    }
    if (click == "4") {
      setInitialWatch([
        [straps[0], dialsROMAN[3], bazzels[13], 36],
        [straps[1], dialsROMAN[3], bazzels[13], 41],
      ]);
    }
    if (click == "5") {
      setInitialWatch([
        [straps[0], dialsROMAN[5], bazzels[1], 36],
        [straps[1], dialsROMAN[5], bazzels[1], 41],
      ]);
    }
    if (click == "6") {
      setInitialWatch([
        [straps[0], dialsBRUSHED[3], bazzels[1], 36],
        [straps[1], dialsBRUSHED[3], bazzels[1], 41],
      ]);
    }
    if (click == "7") {
      setInitialWatch([
        [straps[0], dialsBAGUETTE[6], bazzels[13], 36],
        [straps[1], dialsBAGUETTE[6], bazzels[13], 41],
      ]);
    }
    if (click == "8") {
      setInitialWatch([
        [straps[0], dialsBAGUETTE[7], bazzels[3], 36],
        [straps[1], dialsBAGUETTE[7], bazzels[3], 41],
      ]);
    }
    if (click == "9") {
      setInitialWatch([
        [straps[0], dialsBRUSHED[2], bazzels[4], 36],
        [straps[1], dialsBRUSHED[2], bazzels[4], 41],
      ]);
    }
    //eslint-disable-next-line
  }, [click]);

  const activator = (activeIndex) => {
    const activeElement =
      document.getElementsByClassName("imgContainer")[activeIndex];
    activeElement.style.left = "0%";
    const textElement = document.getElementsByClassName("textContainer");

    const textcontainer1 = document.getElementsByClassName("textContainer2");

    for (let i of textcontainer1) {
      i.style.display = "none";
    }
    for (let i of textElement) {
      i.style.display = "none";
    }
    textElement[activeIndex].style.display = "block";
    textcontainer1[activeIndex].style.display = "block";
    const greaterThan = [];
    const lessThan = [];
    initialWatch.map((i, index) => {
      if (index < activeIndex) {
        lessThan.push(index);
      }
      if (index > activeIndex) {
        greaterThan.push(index);
      }
    });
    greaterThan.map((i, index) => {
      document.getElementsByClassName("imgContainer")[i].style.left = `${(index + 1) * 200
        }%`;
      document.getElementsByClassName("imgContainer")[
        i
      ].style.transition = `all 1s`;
    });
    lessThan.map((i) => {
      document.getElementsByClassName("imgContainer")[i].style.left = `-${(lessThan.length - i) * 110
        }%`;
      document.getElementsByClassName("imgContainer")[
        i
      ].style.transition = `all 1s`;
    });
    // now update the active element state
    // initialWatch
    setActiveWatch(activeIndex);
  };
  const bazzelsActivator = (activeBazzelsIndex) => {
    const activeElement =
      document.getElementsByClassName("imgContainer2")[activeBazzelsIndex];
    activeElement.style.left = "0%";
    const greaterThan = [];
    const lessThan = [];
    bazzels.map((i, index) => {
      if (index < activeBazzelsIndex) {
        lessThan.push(index);
      }
      if (index > activeBazzelsIndex) {
        greaterThan.push(index);
      }
    });
    greaterThan.map((i, index) => {
      document.getElementsByClassName("imgContainer2")[i].style.left = `${(index + 1) * 200
        }%`;
      document.getElementsByClassName("imgContainer2")[
        i
      ].style.transition = `all 1s`;
    });
    lessThan.map((i) => {
      document.getElementsByClassName("imgContainer2")[i].style.left = `-${(lessThan.length - i) * 110
        }%`;
      document.getElementsByClassName("imgContainer2")[
        i
      ].style.transition = `all 1s`;
    });

    // now made a change in initial watch
    // initialWatch[activeWatch][2]=bazzels[activeBazzelsIndex]
    const copyInitialWatch = [...initialWatch];
    copyInitialWatch[activeWatch][2] = bazzels[activeBazzelsIndex];
    setInitialWatch([...copyInitialWatch]);
  };
  const dialsActivator = (activeDialsIndex) => {
    console.log(activeDialsIndex);
    const activeElement =
      document.getElementsByClassName("imgContainer3")[activeDialsIndex];
    activeElement.style.left = "0%";
    const greaterThan = [];
    const lessThan = [];
    dials.map((i, index) => {
      if (index < activeDialsIndex) {
        lessThan.push(index);
      }
      if (index > activeDialsIndex) {
        greaterThan.push(index);
      }
    });
    greaterThan.map((i, index) => {
      document.getElementsByClassName("imgContainer3")[i].style.left = `${(index + 1) * 200
        }%`;
      document.getElementsByClassName("imgContainer3")[
        i
      ].style.transition = `all 1s`;
    });
    lessThan.map((i) => {
      document.getElementsByClassName("imgContainer3")[i].style.left = `-${(lessThan.length - i) * 110
        }%`;
      document.getElementsByClassName("imgContainer3")[
        i
      ].style.transition = `all 1s`;
    });
    // now made a change in initial watch
    const copyInitialWatch = [...initialWatch];
    copyInitialWatch[activeWatch][1] = dials[activeDialsIndex];
    setInitialWatch([...copyInitialWatch]);
  };

  const extraStrapsActivator = (activeExtraStrapsIndex) => {
    // set extra straps
    setExtraStrap(activeExtraStrapsIndex);
    const activeElement =
      document.getElementsByClassName("imgContainer4")[activeExtraStrapsIndex];
    activeElement.style.left = "0%";
    const greaterThan = [];
    const lessThan = [];
    extraStraps.map((i, index) => {
      if (index < activeExtraStrapsIndex) {
        lessThan.push(index);
      }
      if (index > activeExtraStrapsIndex) {
        greaterThan.push(index);
      }
    });
    greaterThan.map((i, index) => {
      document.getElementsByClassName("imgContainer4")[i].style.left = `${(index + 1) * 200
        }%`;
      document.getElementsByClassName("imgContainer4")[
        i
      ].style.transition = `all 1s`;
    });
    lessThan.map((i) => {
      document.getElementsByClassName("imgContainer4")[i].style.left = `-${(lessThan.length - i) * 110
        }%`;
      document.getElementsByClassName("imgContainer4")[
        i
      ].style.transition = `all 1s`;
    });
  };

  useEffect(() => {
    console.log(initialWatch, "initial from useeffect watch");
  }, [initialWatch]);

  const extraStrapsSelector = (e, indexValue) => {
    if (e.target.checked) {
      setSelectedExtraStapsIndex([...selectedExtraStrapsIndex, indexValue]);
    } else {
      let selected = selectedExtraStrapsIndex;
      const index = selected.indexOf(indexValue);

      selected.splice(index, 1);
      setSelectedExtraStapsIndex([...selected]);
    }
  };

  return {
    size,
    setSize,
    initialWatch,
    setInitialWatch,
    straps,
    dialsBAGUETTE,
    dialsBRUSHED,
    dialsROMAN,
    dials,
    bazzels,
    activator,
    activeWatch,
    bazzelsActivator,
    dialsActivator,
    extraStraps,
    extraStrapsActivator,
    extraStrap,
    setExtraStrap,
    selectedSize,
    setSelectedSize,
    setClick,
    click,
    extraStrapsSelector,
    selectedExtraStrapsIndex,
  };
};

export default useSlider;
