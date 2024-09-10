import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../assets/css/components/layout.scss";

import { routes } from "../routes";

const Layout = () => {
  const location = useLocation();
  const locationPathname = location.pathname;
  const hideHeaderAndFooter =
    routes.find((route) => route.path === locationPathname) &&
    locationPathname !== "*";
  return (
    <div>
      {hideHeaderAndFooter && <Header />}
      <div className="container sectionStyles">
        {hideHeaderAndFooter && <Navbar />}
        <Outlet />
      </div>
      {hideHeaderAndFooter && <Footer />}
    </div>
  );
};

export default Layout;
