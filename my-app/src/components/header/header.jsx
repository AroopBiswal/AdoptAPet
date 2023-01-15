import React from 'react';
import ReactDOM from 'react-dom/client';


import './header.css';

export default class Header extends React.Component {
    render() {
        return (
        <div className="header">
            <div className="header-title">
            <h1> Adopt a Pet </h1>
            </div>
        </div>
        );
    }
}
