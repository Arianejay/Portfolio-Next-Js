import React, { useState } from 'react'
import Link from 'next/link'

// context
import { useStateContext } from '../context/Context'

// lib
import { Rotate as Hamburger } from 'hamburger-react'
import { motion } from 'framer-motion'

// imports
import Dropdown from './Dropdown'

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const { setIsDarkMode, isDarkMode } = useStateContext()

  // framer-motion
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  }

  return (
    <>
      <div
        className={
          isDarkMode
            ? 'p-5 flex items-center justify-between bg-[#121212] opacity-90'
            : 'p-5 flex items-center justify-between bg-white opacity-90 sm:h-[3rem]'
        }
      >
        <ul className="sm:hidden flex flex-row items-center space-x-2 uppercase tracking-[0.3rem] opacity-50">
          <li className="cursor-pointer navbar__links">
            <Link href={'#skills'}>Skills</Link>
          </li>
          <li className="text-2xl">|</li>
          <li className="cursor-pointer">
            <Link href={'#projects'}>Projects</Link>
          </li>
        </ul>
        <div className="hidden sm:inline-flex">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <label className="toggleDarkBtn">
          <input type="checkbox" onClick={() => setIsDarkMode(!isDarkMode)} />
          <span className="slideBtnTg round"></span>
        </label>
      </div>
      <motion.div
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        className={isOpen ? 'hidden sm:flex' : 'hidden'}
      >
        <Dropdown />
      </motion.div>
    </>
  )
}

export default Navbar
