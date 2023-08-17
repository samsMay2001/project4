import { Link } from "react-router-dom";
import MyProperty from "./MyProperty";
import { useEffect, useState } from "react";
import { useAppContext } from "../../App/appContext";

function MyProperties({publicUrl, title, id}) {
    const {listings, loggedUser} = useAppContext()
    const [filteredListings, setFilteredListings] = useState([])
    const [currentPage, setCurrentPage] = useState(1); 
    const [pages, setPages] = useState()
    const [numbers, setNumbers] = useState()
    
    function sortListings(listings, id) {
        const filteredListings = listings.filter(listing => listing.agentId === id);
        const recordsPerPage = 3
        const lastIndex = currentPage * recordsPerPage
        const firstIndex = lastIndex - recordsPerPage
        const records = filteredListings.slice(firstIndex, lastIndex)
        const pages = Math.ceil(filteredListings.length / recordsPerPage)
        const numbers = [...Array(pages + 1).keys()].slice(1)
        setNumbers(numbers)
        setFilteredListings(records)
        setPages(pages)
    }
    useEffect(()=> {
        sortListings(listings, loggedUser._id)
    }, [currentPage])
    return ( 
        <div className="tab-pane fade" id={id}>
						<div className="ltn__myaccount-tab-content-inner">
						  <div className="ltn__my-properties-table table-responsive" style={{height: '300px !important'}}>
							<table className="table">
							  <thead>
								<tr>
								  <th scope="col">{title}</th>
								  <th scope="col" />
								  <th scope="col">Date Added</th>
								  <th scope="col">Actions</th>
								  <th scope="col">Delete</th>
								</tr>
							  </thead>
							  <tbody>
                                {filteredListings.map((item, index)=>(
								  <MyProperty key={index} publicUrl={publicUrl} listing={item}/>
                                ))}
							  </tbody>
							</table>
						  </div>
						  <div className="ltn__pagination-area text-center">
							<div className="ltn__pagination">
                                <ul>
                                    <li><i className="fas fa-angle-double-left" /></li>
                                    {numbers && numbers.map((i,d)=> (
                                        <li onClick={()=>{setCurrentPage(i)}}><Link>{i}</Link></li>
                                    )
                                    )}
                                    <li><i className="fas fa-angle-double-right" /></li>
                                </ul>
							</div>
						</div>
						</div>
					  </div>
     );
}

export default MyProperties;