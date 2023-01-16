import React from "react";
import ReactDOM from "react-dom/client";

import "./homePage.css";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default class HomePage extends React.Component {
    render() {
        return (
        <div className="homePage">
            <Header />
            <div className="spacing"></div>
            <Footer />
        </div>
        );
    }
    
}