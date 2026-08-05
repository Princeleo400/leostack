import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();
  const previousPathname = useRef(location.pathname);

  useEffect(() => {
    if (location.pathname !== previousPathname.current) {
      window.scrollTo(0, 0);
      previousPathname.current = location.pathname;
    }
  }, [location]);

  return null;
}

export default ScrollToTop;