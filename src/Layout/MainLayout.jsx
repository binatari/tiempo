import Header from "../Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
    return (

        <div>
            {/* <Header /> */}
            <Outlet />
            <Footer />
        </div>

    );
};

export default MainLayout;
