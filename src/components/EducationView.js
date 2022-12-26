import React, { Component } from "react";

class EducationView extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            
                <div  className="layout">
                    {this.props.institutes.map((institute) => {
                    return (
                        <div  className="layout">
                            <h2>{institute.name}</h2>
                            <h3>{institute.course}</h3>
                            <p>{`${institute.startdate} - ${institute.endDate}`}</p>

                        </div>
                    )
                })}
                </div>
            
        );
    }
    
};



export default EducationView