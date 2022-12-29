import React, { Component } from "react";
import ExperienceView from "./ExperienceView";
import uniqid from "uniqid";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: {
        name: "NASA",
        job_title: "Astronaut",
        startdate: "2013-01-01",
        endDate: "2013-06-15",
        description: "Flying space ships.",
        id: uniqid(),
      },
      companies: [
        {
          name: "ABC",
          job_title: "Web Developer",
          startdate: "2010-09-01",
          endDate: "2014-06-15",
          description: "Making great web apps",
          id: "7657",
        },
      ],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      company: {
        ...this.state.company,
        [name]: value,
      },
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      companies: this.state.companies.concat(this.state.company),
      company: {
        name: "",
        job_title: "",
        startdate: "",
        endDate: "",
      },
    });
  };

  handleDelete(id) {
    this.setState((prevState) => ({
      companies: prevState.companies.filter((company) => company.id !== id),
    }));
  }

  render() {
    if (!this.props.inPreview) {
      return (
        <div>
          <h1>Experience:</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="inputs-container">
              <div className="inputBox">
                <label htmlFor="name">Company: </label>
                <input
                  name="name"
                  type="text"
                  value={this.state.company.name}
                  required
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="job_title">Job title: </label>
                <input
                  name="job_title"
                  type="text"
                  value={this.state.company.job_title}
                  required
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="startdate">Start: </label>
                <input
                  name="startdate"
                  type="date"
                  value={this.state.company.startdate}
                  required
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="endDate">Finish: </label>
                <input
                  name="endDate"
                  type="date"
                  value={this.state.company.endDate}
                  required
                  onChange={this.handleInputChange}
                />
              </div>
                <label htmlFor="description">Description: </label>
                <textarea
                  name="description"
                  value={this.state.company.description}
                  required
                  onChange={this.handleInputChange}
                ></textarea>
            </div>
            <div className="button-bar">
              <button type="submit">Add</button>
            </div>
          </form>
          <ExperienceView companies={this.state.companies} onDelete={this.handleDelete} />
        </div>
      );
    } else {
      
        return <ExperienceView companies={this.state.companies} inPreview = {true} />
    }
  }
}

export default Experience;
