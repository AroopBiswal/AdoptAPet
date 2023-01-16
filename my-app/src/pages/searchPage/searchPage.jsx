import React from "react";
import ReactDOM from "react-dom/client";

import "./searchPage.css";


export default class SearchPage extends React.Component {
    componentDidMount() {
        console.log("SearchPage mounted");
    }
    constructor(props) {
        super(props);
        console.log("SearchPage constructor called");
        this.state = {
            type: "",
            size: "",
            searchResults: [],
            savedPets: [],
        };
    }

    updateType(event) {
        this.state.type = event.target.value;
    }

    updateSize(event) {
        this.state.size = event.target.value;
        console.log(this.state.size);
    }
    
    render() {
        return (
        <div className="searchPage">
            <div className="searchTitle"> Search Page </div>
            <div className="searchArea">
                <input className = "searchInput" type="text" placeholder="Type of pet (eg. dog, rabbit, etc.)" value={this.state.value} onChange={this.updateType}/>
                <input className = "searchInput" type="text" placeholder="Size of pet (eg. small, medium, large, xlarge)" value={this.state.value} onChange={this.updateSize}/>
                <button className = "searchButton" > Search </button>
            </div>
        </div>
        );
    }
    
}
