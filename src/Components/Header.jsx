import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { MdMenu } from "react-icons/md";
import logo from "../assets/jio_logo.png";
import { MdOutlineSearch } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar className="custom-navbar">
        <div
          className="navInner"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <MdMenu className="menu-icon" />
            <img
              style={{ padding: "2px" }}
              src={logo}
              alt="Logo"
              width={"30px"}
              height={"30px"}
            />
          </div>
          <div className="main">
            <div
              className="start"
            ></div>
            <div
              className="center"
              style={{ width: "100%", height: "100%", display: "flex" }}
            >
              <input
                className="search-input"
                type="text"
                placeholder="Search"
                style={{
                  backgroundColor: "transparent",
                  width: "100%",
                  color: "white",
                  border: "none",
                  outline: "none",
                }}
              />
            </div>
            <div
              className="end"
            >
              <MdOutlineSearch className="search-icon"/>
            </div>
          </div>
          <div>
            <MdAccountCircle
              className="account-icon"
            />
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
