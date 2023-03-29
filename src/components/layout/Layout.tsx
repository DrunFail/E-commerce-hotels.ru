import { Outlet } from "react-router-dom";
import { useResize } from "../../hooks/useResize";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function Layout() {
    const size = useResize();
    return (
        <>
            <Header />
            <main>
                {size < 800 || <BreadCrumbs />}
                <Outlet />
            </main>
            <Footer />
        </>

    );
}