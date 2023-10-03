/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useGLTF } from "@react-three/drei";
import { createContext } from "react";

export const ModelContext = createContext();
const WatchModelContext = ({ children }) => {
  // Body

  function BlackBody(props) {
    const { scene } = useGLTF("/BLACK/BODY.gltf");
    return <primitive object={scene} {...props} />;
  }
  function BlueBody(props) {
    const { scene } = useGLTF("/BLUE/BODY.gltf");
    return <primitive object={scene} {...props} />;
  }
  function GreenBody(props) {
    const { scene } = useGLTF("/GREEN/BODY.gltf");
    return <primitive object={scene} {...props} />;
  }
  function GreyBody(props) {
    const { scene } = useGLTF("/GREY/BODY.gltf");
    return <primitive object={scene} {...props} />;
  }

  function PinkBody(props) {
    const { scene } = useGLTF("/PINK/BODY.gltf");
    return <primitive object={scene} {...props} />;
  }
  function PurpleBody(props) {
    const { scene } = useGLTF("/PURPLE/BODY.gltf");
    return <primitive object={scene} {...props} />;
  }
  function RedBody(props) {
    const { scene } = useGLTF("/RED/Body.gltf");
    return <primitive object={scene} {...props} />;
  }
  function WhiteBody(props) {
    const { scene } = useGLTF("/WHITE/BODY.glb");
    return <primitive object={scene} {...props} />;
  }
  function MetalBody1(props) {
    const { scene } = useGLTF("/MetalParts/MetalBody.glb");
    return <primitive object={scene} {...props} />;
  }
  function MetalBody2(props) {
    const { scene } = useGLTF("/MetalParts/metalBody2.glb");
    return <primitive object={scene} {...props} />;
  }

  // Dials

  //Brushes Dial
  function BlackDial(props) {
    const { scene } = useGLTF("/BLACK/DIAL.glb");
    return <primitive object={scene} {...props} />;
  }

  function BlueDial(props) {
    const { scene } = useGLTF("/BLUE/DIAL.glb");
    return <primitive object={scene} {...props} />;
  }
  function GreenDial(props) {
    const { scene } = useGLTF("/GREEN/DIAL.glb");
    return <primitive object={scene} {...props} />;
  }
  function GreyDial(props) {
    const { scene } = useGLTF("/GREY/DIAL.glb");
    return <primitive object={scene} {...props} />;
  }
  function PinkDial(props) {
    const { scene } = useGLTF("/PINK/DIAL.glb");
    return <primitive object={scene} {...props} />;
  }
  function PurpleDial(props) {
    const { scene } = useGLTF("/PURPLE/DIAL.glb");
    return <primitive object={scene} {...props} />;
  }
  function RedDial(props) {
    const { scene } = useGLTF("/RED/DIAL.glb");
    return <primitive object={scene} {...props} />;
  }
  function WhiteDial(props) {
    const { scene } = useGLTF("/WHITE/DIAL.glb");
    return <primitive object={scene} {...props} />;
  }

  // baguetteDials

  function BaguetteBlackDial(props) {
    const { scene } = useGLTF("/BaguetteDial/DIAL BLACK.glb");
    return <primitive object={scene} {...props} />;
  }

  function BaguetteBlueDial(props) {
    const { scene } = useGLTF("/BaguetteDial/DIAL BLUE.glb");
    return <primitive object={scene} {...props} />;
  }
  function BaguetteGreenDial(props) {
    const { scene } = useGLTF("/BaguetteDial/DIAL GREEN.glb");
    return <primitive object={scene} {...props} />;
  }
  function BaguetteGreyDial(props) {
    const { scene } = useGLTF("/BaguetteDial/DIAL GREY.glb");
    return <primitive object={scene} {...props} />;
  }
  function BaguettePinkDial(props) {
    const { scene } = useGLTF("/BaguetteDial/DIAL PINK.glb");
    return <primitive object={scene} {...props} />;
  }
  function BaguettePurpleDial(props) {
    const { scene } = useGLTF("/BaguetteDial/DIAL PURPLE.glb");
    return <primitive object={scene} {...props} />;
  }
  function BaguetteRedDial(props) {
    const { scene } = useGLTF("/BaguetteDial/DIAL RED.glb");
    return <primitive object={scene} {...props} />;
  }
  function BaguetteWhiteDial(props) {
    const { scene } = useGLTF("/BaguetteDial/DIAL WHITE.glb");
    return <primitive object={scene} {...props} />;
  }

  // RomanDials
  function RomanBlackDial(props) {
    const { scene } = useGLTF("/RomanDial/BlackDail.gltf");
    return <primitive object={scene} {...props} />;
  }

  function RomanBlueDial(props) {
    const { scene } = useGLTF("/RomanDial/BlueDial.gltf");
    return <primitive object={scene} {...props} />;
  }
  function RomanGreenDial(props) {
    const { scene } = useGLTF("/RomanDial/GreenDail.gltf");
    return <primitive object={scene} {...props} />;
  }
  function RomanGreyDial(props) {
    const { scene } = useGLTF("/RomanDial/GreyDail.gltf");
    return <primitive object={scene} {...props} />;
  }
  function RomanPinkDial(props) {
    const { scene } = useGLTF("/RomanDial/PinkDail.gltf");
    return <primitive object={scene} {...props} />;
  }
  function RomanPurpleDial(props) {
    const { scene } = useGLTF("/RomanDial/PurpleDail.gltf");
    return <primitive object={scene} {...props} />;
  }
  function RomanRedDial(props) {
    const { scene } = useGLTF("/RomanDial/RedDail.gltf");
    return <primitive object={scene} {...props} />;
  }
  function RomanWhiteDial(props) {
    const { scene } = useGLTF("/RomanDial/WhiteDial.gltf");
    return <primitive object={scene} {...props} />;
  }

  // Bezels
  function BlackBezel(props) {
    const { scene } = useGLTF("/BLACK/BEZEL.glb");
    return <primitive object={scene} {...props} />;
  }

  function BlueBezel(props) {
    const { scene } = useGLTF("/BLUE/BEZEL.glb");
    return <primitive object={scene} {...props} />;
  }
  function GreenBezel(props) {
    const { scene } = useGLTF("/GREEN/BEZEL.glb");
    return <primitive object={scene} {...props} />;
  }

  function RedBezel(props) {
    const { scene } = useGLTF("/RED/BEZEL.glb");
    return <primitive object={scene} {...props} />;
  }
  function WhiteBezel(props) {
    const { scene } = useGLTF("/WHITE/BEZEL.glb");
    return <primitive object={scene} {...props} />;
  }
  function MetalBezel(props) {
    const { scene } = useGLTF("/MetalParts/MetalBezzel.glb");
    return <primitive object={scene} {...props} />;
  }

  const contextInfo = {
    // body
    BlackBody,
    BlueBody,
    GreenBody,
    GreyBody,
    PinkBody,
    PurpleBody,
    RedBody,
    WhiteBody,
    MetalBody1,
    MetalBody2,
    // Dials
    BlackDial,
    BlueDial,
    GreenDial,
    GreyDial,
    PinkDial,
    PurpleDial,
    RedDial,
    WhiteDial,

    // baguette
    BaguetteBlackDial,
    BaguetteBlueDial,
    BaguetteGreenDial,
    BaguetteGreyDial,
    BaguettePinkDial,
    BaguettePurpleDial,
    BaguetteRedDial,
    BaguetteWhiteDial,

    // RomanDial
    RomanBlackDial,
    RomanBlueDial,
    RomanGreenDial,
    RomanGreyDial,
    RomanPinkDial,
    RomanPurpleDial,
    RomanRedDial,
    RomanWhiteDial,

    // Bezels
    MetalBezel,
    BlackBezel,
    BlueBezel,
    GreenBezel,
    RedBezel,
    WhiteBezel,
  };
  return (
    <ModelContext.Provider value={contextInfo}>
      {children}
    </ModelContext.Provider>
  );
};

export default WatchModelContext;
