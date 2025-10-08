import React, { useEffect, useState } from "react";

const COOKIE_KEY = "sivvg_cookie_consent";

const CookieBanner = () => {
  const [consent, setConsent] = useState(() => {
    try {
      return localStorage.getItem(COOKIE_KEY) || "";
    } catch {
      return "";
    }
  });

  const [visible, setVisible] = useState(consent === "");

  useEffect(() => {
    if (consent !== "") {
      setVisible(false);
    }
  }, [consent]);

  const accept = () => {
    try {
      localStorage.setItem(COOKIE_KEY, "accepted");
    } catch { /* empty */ }
    setConsent("accepted");
  };

  const decline = () => {
    try {
      localStorage.setItem(COOKIE_KEY, "declined");
    } catch { /* empty */ }
    setConsent("declined");
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-3xl w-[95%] bg-[#383a8c] text-white rounded-2xl shadow-lg p-4 md:p-5">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="text-sm">
          We use cookies to enhance your browsing experience, analyze site
          traffic and serve personalized content. By clicking “Accept” you agree
          to our Cookie Policy.
        </div>
        <div className="flex gap-2">
          <button
            onClick={decline}
            className="px-3 py-2 rounded-md bg-transparent border border-white/30 text-xs md:text-sm hover:bg-white/10 transition"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-3 py-2 rounded-md bg-white text-[#383a8c] text-xs md:text-sm font-semibold hover:opacity-95 transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
