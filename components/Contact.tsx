import React from 'react'

// lib
import { BsPhone } from 'react-icons/bs'
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

// imports
import ContactForm from './ContactForm'
import Footer from './Footer'
import Animate from '../motion/Animate'

const Contact: React.FC = () => {
  return (
    <section className="snap-center">
      <Animate>
        <div className="h-screen relative flex flex-col items-center text-center justify-center">
          <h2 className="absolute top-24 uppercase text-2xl tracking-[0.5rem] sm:tracking-[0.25rem] sm:text-xl">
            What can I do for you?
          </h2>

          {/* Large Screens */}
          <div className="flex w-full h-full items-center justify-center mt-20 sm:hidden md:hidden">
            <div className="w-[50%] flex items-center justify-center p-8 border-r-[1.5px] text-[1.2rem]">
              <div className="w-full h-full flex flex-col gap-4 p-4">
                <div className="w-full flex items-center text-left mx-[30%] py-2 px-4">
                  <div className="mr-4 border-r-[1.5px] pr-2">
                    <BsPhone />
                  </div>
                  <p className="uppercase tracking-[1px]">0927 062 1519</p>
                </div>
                <div className="flex items-center text-left mx-[30%] py-2 px-4">
                  <div className="mr-4 border-r-[1.5px] pr-2">
                    <AiOutlineMail />
                  </div>
                  <p className="uppercase tracking-[1px]">
                    Arianejaytantan@gmail.com
                  </p>
                </div>
                <div className="flex items-center text-left mx-[30%] py-2 px-4">
                  <div className="mr-4 border-r-[1.5px] pr-2">
                    <AiFillLinkedin />
                  </div>
                  <a
                    href="https://www.linkedin.com/in/ariane-jay-tan-29339b193/"
                    target="_blank"
                    rel="noreferrer"
                    className="uppercase tracking-[1px]"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center text-left mx-[30%] py-2 px-4">
                  <div className="mr-4 border-r-[1.5px] pr-2">
                    <AiFillGithub />
                  </div>
                  <a
                    href="https://github.com/Arianejay"
                    target="_blank"
                    rel="noreferrer"
                    className="uppercase tracking-[1px]"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <ContactForm />
            </div>
          </div>

          {/* Medium and Small Screens */}
          <div className="w-full hidden sm:flex sm:flex-col sm:items-center sm:justify-center sm:mt-16 md:flex md:flex-col md:items-center md:justify-center">
            <div className="w-full">
              <ContactForm />
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="flex flex-col gap-2">
                <div className="w-full flex items-center">
                  <div className="mr-4 border-r-[1.5px] pr-2">
                    <BsPhone />
                  </div>
                  <p className="uppercase tracking-[1px]">0927 062 1519</p>
                </div>
                <div className="w-full flex items-center">
                  <div className="mr-4 border-r-[1.5px] pr-2">
                    <AiOutlineMail />
                  </div>
                  <p className="uppercase tracking-[1px]">
                    Arianejaytantan@gmail.com
                  </p>
                </div>
                <div className="w-full flex items-center">
                  <div className="mr-4 border-r-[1.5px] pr-2">
                    <AiFillLinkedin />
                  </div>
                  <a
                    href="https://www.linkedin.com/in/ariane-jay-tan-29339b193/"
                    target="_blank"
                    rel="noreferrer"
                    className="uppercase tracking-[1px]"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="w-full flex items-center">
                  <div className="mr-4 border-r-[1.5px] pr-2">
                    <AiFillGithub />
                  </div>
                  <a
                    href="https://github.com/Arianejay"
                    target="_blank"
                    rel="noreferrer"
                    className="uppercase tracking-[1px]"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* footer */}
          <Footer />
        </div>
      </Animate>
    </section>
  )
}

export default Contact
