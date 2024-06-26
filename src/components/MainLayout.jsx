import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="h-16 sticky top-0 z-30">
                <Nav />
            </div>
            <div className="min-h-[calc(100vh-116px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;