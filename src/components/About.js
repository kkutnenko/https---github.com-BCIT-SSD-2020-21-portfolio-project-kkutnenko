import React, { Component } from 'react'
import Skillcard from '../components/Skillcard'
import testing from '../assets/icons/qa.png'
import frontend from '../assets/icons/frontend.svg'
import backend from '../assets/icons/backend.svg'
import database from '../assets/icons/databases.svg'
import mobile from '../assets/icons/mobile.svg'
import serverless from '../assets/icons/cloud.svg'

const skills = [
    {
        icon: frontend,
        title:"Frontend",
        about:"Modern websites developed with React or Angular"
    },
    {
        icon: backend,
        title:"Backend",
        about:"Complex solutions buit with .Net MVC and Web API"
    },
    {
        icon: database,
        title:"Databases",
        about:"Relational database design and development"
    },
    {
        icon: mobile,
        title:"Mobile",
        about:"Mobile app development with Kotlin/ React Native"
    },
    {
        icon: serverless,
        title:"Serverless",
        about:"Serverless development with Amazon Web Services"
    },
    {
        icon: testing,
        title:"Quality Assurance",
        about:"Automated testing using Selenium WebDriver, MStest and Nunit"
    }

]

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <h6 className="about-intro"> I am a full-stack web/ mobile developer with background in financial accounting and banking. I describe myself as reliable, bondable and result oriented. I am a lifelong learner who loves problem solving.</h6>
            
                <div className="container about-container">
                    <h6 className="about-heading">What I offer</h6>
                        <div className="row">
                            {
                                skills.map(skill =>
                                    <Skillcard skill={skill}/>    
                                )
                            }
                        </div>
                </div>
            </div>
        )
    }
}
