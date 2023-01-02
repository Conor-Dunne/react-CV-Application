import React, { Component } from "react";
import EducationView from "./EducationView";
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      institute: {
        name: "",
        course: "",
        startdate: "",
        endDate: "",
        id: uniqid(),
      },
      institutes: [
        {
          name: "Waterford Institute of Technology",
          course: "Bachelor of Business",
          startdate: "2010-09-01",
          endDate: "2014-06-15",
          id: "7657",
        },
        {
          name: "Shanghai University of Economics and Business",
          course: "International Business",
          startdate: "2013-01-01",
          endDate: "2013-06-15", 
          id: "987987", 
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
      institute: {
        ...this.state.institute,
        [name]: value,
      },
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      institutes: this.state.institutes.concat(this.state.institute),
      institute: {
        name: "",
        course: "",
        startdate: "",
        endDate: "",
      },
    });
  };

  handleDelete(id) {
    this.setState((prevState) => ({
      institutes: prevState.institutes.filter(
        (institute) => institute.id !== id
      ),
    }));
  }

  render() {
    if (!this.props.inPreview) {
      return (
        <div>
          <h1 className="edit-title">Education:</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="inputs-container">
              <div className="inputBox">
                <label htmlFor="name">School Name: </label>
                <input
                  name="name"
                  type="text"
                  value={this.state.institute.name}
                  required
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="course">course: </label>
                <input
                  name="course"
                  type="text"
                  value={this.state.institute.course}
                  required
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="startdate">Start: </label>
                <input
                  name="startdate"
                  type="date"
                  value={this.state.institute.startdate}
                  required
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="endDate">Finish: </label>
                <input
                  name="endDate"
                  type="date"
                  value={this.state.institute.endDate}
                  required
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="button-bar">
              <button type="submit">Add</button>
            </div>
          </form>
          <EducationView
            institutes={this.state.institutes}
            onDelete={this.handleDelete}
          />
        </div>
      );
    } else {
      return (
        <EducationView institutes={this.state.institutes} inPreview={true} />
      );
    }
  }
}

export default Education;
