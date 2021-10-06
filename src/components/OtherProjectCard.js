import React from 'react'

import ProjectLang from './ProjectLang'

const OtherProjectCard = ({ project }) => {
  return (
    <a className="project-container__url" href={project.url}>
      <div className="project-container">
        <h4>{project.projectTitle}</h4>
        <p>{project.projectDescription}</p>
        <ul>
          {project.lang.map((lang) => <ProjectLang lang={lang} />)}
        </ul>
      </div>
    </a>
  )
}

export default OtherProjectCard