function PropertyDetails() {
    return ( 
        <div>
            <h6>Listing Details</h6>
          <div className="row">
            <div className="col-md-6">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <input type="text" name="ltn__name" placeholder="Size in ft2 (*only numbers)" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <input type="text" name="ltn__name" placeholder="Lot Size in ft2 (*only numbers)" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <input type="text" name="ltn__name" placeholder="Rooms (*only numbers)" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <input type="text" name="ltn__name" placeholder="Bedrooms (*only numbers)" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <input type="text" name="ltn__name" placeholder="Bathrooms (*only numbers)" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <input type="text" name="ltn__name" placeholder="Parking (*text)" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <input type="text" name="ltn__name" placeholder="Garage Size (*text)" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <input type="text" name="ltn__name" placeholder="Available from (*date)" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item">
                <select className="nice-select">
                  <option>Floors No</option>
                  <option>Not Available</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <textarea name="ltn__message" placeholder="Owner/Agent notes (*not visible on front end)" defaultValue={""} />
              </div>
            </div>
          </div>
        </div>
     );
}

export default PropertyDetails;