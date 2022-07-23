import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux.hooks";
import "./Sidebar.css";
import { SideData } from "./SideBarContent";

function Sidebar() {
  const { isOpen } = useAppSelector((state) => state.nav);
  const location = useLocation();

  return (
    <div id="sidebar" style={{ width: isOpen ? "250px" : "60px" }}>
      <ul className="sidebarList">
        {SideData.map((data, key) => {
          return (
            <NavLink
              key={key}
              to={data.link}
              className="sidebarRow"
              id={location.pathname === data.link ? "active" : ""}
            >
              <div id="icon">{data.icon}</div>
              <div id="title" style={{ display: isOpen ? "block" : "none" }}>
                {data.title}
              </div>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
