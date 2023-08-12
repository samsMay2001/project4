function DetailsTable() {
    return ( 
        <div>
            <h4 className="title-2">Property Detail</h4>
						<div className="property-detail-info-list section-bg-1 clearfix mb-60">
							<ul>
								<li>
									<label>Property ID:</label> <span>HZ29</span>
								</li>
								<li>
								<	label>Home Area: </label> <span>120 sqft</span>
								</li>
								<li>
									<label>Rooms:</label> <span>7</span>
								</li>
								<li>
									<label>Baths:</label> <span>2</span>
								</li>
								<li>
									<label>Year built:</label> <span>1992</span>
								</li>
							</ul>
							<ul>
								<li>
									<label>Lot Area:</label> <span>HZ29 </span>
								</li>
								<li>
									<label>Lot dimensions:</label> <span>120 sqft</span>
								</li>
								<li>
									<label>Beds:</label> <span>7</span>
								</li>
								<li>
									<label>Price:</label> <span>2</span>
								</li>
								<li>
									<label>Property Status:</label> <span>For Sale</span>
								</li>
							</ul>
						</div>
        </div>
     );
}

export default DetailsTable;