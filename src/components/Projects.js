import React, { useEffect, useState } from "react";
import projectData from './data/ProjectData'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const [projects, setProjects] = useState(projectData)
    
    const categoryFilter = (name) => {
        const newArray = projectData.filter(project => project.category.includes(name))
        setProjects(newArray)
    }
    return (
        <div className="container projects">
            <div className="projects-navbar">
                <div onClick={()=>setProjects(projectData)}>All</div>
                <div onClick={()=>categoryFilter('ReactJS')}>ReactJS</div>
                <div onClick={()=>categoryFilter('Angular')}>Angular</div>
                <div onClick={()=>categoryFilter('HTML')}>HTML</div>
                <div onClick={()=>categoryFilter('JavaScript')}>JavaScript</div>
                <div onClick={()=>categoryFilter('Asp.Net')}>Asp.Net</div>
            </div>    
            
            <div className="row">
                    {
                        projects.map(project=> 
                            <ProjectCard key={project.name} project={project} />)
                    }
            </div>            
        </div>
    );
};

export default Projects;
