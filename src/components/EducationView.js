import React, { Component } from "react";

class EducationView extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            
                <div  className="layout">
                    <h1>Education:</h1>
                    {this.props.institutes.map((institute) => {
                    return (
                        <div  className="layout">
                            <h3>{institute.name}</h3>
                            <h3>{institute.course}</h3>
                            <p>{`${institute.startdate} to ${institute.endDate}`}</p>
                            {/* <button>edit</button>
                            <button>delete</button> */}
                        </div>
                    )
                })}
                </div>
            
        );
    }
    
};



export default EducationView