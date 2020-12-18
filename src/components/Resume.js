import React, { Component } from 'react'
import Slider from './Slider'
import html from '../assets/icons/black/html.png'
import css from '../assets/icons/black/css.png'
import js from '../assets/icons/black/js.png'
import angular from '../assets/icons/black/angular.png'
import kotlin from '../assets/icons/black/kotlin.png'
import react from '../assets/icons/black/react.png'
import reactN from '../assets/icons/black/reactNative.png'
import sql from '../assets/icons/black/msssms.png'
import aws from '../assets/icons/black/aws.png'
import vs from '../assets/icons/black/vs.png'
import msssms from '../assets/icons/black/msssms.png'
import github from '../assets/icons/github.svg'
import wd from '../assets/icons/whiteDot.png'
import {motion} from 'framer-motion'

const languages = [
    {
        key: 1,
        icon:html,
        name:'Html',
        level:'90'
    },
    {
        key: 2,
        icon:css,
        name:'Css',
        level:'85'
    },
    {
        key: 3,
        icon:js,
        name:'JavaScript',
        level:'70'
    },
    {
        key: 4,
        icon: angular,
        name:'Angular',
        level:'65'
    },
    {
        key: 5,
        icon:reactN,
        name:'React',
        level:'80'
    },
    {
        key: 6,
        icon:kotlin,
        name:'Kotlin',
        level:'35'
    },
    {
        key: 7,
        icon:reactN,
        name:'React Native',
        level:'55'
    },
    {
        key: 8,
        icon:aws,
        name:'Aws',
        level:'35'
    },
]

const tools = [
    {
        key: 1,
        icon:vs,
        name:'Visual Studio 2019',
        level:'93'
    },
    {
        key: 1,
        icon:vs,
        name:'Visual Studio Code',
        level:'93'
    },
    {
        key: 2,
        icon:msssms,
        name:'Ms Ssms',
        level:'85'
    },
    {
        key: 3,
        icon:github,
        name:'Github',
        level:'95'
    },
]

function createLanguage(language){
    return <Slider
            name = {language.name}
            icon = {language.icon}
            level = {language.level}
            />;
}

function createTool(tool){
    return <Slider
            name = {tool.name}
            icon = {tool.icon}
            level = {tool.level}
            />;
}

export default class Resume extends Component {
    render() {
        const resumeVar = 
            {
                hidden: 
                {
                   opacity:0
                },
                visible: 
                {
                    opacity: 1,
                    transition: 
                    {
                        delay:0.2, duration:0.6, type: 'spring'
                    }
                }
            }
        return (
            <motion.div className="container resume"
            variants={resumeVar}
            initial='hidden'
            animate='visible'
            >
                <div className="row pb-3 border-bottom border-white">
                    <div className="col-lg-6 resume-card">
                        <h4 className="resume-card-heading">
                            Education
                        </h4>
                    
                        <div className="resume-card-body ">
                            <h6 className="resume-card-title">
                                British Columbia Institute of Technology
                            </h6>
                            <div className="resume-card-name">
                                <div >
                                    <span>Software Systems Development (Web Programming)   </span> 
                                    <div className="pb-1 font-weight-light"><i>Sep 2020 - May 2021</i></div> 
                                </div> 
                                <div>                                                    
                                    <span>Finacial Management (Finance Option)   </span>
                                    <div className="font-weight-light"><i>Sep 2018 - Mar 2010</i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 resume-card">
                            <h4 className="resume-card-heading">
                                Experience
                            </h4>
                        <div className="resume-card-body">
                            <h6 className="resume-card-title">
                                British Columbia Institute of Technology
                            </h6>
                            <div className="resume-card-name">
                                <div >
                                    <span>Web Developer in Training</span> 
                                    <div className="pb-1 font-weight-light"><i>Sep 2020 - May 2021</i></div> 
                                </div> 
                                <h6 className="resume-card-title">
                                    Broadway Tax Clinic
                                </h6>
                                <div>                                                    
                                    <span>Tax Accountant</span>
                                    <div className="font-weight-light"><i>Feb 2016 - May 2020</i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 resume-languages">
                        <div className="resume-language-heading ml-2 mt-3">
                            <h5>Technologies and frameworks</h5>
                        </div>
                        <div className="resume-language-body mt-3">
                            {
                                languages.map(createLanguage)
                            }
                        </div>
                        
                    </div>

                    <div className="col-lg-6 resume-languages">
                        <div className="resume-language-heading ml-2 mt-3">
                            <h5>Tools and Software</h5>
                        </div>
                        <div className="resume-language-body mt-3">
                            {
                                tools.map(createTool)
                            }
                        </div>
                        
                    </div>
                </div>

            </motion.div>
        )
    }
}
