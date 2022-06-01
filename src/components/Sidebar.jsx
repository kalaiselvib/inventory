/** @format */

import React from "react";
import Logo from "../assets/Logo.png";
import SubmenuItem from "./SubmenuItem";

function Sidebar({ menus, toggleSideMenu }) {
  return (
    <div className={`${toggleSideMenu ? "sidebar" : "sidebar toggled"}`}>
      <div className="logo px-3 ml-3">
        <img src={Logo} alt="logo" height={40} className="my-4" />
      </div>
      <div className="menu-list px-3">
        {menus.map((item, index) => {
          return (
            <>
              <SubmenuItem item={item} key={index} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
