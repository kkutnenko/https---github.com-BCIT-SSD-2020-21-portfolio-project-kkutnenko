import React, { Component } from 'react'
import facebook from '../assets/icons/facebook.svg'
import linkedin from '../assets/icons/linkedin.svg'
import github from '../assets/icons/github.svg'
import tie from '../assets/icons/tie.svg'
import pin from '../assets/icons/pin.svg'
import mightycoder from '../assets/icons/programmer.svg'
import resume from '../assets/resume.pdf'

function handleEmailMe (){
    window.open("mailto:kkutnenko@mybcit.ca")
}


export default class Sidebar extends Component {
   
    render() {
        
        return (
            <div className="sidebar">
                <img src={mightycoder} alt="avatar" className="sidebar-avatar"/>
                <div className="sidebar-name">
                    <p><span>Kirill Kutnenko</span> </p>
                </div>

                <div className="sidebar-item sidebar-title">
                    <p>Full Stack Web Developer</p>
                </div>
                <a href={resume} download="resume.pdf">
                    <div className="sidebar-item">
                        <img src={tie} alt="resume" className="sidebar-icon"/>
                        <p id="inline">Download resume</p>
                    </div>
                </a>
                {/* <figure className="sidebar-social-icons">  */}
                    <a href="#" >
                        <img src={linkedin} alt="linkedin" className="sidebar-icon"/>
                    </a>
                    <a href="#" >
                        <img src={facebook} alt="linkedin" className="sidebar-icon"/>
                    </a>
                 {/* </figure>  */}
                <div className="contact">
                    <div className="sidebar-item">
                        <a href="" >
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
                        <p>604-778-685-7199</p>
                    </div>
                </div>
                <div className="sidebar-item sidebar-email" onClick={handleEmailMe}>
                    <p>Send me an e-mail</p>
                </div>
            </div>
        )
    }
}
