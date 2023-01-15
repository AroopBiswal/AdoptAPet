import React from "react";
import ReactDOM from "react-dom/client";

import "./homePage.css";

import Header from "../../components/header/header";

export default class HomePage extends React.Component {
    render() {
        return (
        <div className="homePage">
            <Header />
        </div>
        );
    }
    
}