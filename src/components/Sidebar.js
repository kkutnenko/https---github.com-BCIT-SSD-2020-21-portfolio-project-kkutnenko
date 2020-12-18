import React, { Component } from 'react'
import facebook from '../assets/icons/facebook.svg'
import linkedin from '../assets/icons/linkedin.svg'
import github from '../assets/icons/github.svg'
import tie from '../assets/icons/pin1.svg'
import pin from '../assets/icons/map.png'
import mightycoder from '../assets/icons/programmer.svg'
import resume from '../assets/resume.pdf'
import {motion} from 'framer-motion'

function handleEmailMe (){
    window.open("mailto:kkutnenko@mybcit.ca")
}


export default class Sidebar extends Component {
   
    render() {
            const sidebarVar ={
                hidden: {
                    x:"-10vw",
                    opacity:0
                },
                visible:{
                    x:0,
                    opacity: 1,
                    transition: 
                    {
                        dealy:0.2, duration:0.7, type: 'spring'
                    }
                }
            }
        return (
            
            <motion.div className="sidebar"
                variants={sidebarVar}
                initial="hidden"
                animate="visible"
            >
                <img src={mightycoder} alt="avatar" className="sidebar-avatar"/>
                <div className="sidebar-name">
                    <p><span>Kirill Kutnenko</span> </p>
                </div>

                <div className="sidebar-item sidebar-title">
                    <p>Web Developer</p>
                </div>
                <a href={resume} download="resume.pdf">
                    <div className="sidebar-item">
                        <img src={tie} alt="resume" className="sidebar-icon"/>
                        <p id="inline">Download resume</p>
                    </div>
                </a>
                {/* <figure className="sidebar-social-icons">  */}
                    <a href="https://www.linkedin.com/in/kirill-kutnenko-55a2122/" >
                        <img src={linkedin} alt="linkedin" className="sidebar-icon"/>
                    </a>
                    <a href="https://www.facebook.com/kirill.kutnenko.1/" >
                        <img src={facebook} alt="linkedin" className="sidebar-icon"/>
                    </a>
                 {/* </figure>  */}
                <div className="contact">
                    <div className="sidebar-item">
                        <a href="https://github.com/kkutnenko?tab=repositories" >
                            <img src={github} alt="github" className="sidebar-icon"/>
                            <p id="inline"></p>
                        </a>
                    </div>
                    <div className="sidebar-location">
                        <img src={pin} alt="location" className="sidebar-icon"/>
                        <p id="inline"> Burnaby, B.C., Canada</p>
                    </div>
                    <div className="sidebar-item">
                        <p>kkutnenko@my.bcit.ca</p>
                    </div>
                    <div className="sidebar-item">
                        <p>604-685-7199</p>
                    </div>
                </div>
                <div className="sidebar-item sidebar-email" onClick={handleEmailMe}>
                    <p>Send me an e-mail</p>
                </div>
            </motion.div>
            
        )
    }
}
