import React, { Children } from 'react'
const GlobalContext = React.createContext()

const ContextProvider = ({children}) => {
    const store ={}
    return (
        <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  )
}

export { ContextProvider,GlobalContext }
