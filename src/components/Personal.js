import React, { Component } from "react";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      isSaved: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      isSaved: true
    })
    console.log(this.state.isSaved);
  }

  

  render() {
    
    if(!this.state.isSaved) {
      return (
        <div style={{ border: "1px solid black"}}>
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
           <button type="submit">Save</button>
           </div>
          </form>
        </div>
      );
    } else {
      return (
        <p>{this.state.name}</p>
      )
    }

    
  }
}

export default Personal;
