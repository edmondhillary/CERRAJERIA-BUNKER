// FILE: src/hooks/useAnalytics.jsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useAnalytics() {

  const location = useLocation();

  useEffect(() => {

    if (typeof window !== "undefined" && window.gtag) {

      window.gtag("config", "G-JPS4S7Q156", {
        page_path: location.pathname,
      });

    }

  }, [location]);

}