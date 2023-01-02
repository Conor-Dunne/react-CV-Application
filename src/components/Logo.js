import React, { Component } from "react";

class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        }}>
        <h1 style={{
            fontSize: "70px",
            fontWeight: "500",
            letterSpacing: "5px",

        }}>CV WIZ{        <img
            style={{
              width: "50px",
            }}
            src={require("../hat-wizard-solid.svg")}
          ></img>
  }RD</h1>
      </div>
    );
  }
}

export default Logo;
