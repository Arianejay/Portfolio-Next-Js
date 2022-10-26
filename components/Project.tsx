import Image from 'next/image'
import React from 'react'

// types
import { IProjectData } from '../types/ProjectData'

// context
import { useStateContext } from '../context/Context'

// imports
import Animate from '../motion/Animate'

const Project: React.FC<IProjectData> = ({ ProjectData }) => {
  // dark mode
  const { isDarkMode } = useStateContext()

  const { id, title, description, model, tech, demo, github } = ProjectData

  return (
    <Animate>
      <div
        className={
          id !== 1
            ? 'flex h-full w-full items-center justify-center flex-row-reverse sm:flex-col sm:mt-6 md:flex-col'
            : 'flex h-full w-full items-center justify-center mt-[6rem] sm:flex-col sm:mt-4 md:flex-col md:gap-20'
        }
      >
        <div className="w-[50%] flex items-center justify-center sm:w-full sm:h-[50%]">
          <div className="w-full h-full flex justify-center items-center sm:w-[65%] sm:h-[65%]">
            <Image src={model} alt="modelimg" />
          </div>
        </div>
        <div className="w-[50%] sm:w-full md:w-full">
          <div className="flex flex-col items-center justify-center h-full w-full p-6">
            <div className="flex flex-col text-left gap-10 sm:gap-4">
              <div className="sm:flex sm:items-center sm:w-full">
                <h1 className="text-[2.3rem] font-extrabold tracking-[0.1rem] sm:text-[2rem] sm:w-full sm:border-r-[1.5px]">
                  {title}
                </h1>
                <div className="flex items-center w-full gap-2 sm:justify-end sm:ml-2">
                  {tech.map((image, i) => (
                    <Image className="" key={i} src={image} alt="img" />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[1.2rem] text-justify first-letter:ml-8">
                  {description}
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  className="uppercase tracking-[0.2rem] opacity-50 hover:opacity-100 transition-all"
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  className="uppercase tracking-[0.2rem] opacity-50 hover:opacity-100 transition-all"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Animate>
  )
}

export default Project
