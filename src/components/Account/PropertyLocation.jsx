function PropertyLocation() {
    return ( 
        <div>
            <h6>Listing Location</h6>
          <div className="row">
            <div className="col-md-6">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <input type="text" name="ltn__name" placeholder="*Address" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <input type="text" name="ltn__name" placeholder="Country" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <input type="text" name="ltn__name" placeholder="County / State" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <input type="text" name="ltn__name" placeholder="City" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <input type="text" name="ltn__name" placeholder="Zip" />
              </div>
            </div>
          </div>
        </div>
     );
}

export default PropertyLocation;