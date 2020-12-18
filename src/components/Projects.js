import React, { useEffect, useState } from "react";
import projectData from './data/ProjectData'
import ProjectCard from './ProjectCard'
import {motion} from 'framer-motion'

const Projects = () => {
    const [projects, setProjects] = useState(projectData)
    
    const categoryFilter = (name) => {
        const newArray = projectData.filter(project => project.category.includes(name))
        setProjects(newArray)
    }

    const projectVar = 
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
        <motion.div className="container projects"
            variants={projectVar}
                    initial='hidden'
                    animate='visible'
        >
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
        </motion.div>
    );
};

export default Projects;
