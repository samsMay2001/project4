import { createContext, useContext } from "react"

const appContext = createContext(null); 

export const AppContext = ({children}) => {
    return (
        <appContext.Provider value={{}}>
            {children}
        </appContext.Provider>
    )
}
export const useAppContext = () => useContext(appContext); 