import Link from 'next/link'
import React from 'react'

// context
import { useStateContext } from '../context/Context'

const Dropdown: React.FC = () => {
  const { isDarkMode } = useStateContext()

  return (
    <div
      className={
        isDarkMode
          ? 'h-40 w-screen z-30 bg-[#121212] border-b-[1px] opacity-90'
          : 'h-40 w-screen z-30 bg-white border-b-[1px] opacity-90'
      }
    >
      <ul className="flex flex-col items-center justify-evenly pb-8 h-full uppercase tracking-[0.3rem]">
        <li className="cursor-pointer">
          <Link href={'#skills'}>Skills</Link>
        </li>
        <li className="cursor-pointer">
          {' '}
          <Link href={'#projects'}>Projects</Link>
        </li>
      </ul>
    </div>
  )
}

export default Dropdown
