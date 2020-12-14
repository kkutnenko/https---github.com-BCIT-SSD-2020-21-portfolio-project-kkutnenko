import React from 'react';
import gitIcon from '../assets/icons/github.svg'
import gitItem from '../assets/icons/github.svg'

const componentName = ({project:{name, image, github}}) => {
    return (
        <div className="projectCard col-lg4 col-md-6 my-2" >            
            <figure className="projectCard-wrapper">
                <a href={github}>
                    <img src={image} alt={name} className="projectCard-image"/>
                </a>
                {name}                
            </figure>           
        </div>
    );
};

export default componentName;