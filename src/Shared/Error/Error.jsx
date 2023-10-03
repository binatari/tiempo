import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="h-screen w-screen bg-gradient-to-r from-[#A3DAF140] via-[#9889E830]  to-[#D27CCF40] flex justify-center content-center flex-wrap">
        <p className="font-bold text-[#3F3F3F] error-text text-5xl md:text-7xl">404</p>
      </div>

      <div className="absolute w-screen bottom-0 mb-6 text-[#3F3F3F] text-center font-sans text-xl">
        <span className="">Take me back to </span>
        <Link to={'/'} className="border-b border-gray-900" href="https://tailwindcomponents.com">Home</Link>
      </div>
    </div>
  );
};

export default Error;
