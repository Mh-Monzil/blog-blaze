import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const MainLayout = () => {
    return (
        <div>
            <Nav />
            <div className="min-h-[calc(100vh-116px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;