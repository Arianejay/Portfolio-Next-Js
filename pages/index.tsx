// next and react
import type { NextPage } from 'next'

// imports
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import { ProjectsData } from '../data/ProjectsData'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />

      {ProjectsData.map((ProjectData, i) => (
        <Projects key={i} ProjectData={ProjectData} />
      ))}

      <Contact />
    </div>
  )
}

export default Home
