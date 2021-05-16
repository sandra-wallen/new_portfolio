import React from 'react'
import { projectArray } from '../projects'

import ProjectCard from './ProjectCard'

const ProjectSection = () => {
  let slicedProjects 
  if (window.innerWidth <= 767) {
    slicedProjects = projectArray.slice(0, 2)
  } else if (window.innerWidth >= 768) {
    slicedProjects = projectArray.slice(0, 4)
  }

  return (
    <section id="project-section" className="project-section">
      <h2 className="sub-heading">FEATURED PROJECTS</h2>
      <div id="project-section-div" className="project-section-div">
        {slicedProjects.map((project) => <ProjectCard project={project} />)}
      </div>
    </section>
  )
}

export default ProjectSection