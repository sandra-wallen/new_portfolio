import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const ProjectDetails = ({ project, setShowDetails }) => {
  const handleOnClick = () => {
    setShowDetails(false)
  }

  return (
    <div className="modal-container">
      <div className="modal">
        <button className="modal-close" type="button" onClick={handleOnClick}><AiOutlineClose /></button>
        <img className="modal-img" src={project.img} alt={project.projectTitle} />
        <h2>{project.projectTitle}</h2>
        <p>{window.innerWidth <= 767 ? project.projectDescription : project.longDescription}</p>
        <div className="modal-links-container">
          <a href={project.url} className="modal-links">GitHub repo</a>
          <a href={project.site} className="modal-links">Deployed site</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails