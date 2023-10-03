import { useContext, useState } from "react";
import loginLeftBg from "../../assets/Login/loginLeftBg.svg";
import TiempoLogo from "../../assets/Login/TiempoLogoBlack.png";
import TiempoLogoWhite from "../../assets/TiempoWhiteLogo.png";

import show from "../../assets/Login/Show.svg";
import message from "../../assets/Login/Message.svg";
import axios from "axios";
import SERVER_URL from "../../Shared/config";
import { Context } from "../../Context/MainContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const { isDark } = useContext(Context);
  const [showPassword, setShowPassword] = useState(false);

  const [loginInfo, setLoginInfo] = useState({
    support_id: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${SERVER_URL}/user/login`, loginInfo);
      if (response.status === 200) {
        localStorage.setItem("token", response?.data?.token);
        toast.success("Sign in successfully.");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.error);
    }
  };

  return (
    <div className="bg-[#fff] ">
      <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center   bg-[#FFFFFF]  ">
        {isDark ? (
          <div className="md:flex hidden my-auto justify-center items-center flex-col">
            <div
              className="w-full h-screen bg-black"
            // style={{ backgroundImage: `url(${loginLeftBg})` }}
            >
              <div className="w-full h-full flex  justify-center items-center">
                <span className=" w-[200px] h-[242px] mr-10">
                  <img src={TiempoLogoWhite} alt="" />
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="md:flex hidden my-auto justify-center items-center flex-col">
            <div
              className="w-full h-screen "
              style={{ backgroundImage: `url(${loginLeftBg})` }}
            >
              <div className="w-full h-full flex  justify-center items-center">
                <span className="w-[200px] h-[242px] xxmr-10">
                  <img src={TiempoLogo} alt="" />
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="lg:w-10/12 mx-auto lg:px-20 flex justify-center items-center h-screen">

          <div className="w-full">
            <h1 className="mb-14 text-[38px] font-semibold text-[#474A59]">
              Sign In
            </h1>
            <form onSubmit={handleLogin}>
              <div className="relative">
                <label
                  htmlFor="support_id"
                  className="block text-[18px] font-medium text-[#474A59]"
                >
                  Support ID
                </label>
                <input
                  value={loginInfo.support_id}
                  onChange={(e) =>
                    setLoginInfo({ ...loginInfo, support_id: e.target.value })
                  }
                  type="text"
                  name="support_id"
                  placeholder="Your support ID"
                  className="block w-full px-4 py-2 mt-2 text-[#474A59] bg-white border  outline-none  hover-border-gradient"
                  required
                />
                <span className="absolute right-2 bottom-2.5">
                  <img src={message} alt="icon" className="w-5 h-5" />
                </span>
              </div>
              <div className="mt-3 mb-2 relative">
                <label
                  htmlFor="password"
                  className="block text-[18px] font-medium text-[#474A59]"
                >
                  Password
                </label>

                <input
                  value={loginInfo.password}
                  onChange={(e) =>
                    setLoginInfo({ ...loginInfo, password: e.target.value })
                  }
                  placeholder="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="block w-full px-4 py-2 mt-2 text-[#474A59] bg-white border  outline-none hover-border-gradient"
                  required
                />
                <span
                  className="absolute right-2 bottom-2.5"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <img src={show} alt="icon" className="w-5 h-5" />
                </span>
              </div>

              <div className="mt-6">
                <button
                  className={`${isDark ? "bg-black" : "gradient_custom"
                    } w-full rounded-[5px] font-medium py-2 text-[18px] text-[#ffff]`}
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
