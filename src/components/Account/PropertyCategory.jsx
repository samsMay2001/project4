function PropertyCategory() {
    return ( 
        <div>
            <h6>Select Categories</h6>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                <div className="input-item">
                    <select className="nice-select">
                    <option>None</option>
                    <option>Apartments</option>
                    <option>Condos</option>
                    <option>Duplexes</option>
                    <option>Houses</option>
                    <option>Industrial</option>
                    <option>Land</option>
                    <option>Offices</option>
                    <option>Retail</option>
                    <option>Villas</option>
                    </select>
                </div>
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="input-item">
                    <select className="nice-select">
                    <option>None</option>
                    <option>Rentals</option>
                    <option>Sales</option>
                    </select>
                </div>
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="input-item">
                    <select className="nice-select">
                    <option>no status</option>
                    <option>Active</option>
                    <option>hot offer</option>
                    <option>new offer</option>
                    <option>open house</option>
                    <option>sold</option>
                    </select>
                </div>
                </div>
            </div>   
        </div>
     );
}

export default PropertyCategory;