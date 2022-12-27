import React, { Component } from "react";

class EducationView extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            
                <div  className="layout">
                    <h1><u>Education:</u></h1>
                    {this.props.institutes.map((institute) => {
                    return (
                        <div  className="item">
                            <h3>{institute.name}</h3>
                            <h3>{institute.course}</h3>
                            <p>{`${institute.startdate} to ${institute.endDate}`}</p>
                            <button onClick={() => this.props.onDelete(institute.id)} >delete</button>
                        </div>
                    )
                })}
                </div>
            
        );
    }
    
};



export default EducationView