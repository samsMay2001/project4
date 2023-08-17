function PropertyLocation({formik}) {
    return ( 
        <div>
            <h6>Listing Location</h6>
          <div className="row">
            <div className="col-md-6">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <input  type="text" name="address" value={formik.values.address} onChange={formik.handleChange}  placeholder="*Address" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <input type="text" name="country" value={formik.values.country} onChange={formik.handleChange}  placeholder="*Country" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <input type="text" name="state" value={formik.values.state} onChange={formik.handleChange}  placeholder="*State" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <input type="text" name="city" value={formik.values.city} onChange={formik.handleChange}  placeholder="*City" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <input type="text" name="zip" value={formik.values.zip} onChange={formik.handleChange}  placeholder="*Zip" />
              </div>
            </div>
          </div>
        </div>
     );
}

export default PropertyLocation;