import { Outlet, useLocation } from "react-router-dom";
import { useResize } from "../../hooks/useResize";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
import Footer from "../footer/Footer";
import DesktopHeader from "../header/pages/desktopHeader/DesktopHeader";
import MobileHeader from "../header/pages/mobileHeader/MobileHeader";

export default function Layout() {
    const size = useResize();
    const location = useLocation();

    return (
        <>
            {size > 800
                ? <DesktopHeader />
                : <MobileHeader />}

            <main>
                {size < 800 || (location.pathname !== '/' && <BreadCrumbs />)}
                <Outlet />
            </main>
            <Footer />
        </>

    );
}