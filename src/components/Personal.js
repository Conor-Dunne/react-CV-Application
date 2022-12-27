import React, { Component } from "react";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Conor Dunne",
      email: "conor@react.com",
      phoneNumber: "1888-555-555",
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
    if(!this.props.inPreview) {
      console.log(this.state.inPreview)
      return (
        <div>
          <h1>Personal Information:</h1>
         <form onSubmit={this.handleSubmit}>
          <div className="inputs-container">
          <div className="inputBox">
          <label htmlFor="name">Name: </label>
          <input
           name="name"
           type="text" 
           value={this.state.name}
           required 
           onChange={this.handleInputChange}
           />
          </div>
           <div className="inputBox">
           <label htmlFor="email">email: </label>
           <input
           name="email"
           type="email" 
           value={this.state.email} 
           required
           onChange={this.handleInputChange}
           />
           </div>
           <div className="inputBox">
           <label htmlFor="phoneNumber">Phone number: </label>
           <input
           name="phoneNumber"
           type="tel" 
           value={this.state.phoneNumber} 
           required
           onChange={this.handleInputChange}
           />
           </div>
          </div>
           <div className="button-bar">
           </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="inputBox">
        <h1>{this.state.name}</h1>
        <p>{this.state.email}</p>
        <p>{this.state.phoneNumber}</p>
        </div>
      )
    }

    
  }
}

export default Personal;
