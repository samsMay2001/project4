import { Link } from "react-router-dom";
import Sidebar from "../SideBar/sidebar";
import './Listings.css'
import Listing from "./Listing";
import FavModal from "./FavModal";
import { useAppContext } from "../../App/appContext";
import { useEffect, useState } from "react";

function ShopGridV1() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    const {listings} = useAppContext()
    const [filteredListings, setFilteredListings] = useState([])
    const [numbers, setNumbers] = useState()
    const [pages, setPages] = useState()
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=> {
        const recordsPerPage = 3
        const lastIndex = currentPage * recordsPerPage
        const firstIndex = lastIndex - recordsPerPage
        const records = listings.slice(firstIndex, lastIndex)
        const pages = Math.ceil(listings.length / recordsPerPage)
        const numbers = [...Array(pages + 1).keys()].slice(1)
        setNumbers(numbers)
        setFilteredListings(records)
        setPages(pages)
    }, [listings, currentPage])
    return ( 
        <div>
			<div className="ltn__product-area ltn__product-gutter" >
				<div className="container">
					<div className="row">
						<div className="col-lg-8 order-lg-2 mb-100">
							<div className="ltn__shop-options">
							<ul className="justify-content-start">
								<li className="d-none">
								<div className="showing-product-number text-right">
									<span>Showing 1–12 of 18 results</span>
								</div> 
								</li>
								<li>
								<div className="short-by text-center">
									<select className="nice-select">
									<option>Default Sorting</option>
									<option>Sort by popularity</option>
									<option>Sort by new arrivals</option>
									<option>Sort by price: low to high</option>
									<option>Sort by price: high to low</option>
									</select>
								</div> 
								</li>
								<li>
								<div className="short-by text-center">
									<select className="nice-select">
									<option>Per Page: 12</option>
									<option>Per Page: 20</option>
									<option>Per Page: 30</option>
									<option>Per Page: 50</option>
									<option>Per Page: 100</option>
									</select>
								</div> 
								</li>
							</ul>
							</div>
							<div className="tab-content listings">
                                <div className="tab-pane fade  active show" id="liton_product_list">
                                    <div className="ltn__product-tab-content-inner ltn__product-list-view">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                {/* Search Widget */}
                                                <div className="ltn__search-widget mb-30">
                                                    <form action="#">
                                                    <input type="text" name="search" placeholder="Search your keyword..." />
                                                    <button type="submit"><i className="fas fa-search" /></button>
                                                    </form>
                                                </div>
                                            </div>
                                            {filteredListings && filteredListings.map((item, index)=> (
                                                <Listing key={index} listing={item} publicUrl={publicUrl}/>
                                            ))}
                                        </div>
                                    </div>
                                </div>
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
						<Sidebar/>
					</div>
				</div>
			</div>
            <FavModal publicUrl={publicUrl}/>
			</div>
     );
}

export default ShopGridV1;