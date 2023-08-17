import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios";
import { userSignedInfc } from "./userSignedInfc";
const appContext = createContext(null); 


export const AppContext = ({children}) => {
    const [listings, setListings] = useState([])
    const [loggedUser, setLoggedUser] = useState(); 
    // function getListings(){
    //     axios.get('http://localhost:4000/properties').then((response) => {
    //         console.log(response.data) // for debug remove later
    //         setListings(response.data)
    //     })
    // }
    useEffect (()=> {
        // localStorage.clear()
        userSignedInfc(setLoggedUser); 
        // getListings()
    }, [])
    return (
        <appContext.Provider value={{
            loggedUser,
            setLoggedUser
        }}>
            {children}
        </appContext.Provider>
    )
}
export const useAppContext = () => useContext(appContext); 