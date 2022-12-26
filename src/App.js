import React, { Component } from "react";
import "./App.css";
import Personal from "./components/Personal";
import Education from "./components/Education";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalIsSaved: true,
      inPreview: false,
    };
  }

  handlePreview = () => {
    if (this.state.personalIsSaved && !this.state.inPreview) {
      this.setState({
        inPreview: true,
      });
    } else if (this.state.inPreview) {
      this.setState({
        inPreview: false,
      });
    } else {
      alert("Some sections aren't saved");
    }
  };

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.handlePreview}>
          {this.state.inPreview ? "Edit" : "Preview"}
        </button>
        <Personal
          inPreview={this.state.inPreview}
          onSave={() => this.setState({ personalIsSaved: true })}
          onEdit={() => this.setState({ personalIsSaved: false })}
        />
        <hr />
        <Education />
      </div>
    );
  }
}

export default App;
