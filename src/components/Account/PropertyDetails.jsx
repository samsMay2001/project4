function PropertyDetails({formik}) {
    return ( 
        <div>
            <h6>Listing Details</h6>
          <div className="row">
            <div className="col-md-6">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <input name="size" value={formik.values.size} onChange={formik.handleChange}  type="text" placeholder="*Size in ft2 (only numbers)" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <input type="text" name="rooms" value={formik.values.rooms} onChange={formik.handleChange} placeholder="*Rooms (only numbers)" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <input type="text" name="parking" value={formik.values.parking} onChange={formik.handleChange}  placeholder="*Parking (text)" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <input type="text" name="dateAvailable" value={formik.values.dateAvailable} onChange={formik.handleChange}  placeholder="*Available from (date)" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item">
                <select className="nice-select" name="floors" value={formik.values.floors} onChange={formik.handleChange} >
                  <option>Floors</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
          </div>
        </div>
     );
}

export default PropertyDetails;