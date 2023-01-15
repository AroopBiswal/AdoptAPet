import React from "react";
import ReactDOM from "react-dom/client";

import "./searchPage.css";


export default class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            searchResults: [],
            savedPets: [],
        };
    }
    render() {
        return (
        <div className="searchPage">
            <h1> Search Page </h1>
        </div>
        );
    }
    
}
