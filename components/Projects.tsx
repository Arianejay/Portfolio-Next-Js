import React from 'react'

// types
import { IProjectData } from '../types/ProjectData'

// imports
import Project from './Project'
import Animate from '../motion/Animate'

const Projects: React.FC<IProjectData> = ({ ProjectData }) => {
  const { id } = ProjectData

  return (
    <section id="projects" className="snap-center">
      <Animate>
        <div className="h-screen relative flex flex-col items-center text-center justify-center">
          <h2
            className={
              id === 1
                ? 'absolute top-24 uppercase text-2xl tracking-[0.5rem]'
                : 'hidden'
            }
          >
            Projects
          </h2>
          <Project ProjectData={ProjectData} />
        </div>
      </Animate>
    </section>
  )
}

export default Projects
