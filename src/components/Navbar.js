import React, { Component, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { browserHistory } from 'react-router';


export default class Navbar extends Component {
    constructor(props){
        super(props);
        
        this.state ={
            activeLink:''
        };
        

    }

componentDidMount(){
    this.setState({activeLink:'About'})
}


 
    // componentDidUpdate (_,prevProps){
    //     if(this.state === prevProps) {
    //         return;
    //     }
    //     this.setState({activeLink: this.checkURL()})
        

    //  }

    // checkURL () {
    //     let currentURL = window.location.href;

    //     if (currentURL.endsWith('/resume')) {
    //         return 'Resume'}
    //     else if (currentURL.endsWith('/projects')) {
    //         return 'Projects' }
    //     else if (currentURL.endsWith('/about')) {
    //             return 'About' }
    // }

    handleClick (clickedLink)  {
        this.setState({activeLink: clickedLink})
        
    }

    // useEffect(() => {
    //     let currentURL = 
    // }, [activeLink])
    

    render() {
        const {activeLink} = this.state;
        return (
            <div className="navbar">
                <div className="navbar-active">
                    <p>{activeLink}</p>
                </div>
                <div className="navbar-items">
                    <Link to="/about">
                        <div className="navbar-item" onClick={ () => this.handleClick('About')}><p>About</p></div>
                    </Link>

                    <Link to= "/resume">
                        <div className="navbar-item" onClick={ () => this.handleClick('Resume')}><p>Resume</p></div>
                    </Link>
                    
                    <Link to= "/projects">
                        <div className="navbar-item" onClick={ () => this.handleClick('Projects')}><p>Projects</p></div>
                    </Link>
                </div>
                
            </div>
        )
    }
}
