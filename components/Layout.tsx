import React, { ReactNode } from 'react'

// context
import { useStateContext } from '../context/Context'

// imports
import Navbar from './Navbar'

// interface
interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  // dark mode
  const { isDarkMode } = useStateContext()

  return (
    <div
      className={
        isDarkMode
          ? 'bg-[#121212] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 transition-all scroll-smooth'
          : 'bg-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 transition-all scroll-smooth'
      }
    >
      <header className="sticky top-0 z-10">
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
