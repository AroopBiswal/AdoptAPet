import React from "react";
import ReactDOM from "react-dom/client";
import "./petDisplay.css";


export default class PetDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pets: this.props.pets,
        };
        
    }
    
    render() {
        console.log("PetDisplay constructor called");
        console.log(this.props.pets);
        return (
            <div className="petDisplay">
                <div className="petDisplayTitle"> Search Results </div>
                <div className="petDisplayArea1">
                    {this.state.pets.map((pet) => (
                        <div className="petDisplayCard">
                            <div className="petName"> {pet.name} </div>
                            <div className="petDescription"> {pet.description} </div>
                            <div className="petContact"> Contact: {pet.contact.email} </div>
                        </div>
                    ))}
                </div>
            </div>
        );
      }

}
