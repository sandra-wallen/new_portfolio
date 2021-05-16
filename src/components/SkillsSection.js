import React from 'react'
import { skillsCategories } from '../skills'

import SkillList from './SkillList'

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <h3 className="sub-heading">SKILLS</h3>
      <div className="skills-section-div">
        {skillsCategories.map((skill) => <SkillList category={skill} />)}
      </div>
    </section>
  )
}

export default SkillsSection