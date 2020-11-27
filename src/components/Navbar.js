import React, { Component } from 'react'

export default class Navbar extends Component {
    constructor(props){
        super(props);
        
        this.state ={
            activeLink:'About'
        };
        
       
    }

    handleClick (clickedLink)  {
        this.setState({activeLink: clickedLink})
    }
    

    render() {
        const {activeLink} = this.state;
        return (
            <div className="navbar">
                <div className="navbar-active">
                    <p>{activeLink}</p>
                </div>
                <div className="navbar-items">
                    <div className="navbar-item" onClick={ () => this.handleClick('About Me')}><p>About</p></div>
                    <div className="navbar-item" onClick={ () => this.handleClick('Resume')}><p>Resume</p></div>
                    <div className="navbar-item" onClick={ () => this.handleClick('Projects')}><p>Projects</p></div>
                </div>
                
            </div>
        )
    }
}
