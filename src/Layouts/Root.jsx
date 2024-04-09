import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
const Root = () => {
    return (
        <div>
            <div className="max-w-6xl md:px-4 px-3 mx-auto font-lato">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
            <Footer></Footer>
        </div>
        
    );
};

export default Root;