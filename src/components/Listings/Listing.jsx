import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../App/appContext";
import axios from "axios";
import qs from 'qs'

function Listing({publicUrl, listing}) {
    const {agents, setCurrentListing, setCurrentAgent, setLoggedUser, loggedUser} = useAppContext()
    const [agent, setAgent] = useState()
    const [fav, setFav] = useState(false) 
    function findAgent(){
        const agentIndex = agents.findIndex(agent => agent._id == listing.agentId); 
        setAgent(agents[agentIndex]); 
        setCurrentListing(listing)
        setCurrentAgent(agents[agentIndex])
    }
    function addToFav(){
        setFav((oldVal)=>{
            addFavUpdate(oldVal); 
            return !oldVal
        })
    }

    async function addFavUpdate( addedToFav){
        const loggedUserCopy = {...loggedUser}
        if (!addedToFav){ // add this property to the user's favorites
            loggedUserCopy.favorites = [...loggedUser.favorites, listing._id]
        } else { // filter this property from the user's favorites
            loggedUserCopy.favorites = loggedUser.favorites.filter(favorite => favorite !== listing._id); 
        }
        const updateObj = {
            firstname : loggedUserCopy.firstname, 
            lastname : loggedUserCopy.lastname,
            email : loggedUserCopy.email, 
            password : loggedUserCopy.password,
            address : loggedUserCopy.address, 
            favorites : loggedUserCopy.favorites
        }
        try {
            await axios.post('http://localhost:4000/edit', qs.stringify(updateObj), {
                header: {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                },
            })
            console.log('added to favorites')
            setLoggedUser(loggedUserCopy)
            localStorage.setItem('my-key', JSON.stringify(loggedUserCopy)); 
        }catch(err){
            console.log(err, 'there was an error')
        }
    } 
    function filterFavProperties(){
        const isFav = loggedUser.favorites.includes(listing._id); 
        setFav(isFav); 

    }
    useEffect(()=> {
        findAgent()
        filterFavProperties(); 
    }, [])
    return ( 
        <div className="col-lg-12">
            <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
                <div className="product-img go-top">
                    <Link to="/product-details"><img src={publicUrl+"assets/img/product-3/1.jpg"} alt="#" /></Link>
                </div>
                <div className="product-info">
                    <div className="product-badge-price">
                        <div className="product-badge">
                            <ul>
                                {listing.category2 === "Rentals" && <li className="sale-badg">For Rent</li>}
                                {listing.category2 === "Sales" && <li className="sale-badg">For Sell</li>}
                            </ul>
                        </div>
                        <div className="product-price">
                            <span>${listing.price}<label>/Month</label></span>
                        </div>
                    </div>
                    <h2 className="product-title go-top"><Link to="/listing-details">{listing.title}</Link></h2>
                    <div className="product-img-location go-top">
                        <ul>
                            <li>
                                <Link to="/contact"><i className="flaticon-pin" /> {listing.address}</Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                        <li><span>{listing.rooms} </span>
                            Bed
                        </li>
                        <li><span>2 </span>
                            Bath
                        </li>
                        <li><span>{listing.size} </span>
                            Square Ft
                        </li>
                    </ul>
                </div>
                <div className="product-info-bottom">
                    <div className="real-estate-agent">
                        <div className="agent-img">
                            <Link to="/shop"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
                        </div>
                        {agent && <div className="agent-brief">
                            <h6><Link to="/team-details">{agent.firstname} {agent.lastname}</Link></h6>
                            <small>Estate Agents</small>
                        </div>}
                    </div>
                    <div className="product-hover-action">
                        <ul>
                            <li className={fav && 'favorite-on'} onClick={addToFav}>
                                <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                <i className="flaticon-heart-1" /></a>
                            </li>
                            <li className="go-top">
                                <Link to="/listing-details" title="Product Details">
                                    <i className="flaticon-add" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Listing;