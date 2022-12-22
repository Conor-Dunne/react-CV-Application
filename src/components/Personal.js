import { render } from "@testing-library/react";
import React, { Component } from "react";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div style={{ border: "1px solid black", padding: "20px" }}>
        <label htmlFor="name">Name: </label>
        <input
         name="name"
         type="text" 
         value={this.state.name} 
         onChange={this.handleInputChange}
         />
         <label htmlFor="email">email: </label>
         <input
         name="email"
         type="email" 
         value={this.state.email} 
         onChange={this.handleInputChange}
         />
         <label htmlFor="phoneNumber">Phone number: </label>
         <input
         name="phoneNumber"
         type="tel" 
         value={this.state.phoneNumber} 
         onChange={this.handleInputChange}
         />
         <p>{this.state.name}</p>
         <p>{this.state.email}</p>
         <p>{this.state.phoneNumber}</p>
      </div>
    );
  }
}

export default Personal;
