// src/components/Layout.jsx
import React, { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import "./Layout.scss";
import Topbar from "~/components/Topbar/Topbar";

const Layout = () => {
  return (
    <>
      <Topbar />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
