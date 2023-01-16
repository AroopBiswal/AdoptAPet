import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";

import "./searchPage.css";
import { search } from "../../scripts/apiCalls";
import PetDisplay from "../../components/petDisplay/petDisplay.jsx";


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

        this.updateType = this.updateType.bind(this);
        this.updateSize = this.updateSize.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    updateType(event) {
        this.setState({type: event.target.value});
    }

    updateSize(event) {
        this.setState({size: event.target.value});
    }

    handleSearch() {
        let BearerToken = localStorage.getItem("BearerToken");
        console.log("ABC" + this.state.type + this.state.size)
        console.log("Search button clicked");
        search(this.state.type, this.state.size, BearerToken).then((response) => {
            console.log(response);
            this.setState({searchResults: response.animals});
        }
        );
        
    }
    
    render() {
        console.log("Search results: ");
        console.log(this.state.searchResults);
        return (
        <div className="searchPage">
            <div className="searchTitle"> Search Page </div>
            <div className="searchArea">
                <input className = "searchInput" type="text" placeholder="Type of pet (eg. dog, rabbit, etc.)" value={this.state.value} onChange={this.updateType}/>
                <input className = "searchInput" type="text" placeholder="Size of pet (eg. small, medium, large, xlarge)" value={this.state.value} onChange={this.updateSize}/>
                <button className = "searchButton" onClick={this.handleSearch}> Search </button>
            </div>
            <div className="searchResults">
            <div className="petDisplayArea">
                <PetDisplay pets={this.state.searchResults}/>
            </div>
            </div>
        </div>
        );
    }
    
}
