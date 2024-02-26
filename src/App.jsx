import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom"; // Import BrowserRouter and other routing components
import "./index.css";
import WatchModelContext from "./Context/ModelContext.jsx";
import { Toaster, toast } from "react-hot-toast";
import Login from "./Pages/Login/Login";
import Home from "./components/Home/Home";
// import ConfigurationPage from "./components/WatchData/ConfigurationPage.jsx/ConfigurationPage";
import AllUsers from "./Pages/AdminDashboard/AllUsers/AllUsers";
import PopularCollectionDetails from "./Pages/Home/PopularCollection/PopularCollectionDetails";
import SERVER_URL from "./Shared/config";
import Error from "./Shared/Error/Error";
import MainContext from "./Context/MainContext";
import { CircularProgress } from "@mui/material";
import { Box } from "@react-three/drei";
import AOS from "aos";
import "aos/dist/aos.css";
import Configure from "./components/Configure/Configure";
import { SliderProvider } from "./Context/Slider_context";
import Checkout from "./components/Checkout/Checkout";

const App = () => {
  const [loading, setLoading] = React.useState(true);

  const [authenticated, setAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isGuest, setIsGuest] = useState(false);

  const location = useLocation();

  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      console.log("beforeinstallprompt event triggered");
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      console.log("Removing beforeinstallprompt event listener");
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  useEffect(() => {
    const installApp = () => {
      if (deferredPrompt) {
        console.log("Attempting to install the app");
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the PWA installation");
          } else {
            console.log("User declined the PWA installation");
          }
          setDeferredPrompt(null);
        });
      } else {
        console.log("deferredPrompt is null, cannot install");
      }
    };

    installApp();
  }, [deferredPrompt]);

  const logOut = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      setAuthenticated(false);
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    const getRole = async (token = localStorage.getItem("token")) => {
      try {
        const response = await fetch(`${SERVER_URL}/user/status`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          const json = await response.json();

          if (json?.data?.role === "admin") {
            setAuthenticated(true);

            setIsAdmin(true);
            setIsGuest(false);
          } else {
            setAuthenticated(true);

            setIsAdmin(false);
            setIsGuest(true);
          }
        } else {
          const json = await response.json();

          if (localStorage.getItem("token")) {
            logOut();
            setAuthenticated(false);

            toast.error(json?.error);
          }
        }
      } catch (error) {
        setAuthenticated(false);
        toast.error(error.response?.data?.error);
      } finally {
        setLoading(false);
      }
    };

    const token = localStorage.getItem("token");
    if (token) {
      getRole(token);
    } else {
      setAuthenticated(false);
      setIsAdmin(false);
      setIsGuest(false);
      setLoading(false);
    }
  }, [location]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </div>
    );
  }

  return (
    <div>
      <SliderProvider>
        <WatchModelContext>
          <MainContext>
            <Toaster />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/configure/:selected"
                element={<Configure />}
                // element={(isAdmin || isGuest) && <ConfigurationPage />}
              />
              <Route
                path="/popular-collection/:id"
                element={<PopularCollectionDetails />}
              />
              {authenticated ? (
                <>
                  <Route path="/" element={(isAdmin || isGuest) && <Home />} />

                  <Route
                    path="/checkout"
                    element={(isAdmin || isGuest) && <Checkout></Checkout>}
                    // element={(isAdmin || isGuest) && <ConfigurationPage />}
                  />
                  <Route
                    path="/adminUsers"
                    element={isAdmin ? <AllUsers /> : <Error />}
                  />

                  <Route path="/login" element={<Login />} />
                </>
              ) : (
                <Route path="/*" element={<Login />} />
              )}

              <Route path="*" element={<Error />} />
            </Routes>
          </MainContext>
        </WatchModelContext>
      </SliderProvider>
    </div>
  );
};

export default App;
