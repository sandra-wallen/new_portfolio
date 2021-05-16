import React from 'react'

const BottomIcon = ({ iconProp }) => {
  return (
    <a className={iconProp.name} href={iconProp.link}>
      <div className="bottom-icons-wrapper icons-wrapper">
        <img className="bottom-icon icon" src={iconProp.img} alt="" />
      </div>
    </a>
  )
}

export default BottomIcon