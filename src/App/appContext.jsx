import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios";
import { userSignedInfc } from "./userSignedInfc";
const appContext = createContext(null); 


export const AppContext = ({children}) => {
    const [listings, setListings] = useState([])
    const [loggedUser, setLoggedUser] = useState(); 
    const [propertyToEdit, setPropertyToEdit] = useState(); 
    function getListings(){
        axios.get('http://localhost:4000/properties').then((response) => {
            setListings(response.data)
        })
    }
    useEffect (()=> {
        // localStorage.clear()
        userSignedInfc(setLoggedUser); 
        getListings()
    }, [])
    return (
        <appContext.Provider value={{
            loggedUser,
            setLoggedUser, 
            listings, 
            setListings
        }}>
            {children}
        </appContext.Provider>
    )
}
export const useAppContext = () => useContext(appContext); 