import React, {useState, createContext,useContext} from 'react'

export const AppContext = createContext()

const AppProvider = ({children}) =>{
 const [darkmode, setDarkmode] = useState(false)


  return (
    <AppContext.Provider value={{darkmode, setDarkmode}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider


