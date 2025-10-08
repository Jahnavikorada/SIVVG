import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // allow DOM to update (0 or 100ms)
    setTimeout(() => {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          // use smooth scroll
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
      // if no hash or element not found, optionally scroll top
      if (pathname === "/home" || pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 50);
  }, [pathname, hash]);

  return null;
}
