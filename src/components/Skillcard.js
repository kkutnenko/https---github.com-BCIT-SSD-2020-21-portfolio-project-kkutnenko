import React, { Component } from 'react'

export default class Skillcard extends Component {
    render() {
        
        return (
            
                <div className="col-lg-6">
                    <div className="skill-card">
                        <img src={this.props.skill.icon} alt="skill icon" className="skill-card-icon" />
                            <div className="skill-card-body">
                                <h6 className="skill-card-title">{this.props.skill.title}</h6>
                                <p className="skill-card-content">{this.props.skill.about}</p>
                            </div>
                    </div>
                </div>
            
        )
    }
}
