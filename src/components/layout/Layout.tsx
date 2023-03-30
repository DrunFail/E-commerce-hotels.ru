import { Outlet, useLocation } from "react-router-dom";
import { useResize } from "../../hooks/useResize";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function Layout() {
    const size = useResize();
    const location = useLocation();

    return (
        <>
            <Header />
            <main>
                {size < 800 || (location.pathname !== '/' && <BreadCrumbs />)}
                <Outlet />
            </main>
            <Footer />
        </>

    );
}