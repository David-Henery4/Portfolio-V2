import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import App from "../App";
import {
  Header,
  About,
  Projects,
  Skills,
  Contact,
  SingleProject,
} from "../pages";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />}>
          <Route index={true} element={<Header />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects/:projectId" element={<SingleProject />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
