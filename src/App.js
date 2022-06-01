/** @format */
import React, { useState } from "react";

import "./fonts.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { AiOutlineDashboard } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsGridFill } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { AiOutlineLineChart } from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import Homepage from "./components/Homepage";
import Customers from "./components/Customers/Customers";
import * as RiIcons from "react-icons/ri";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import ProductDetail from "./components/Products/ProductDetail";
import { ProductsData } from "./components/Products/ProductsData";
function App() {
  const [toggleSideMenu, setToggleSideMenu] = useState(true);

  const showSideMenu = () => {
    setToggleSideMenu((prev) => !prev);
  };
  const menuItems = [
    {
      icon: <AiOutlineDashboard />,
      menuName: "Dashboard",
      path: "/dashboard",
    },
    {
      id: 1,
      icon: <BsTruck />,
      menuName: "Products",
      path: "/products",
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
        {
          icon: <AiOutlineUnorderedList />,
          menuName: "Products List",
        },
        {
          icon: <BsGridFill />,
          menuName: "Products Grid",
        },
      ],
    },
    {
      icon: <BiCategory />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      menuName: "Categories",
      path: "/categories",
      subNav: [
        {
          icon: <AiOutlineDashboard />,
          menuName: "Test 1",
        },
        {
          icon: <AiOutlineDashboard />,
          menuName: "Test 2",
        },
      ],
    },
    {
      icon: <BsBag />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      menuName: "Orders",
      path: "/orders",
      subNav: [
        {
          icon: <AiOutlineDashboard />,
          menuName: "Test 1",
        },
        {
          icon: <AiOutlineDashboard />,
          menuName: "Test 2",
        },
      ],
    },
    {
      icon: <AiOutlineLineChart />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      menuName: "Inventory",
      path: "/inventory",
      subNav: [
        {
          icon: <AiOutlineDashboard />,
          menuName: "Test 1",
        },
        {
          icon: <AiOutlineDashboard />,
          menuName: "Test 2",
        },
      ],
    },
    {
      icon: <ImUsers />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      menuName: "Customers",
      path: "customers",
      subNav: [
        {
          icon: <AiOutlineDashboard />,
          menuName: "Test 1",
        },
        {
          icon: <AiOutlineDashboard />,
          menuName: "Test 2",
        },
      ],
    },
  ];
  const [menus] = useState(menuItems);
  const [data, getData] = useState(ProductsData);
  return (
    <div className="wrapper">
      <Sidebar menus={menus} toggleSideMenu={toggleSideMenu} />
      <div
        className={`${
          toggleSideMenu ? "home-page-wrapper" : "home-page-wrapper toggled"
        }`}
      >
        <Navbar showSideMenu={showSideMenu} toggleSideMenu={toggleSideMenu} />
        <Routes>
          <Route>
            <Route path="/" element={<Homepage />} />
            <Route exact path="/customers" element={<Customers />} />
            <Route
              exact
              path="/products"
              element={<Products data={data} getData={getData} />}
            />
            <Route
              exact
              path="/product-detail/:id"
              element={<ProductDetail data={data} />}
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
