import React, { Component } from "react";

class ExperienceView extends Component {
  render() {
    return (
      <div className="layout">
        <h1
          style={{ display: !this.props.inPreview ? "none" : "block" }}
        >
          Experience:
        </h1>
        <hr />
        {this.props.companies.map((company) => {
          return (
            <div className="item">
              <div className="dates">
                <p>{`${company.startdate}-`}</p>
                <p>{`${company.endDate}-`}</p>
              </div>
              <div>
                <h3>{company.job_title}</h3>
                <p>{company.name}</p>
                <ul>
                  <li>{company.description}</li>
                </ul>
              </div>
              <div className="button-bar">
                <button
                  className="delete-btn"
                  onClick={() => this.props.onDelete(company.id)}
                  style={{ display: this.props.inPreview ? "none" : "block" }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExperienceView;
