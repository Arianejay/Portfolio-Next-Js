import React from 'react'

// imports
import SkillsIcon from './SkillsIcon'
import Animate from '../motion/Animate'

const Skills: React.FC = () => {
  return (
    <section id="skills" className="snap-center">
      <Animate>
        <div className="h-screen relative flex flex-col items-center text-center justify-evenly">
          <h2 className="absolute top-24 uppercase text-2xl tracking-[0.5rem]">
            Skills
          </h2>
          <SkillsIcon />
        </div>
      </Animate>
    </section>
  )
}

export default Skills
