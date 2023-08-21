function DetailsTable({currentListing}) {
    return ( 
        <div>
            <h4 className="title-2">Property Detail</h4>
						<div className="property-detail-info-list section-bg-1 clearfix mb-60">
							<ul>
								<li>
									<label>Property ID:</label> <span>HZ29</span>
								</li>
								<li>
								<	label>Home Area: </label> <span>{currentListing.size}</span>
								</li>
								<li>
									<label>Rooms:</label> <span>{currentListing.rooms}</span>
								</li>
								<li>
									<label>Baths:</label> <span>2</span>
								</li>
								<li>
									<label>Year built:</label> <span>2023</span>
								</li>
							</ul>
							<ul>
								<li>
									<label>Lot Area:</label> <span>{currentListing.zip} </span>
								</li>
								<li>
									<label>Lot dimensions:</label> <span>160 sqft</span>
								</li>
								<li>
									<label>Beds:</label> <span>{currentListing.rooms}</span>
								</li>
								<li>
									<label>Price:</label> <span>${currentListing.price}</span>
								</li>
								<li>
									<label>Property Status:</label> 
                                    {currentListing.category2 === "Rentals" &&<span>For Rent</span>}
                                    {currentListing.category2 === "Sales" &&<span>For Sell</span>}
								</li>
							</ul>
						</div>
        </div>
     );
}

export default DetailsTable;