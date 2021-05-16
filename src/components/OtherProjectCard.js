import React from 'react'

import ProjectLang from './ProjectLang'

const OtherProjectCard = ({ project }) => {
  return (
    <div className="project-container">
      <h4>{project.projectTitle}</h4>
      <p>{project.projectDescription}</p>
      <ul>
        {project.lang.map((lang) => <ProjectLang lang={lang} />)}
      </ul>
    </div>
  )
}

export default OtherProjectCard