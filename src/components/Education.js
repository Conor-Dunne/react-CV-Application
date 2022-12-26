import React, { Component } from "react";

class Education extends Component {

    constructor (props) {
        super(props)

        this.state = {
            institute: {
                name: "",
                course: "",
                startdate: "",
                endDate: ""
            
            },
            institutes: [{
                name: "WIT",
                course: "Bachelor of Business",
                startdate: "2010",
                endDate: "2014"
            },],
        }
    };




}

export default Education
