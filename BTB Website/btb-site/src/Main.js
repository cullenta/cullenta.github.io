import { Outlet } from "react-router-dom";
import NavBar from "./Nav";
import Footer from "./Footer";
import { useEffect } from "react";
const Main = () => {

    return (
        <>
            <div class="min-h-dvh flex flex-col pt-36">
                <NavBar/>
                <div class="flex flex-col flex-grow">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    
    )
}

export default Main