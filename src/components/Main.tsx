import React from "react";
import "./Main.css";
import Sidebar from "./navigations/Sidebar";
import AppRoute from "./routes/AppRoute";

function Main() {
  return (
    <div className="main">
      <Sidebar />
      <AppRoute />
    </div>
  );
}

export default Main;
