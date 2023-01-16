import React from "react";
import ReactDOM from "react-dom/client";

import "./navBar.css";
import { FiHome } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";

export default class NavBar extends React.Component {
    render() {
        return (
        <div className="navbar">
            <div className="nav">
               <a className = "navItem" href={"/"}> <FiHome /> Home </a>
                <a className = "navItem" href={"/search"}> <FiSearch /> Search  </a>
            </div>
        </div>
        );
    }
}