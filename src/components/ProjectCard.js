import React from 'react'

import ProjectLang from './ProjectLang'

const ProjectCard = ({ project }) => {
  return (
    <div 
      id="project-container" 
      className="project-container">   
      <img 
        className="project-img" 
        src={project.img} 
        alt={project.projectTitle} />
      <h4>{project.projectTitle}</h4>
      <p>{project.projectDescription}</p>
      <ul>
        {project.lang.map((lang) => <ProjectLang lang={lang} />)}
      </ul>
    </div>
  )
}

export default ProjectCard