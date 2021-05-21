import React, { useState } from 'react'

import ProjectLang from './ProjectLang'
import ProjectDetails from './ProjectDetails'

const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false)

  const handleOnClick = () => {
    setShowDetails(true)
  }
  return (
    <>
      <div 
        id="project-container" 
        className="project-container"
        onClick={window.innerWidth >= 768 ? handleOnClick : window.open(project.site)}>
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
      {showDetails && (<ProjectDetails project={project} setShowDetails={setShowDetails} />)}
    </>
  )
}

export default ProjectCard