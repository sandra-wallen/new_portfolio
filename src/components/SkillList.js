import React from 'react'

import SkillItem from './SkillItem'

const SkillList = ({ category }) => {
  return (
    <div className={`skills-container ${category.class}`}>
      <h4 className="skills-heading">{category.heading.toUpperCase()}</h4>
      <ul>
        {category.skills.map((skill) => <SkillItem skill={skill} />)}
      </ul>
    </div>
  )
}

export default SkillList