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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Molestie a iaculis at erat pellentesque adipiscing. Consequat interdum varius sit amet mattis vulputate. 
          Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. 
          Amet est placerat in egestas erat imperdiet sed. Phasellus faucibus scelerisque eleifend donec pretium vulputate. 
          Cras ornare arcu dui vivamus arcu felis bibendum. Cras semper auctor neque vitae. Sit amet nisl purus in mollis nunc sed. 
          Odio pellentesque diam volutpat commodo sed egestas. Id velit ut tortor pretium viverra suspendisse potenti.
        </p>
        <div className="modal-links-container">
          <a href={project.url} className="modal-links" >GitHub repo</a>
          <a href={project.url} className="modal-links" >Deployed site</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails