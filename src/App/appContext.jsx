import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios";
import { userSignedInfc } from "./userSignedInfc";
const appContext = createContext(null); 


export const AppContext = ({children}) => {
    const [listings, setListings] = useState([])
    const [loggedUser, setLoggedUser] = useState(); 
    const [propertyToEdit, setPropertyToEdit] = useState(); 
    const [currentListing, setCurrentListing] = useState(); 
    const [currentAgent, setCurrentAgent] = useState()
    const [agents, setAgents] = useState()
    function getListings(){
        axios.get('http://localhost:4000/properties').then((response) => {
            setListings(response.data)
        })
    }
    function getAgents (){
        axios.get('http://localhost:4000/users').then((response)=> {
            setAgents(response.data)
        })
    }
    useEffect (()=> {
        // localStorage.clear()
        userSignedInfc(setLoggedUser); 
        getListings()
        getAgents()
    }, [])
    return (
        <appContext.Provider value={{
            loggedUser,
            setLoggedUser, 
            listings, 
            setListings,
            agents, 
            getAgents,
            currentListing, 
            setCurrentListing, 
            currentAgent,
            setCurrentAgent
        }}>
            {children}
        </appContext.Provider>
    )
}
export const useAppContext = () => useContext(appContext); 