import React from 'react';
import gitIcon from '../assets/icons/github.svg'

const componentName = ({project:{name, image, github}}) => {
    return (
        <div className="projectCard col-lg4 col-md-6 col-sm-12" >
            <figure className="projectCard_wrapper">
                <a href='#'>
                    <img src={image} alt={name} className="projectCard-image"/>
                </a>
                <div className="project-card-title">
                    <a href={github} target="_blank">
                        <img src={gitItem} alt='githubLink' className="projectCard-image"/>
                    </a>
                </div>
            </figure>
            
        </div>
    );
};

export default componentName;