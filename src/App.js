import React, { Component } from "react";
import './App.css';
import Personal from './components/Personal';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      inPreview: false,
      previewBtnText: "Preview"
    };

  }

  handlePreview = () => {
    if(!this.state.inPreview){
      this.setState({
        inPreview: true,
        previewBtnText: "Edit"
      })
    } else {
      this.setState({
        inPreview: false,
        previewBtnText: "Preview"
      })
    }
  }

  render () {
    return (
      <div className="App">
        <button type="button" onClick={this.handlePreview}>{this.state.previewBtnText}</button>
      <Personal inPreview = {this.state.inPreview} />
      <hr/>
    </div>
    )
  }
};

export default App;
