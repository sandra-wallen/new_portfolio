import React from 'react'

import BottomIcon from './BottomIcon'

const MoreSection = () => {
  const iconProps = [
    {
      name: 'linkedin',
      link: 'http://www.linkedin.com/in/sandra-melin-wall%C3%A9n-b98119181/',
      img: './assets/linkedin-pink.svg'
    },
    {
      name: 'github',
      link: 'http://github.com/sandra-wallen',
      img: './assets/github-pink.svg'
    },
    {
      name: 'stack-overflow',
      link: 'http://stackoverflow.com/users/14967177/sandra-wall%c3%a9n',
      img: './assets/stackoverflow-pink.svg'
    }   
  ]
  return (
    <section className="more-section">
      <h3 className="sub-heading">FOR MORE</h3>
      <div className="more-section-div">
        <div className="icons-container-two">
          {iconProps.map((iconProp) => <BottomIcon iconProp={iconProp} />)}
        </div>
      </div>
    </section>
  )
}

export default MoreSection