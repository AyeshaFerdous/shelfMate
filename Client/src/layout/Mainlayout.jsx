import {  Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared components/Navbar";
import Footer from "../Pages/Shared components/Footer";


const Mainlayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
             <Footer/>
        </div>
    );
};

export default Mainlayout;