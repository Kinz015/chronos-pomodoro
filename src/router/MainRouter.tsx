import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { Home } from "../Pages/Home";
import { AboutPomodoro } from "../Pages/AboutPomodo";
import { NotFound } from "../Pages/NotFound";
import { useEffect } from "react";
import { History } from "../Pages/History";
import { Settings } from "../Pages/Settings";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about-pomodoro" element={<AboutPomodoro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
