import React from 'react'

const Icon = ({ iconProp }) => {
  return (
    <a href={iconProp.link}>
      <div className="icons-wrapper">
        <img className="icon" src={iconProp.img} alt="" />
      </div>
    </a>
  )
}

export default Icon