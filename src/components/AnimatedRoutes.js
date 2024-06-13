import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import App from "../App";
import {
  Header,
  About,
  Projects,
  Skills,
  Contact,
  SingleProject,
  ThankYou,
} from "../pages";
import { AnimatePresence } from "framer-motion";
import StudioApp from "../pages/SanityApp";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} mode={"wait"}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />}>
          <Route index={true} element={<Header />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects/:projectId" element={<SingleProject />} />
          <Route path="thankyou" element={<ThankYou />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path="/studio" element={<StudioApp />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
