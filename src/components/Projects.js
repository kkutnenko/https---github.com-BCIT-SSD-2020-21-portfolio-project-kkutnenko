import React from 'react';
import Data from './data/ProjectData'
import ProjectCard from './ProjectCard'

const componentName = () => {
    return (
        <div>
            <div className="container projects">
                <div className="row">
                    {
                        Data.map(project=> 
                            <ProjectCard key={project.name} project={project} />)
                    }

                </div>
            </div>
        </div>
    );
};

export default componentName;
