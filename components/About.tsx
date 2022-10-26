/* eslint-disable react/no-unescaped-entities */
import React from 'react'

// context
import { useStateContext } from '../context/Context'

// lib
import { AiOutlineDownload } from 'react-icons/ai'

// imports
import Animate from '../motion/Animate'

const About: React.FC = () => {
  // dark mode
  const { isDarkMode } = useStateContext()

  return (
    <section className="snap-center">
      <Animate>
        <div className="h-screen relative flex flex-col items-center text-center justify-evenly">
          <h2 className="absolute top-24 uppercase text-2xl tracking-[0.5rem]">
            About
          </h2>
          <div className="flex sm:flex-col sm:items-center sm:space-y-8 sm:mt-[5rem] md:justify-center md:items-center md:gap-10 md:flex-col-reverse">
            <div className="w-[50%] flex items-center justify-center sm:w-[70%]">
              <a href="/assets/files/resume.pdf" download="resume.pdf">
                <button
                  className={
                    isDarkMode
                      ? 'flex items-center border-[1.5px] border-[#fff] p-2 uppercase tracking-[0.2rem] button__hover__dark'
                      : 'flex items-center border-[1.5px] border-[#121212] p-2 uppercase tracking-[0.2rem] button__hover__light'
                  }
                >
                  Download CV{' '}
                  <span className="ml-2 text-[1.2rem]">
                    <AiOutlineDownload />
                  </span>
                </button>
              </a>
            </div>
            <p className="w-[50%] flex text-justify items-center p-4 border-l-[1.5px] text-[1.2rem] sm:w-full sm:border-none md:w-[70%] md:border-none">
              I'm a Web Developer based in Tarlac City, Philippines. I find web
              development interesting, exciting, and I always love exploring new
              things!
            </p>
          </div>
        </div>
      </Animate>
    </section>
  )
}

export default About
