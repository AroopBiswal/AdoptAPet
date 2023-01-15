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
            <div className="searchTitle"> Search Page </div>
            <div className="searchArea">
                <input type="text" placeholder="Type of pet (eg. dog, rabbit, etc.)" />
            </div>
        </div>
        );
    }
    
}
