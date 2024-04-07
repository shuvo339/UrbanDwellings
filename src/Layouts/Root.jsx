import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
const Root = () => {
    return (
        <div className="max-w-6xl md:px-4 px-3 mx-auto font-lato">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;