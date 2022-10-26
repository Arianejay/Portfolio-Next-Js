// next and react
import { createContext, useContext, useState } from 'react'

// types
import { IToggle } from '../types/DarkMode'

const Context = createContext({} as IToggle)

export const useStateContext = () => useContext(Context)

export const StateContext = ({ children }: any) => {
  // dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => false)

  return (
    <Context.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </Context.Provider>
  )
}
