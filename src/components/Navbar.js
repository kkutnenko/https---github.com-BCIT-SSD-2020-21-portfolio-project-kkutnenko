import React, { Component, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { browserHistory } from 'react-router';
import {motion} from 'framer-motion'



export default class Navbar extends Component {
    constructor(props){
        super(props);
        
        this.state ={
            activeLink:'About'
        };
        

    }

componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.activeLink !== prevProps.activeLink) {
        let currentURL = window.location.href;

        if (currentURL.endsWith('/resume')) {
            this.setState({activeLink:'Resume'})}
        else if (currentURL.endsWith('/projects')) {
            this.setState({activeLink:'Projects'}) }
        else if (currentURL.endsWith('/about')) {
            this.setState({activeLink:'About'}) }
    }
  }
 
    

    handleClick (clickedLink)  {
        this.setState({activeLink: clickedLink})
        
    }

        

    render() {
            const {activeLink} = this.state;
            const navbarVar = 
            {
                hidden: 
                {
                    y:'-30vh',
                    opacity:0
                },
                visible: 
                {
                    y:0,
                    opacity: 1,
                    transition: 
                    {
                        delay:0.2, duration:0.7, type: 'spring'
                    }
                }
            }
        return (
            <motion.div className="navbar"
                variants={navbarVar}
                initial='hidden'
                animate='visible'
            >
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
                
            </motion.div>
        )
    }
}
