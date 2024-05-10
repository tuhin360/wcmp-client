import { Outlet } from "react-router-dom";
import Footer from "../../pages/Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;