import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../App/appContext";


function Listing({publicUrl, listing}) {
    const {agents, setCurrentListing, setCurrentAgent} = useAppContext()
    const [agent, setAgent] = useState()
    function findAgent(){
        const agentIndex = agents.findIndex(agent => agent._id == listing.agentId); 
        setAgent(agents[agentIndex]); 
        setCurrentListing(listing)
        setCurrentAgent(agents[agentIndex])
    }
    useEffect(()=> {
        findAgent()
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
                            <li>
                                <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                <i className="flaticon-expand" />
                                </a>
                            </li>
                            <li>
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