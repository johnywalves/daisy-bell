import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {

    const location = useLocation();

    const [pathname, setPathname] = useState("");

    useEffect(() => {
        if (location.pathname !== pathname) {
            setPathname(location.pathname);
            window.scrollTo(0, 0);
        }
    }, [location, pathname]);

    return <></>
}

export default ScrollToTop;