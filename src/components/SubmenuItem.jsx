/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";

function SubmenuItem({ item, index }) {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {
    setSubnav(!subnav);
  };

  return (
    <>
      <Link
        to={item.path}
        className="menu-item"
        key={index}
        onClick={item.subNav && showSubnav}
      >
        <div className="menu-icon mx-3">{item.icon}</div>
        <h6 className="menu-name pt-1">
          {item.menuName}
          <span>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </span>
        </h6>
      </Link>
   {subnav && <div className="submenu-wrapper">
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <div className="ml-5" key={index}>
              <div key={index} className="submenu-item">
                <div className="sub-menu-icon mr-1"> {item.icon}</div>
                <h6 className="sub-menu-name pt-1">{item.menuName}</h6>
              </div>
            </div>
          );
        })}
        </div>       }   
     
    </>
  );
}

export default SubmenuItem;
