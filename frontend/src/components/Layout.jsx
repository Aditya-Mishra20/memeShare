import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Tags from "./Tags";
import Creaters from "./Creaters";
import MemeShareApp from "./MemeShareApp";
const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 gap-5 mt-5 px-10 md:grid-cols-3">
        <SideBar />
        <MemeShareApp />
        <div className="flex flex-col gap-5">
          <Creaters />
          <Tags />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
