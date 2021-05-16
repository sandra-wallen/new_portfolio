import React from 'react'

import Icon from './Icon'

const Header = () => {
  const iconProps = [
    {
      name: 'LinkedIn',
      link: 'http://www.linkedin.com/in/sandra-melin-wall%C3%A9n-b98119181/',
      img: './assets/linkedin-white.svg'
    },
    {
      name: 'GitHub',
      link: 'http://github.com/sandra-wallen',
      img: './assets/github-white.svg'
    },
    {
      name: 'SO',
      link: 'http://stackoverflow.com/users/14967177/sandra-wall%c3%a9n',
      img: './assets/stackoverflow-white.svg'
    }   
  ]

  return (
    <header className="header">
      <section className="wrapper hero-section">
        <div className="icons-container">
          {iconProps.map((iconProp) => <Icon iconProp={iconProp} />)}
        </div>
        <div className="profile-information">
          <h4>PORTFOLIO: <span className="name-bold">Sandra Melin Wallén</span></h4>
          <h1>frontend developer</h1>
        </div>
        <div className="profile-picture">
          <img src="./pictures/Sandra-profilbild.jpg" alt="Sandra" />
        </div>
      </section>
    </header>
  )
}

export default Header