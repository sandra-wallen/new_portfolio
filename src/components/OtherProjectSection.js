import React from 'react'
import { projectArray } from '../projects'

import OtherProjectCard from './OtherProjectCard'

const OtherProjectSection = () => {
  let slicedProjects 
  if (window.innerWidth <= 767) {
    slicedProjects = projectArray.slice(2, 4)
  } else if (window.innerWidth >= 768) {
    slicedProjects = projectArray.slice(4, 6)
  }

  return (
    <section className="other-project-section">
      <h3 className="sub-heading-two">OTHER PROJECTS</h3>
      <div id="other-project-section-div" className="other-project-section-div">
        {slicedProjects.map((project) => <OtherProjectCard project={project} />)}
      </div>
    </section>
  )
}

export default OtherProjectSection