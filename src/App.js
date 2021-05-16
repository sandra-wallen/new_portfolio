import React from 'react'

import Header from './components/Header'
import PresentationSection from './components/PresentationSection'
import TechSection from './components/TechSection'
import ProjectSection from './components/ProjectSection'
import OtherProjectSection from './components/OtherProjectSection'
import SkillsSection from './components/SkillsSection'
import MoreSection from './components/MoreSection'
import Footer from './components/Footer'

export const App = () => {
  return (
    <>
      <Header />
      <PresentationSection />
      <TechSection />
      <ProjectSection />
      <OtherProjectSection />
      <SkillsSection />
      <MoreSection />
      <Footer />
    </>
  )
}
