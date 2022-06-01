/** @format */

import React from "react";
import "../Utilities.css";
import { FiMenu } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
function Navbar({ showSideMenu }) {
  return (
    <div className="header-row d-flex justify-content-between align-items-center px-2">
      <div className="nav-icon">
        <FiMenu onClick={showSideMenu} />
      </div>
      <div className="d-flex align-items-center">
        <div className="profile-details px-2">
          <div>
            <p className="mb-0 pl-1">Admin Admin</p>
          </div>
          <div className="profile-circle">
            <FaUserAlt className="mt-2" />
          </div>
        </div>
        <div className="ml-3">
          <FaCog />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
