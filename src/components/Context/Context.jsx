import { createContext, useState } from 'react'

export const LangContext = createContext()

export default function Context({ children }) {
   const [language, setLanguage] = useState("ru")
   return (
      <LangContext.Provider value={{ language, setLanguage }}>
         {children}
      </LangContext.Provider>
   )
}
