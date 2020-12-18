import React, { Component } from 'react'
import Skills from './Skills'
import testing from '../assets/icons/qa.png'
import frontend from '../assets/icons/frontend.svg'
import backend from '../assets/icons/backend.svg'
import database from '../assets/icons/databases.svg'
import mobile from '../assets/icons/mobile.svg'
import serverless from '../assets/icons/cloud.svg'
import {motion} from 'framer-motion'

const skills = [
    {
        icon: frontend,
        title:"Frontend",
        about:"Modern websites and single page web apps developed with latest technology"
    },
    {
        icon: backend,
        title:"Backend",
        about:"Complex solutions buit with .Net and Node.JS"
    },
    {
        icon: database,
        title:"Databases",
        about:"Relational database design and development"
    },
    {
        icon: mobile,
        title:"Mobile",
        about:"Mobile app development for iOS and Android"
    },
    {
        icon: serverless,
        title:"Serverless",
        about:"Serverless development with Amazon Web Services"
    },
    {
        icon: testing,
        title:"Quality Assurance",
        about:"Automated testing using scripts and unit test Frameworks"
    }

]

export default class About extends Component {
    render() {
        const aboutVar = 
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
            <motion.div className="container about"
            variants={aboutVar}
                initial='hidden'
                animate='visible'
            >
                <p className="about-intro"> I am a full-stack web/mobile developer with background in financial accounting and banking. I describe myself as reliable, bondable and result oriented. I am a lifelong learner who loves problem solving.</p>
                
                <p className="about-intro">When not coding, you can find me on a skating rink, in the mountains riding my snowboard, or playing with my children. I greatly enjoy travelling and taking photos while doing so.</p>
            
                <div className="container about-container">
                    <h6 className="about-heading">What I offer</h6>
                        <div className="row">
                            {
                                skills.map(skill =>
                                    <Skills skill={skill}/>    
                                )
                            }
                        </div>
                </div>
            </motion.div>
        )
    }
}
