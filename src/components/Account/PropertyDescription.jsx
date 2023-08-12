function PropertyDescription() {
    return ( 
        <div>
             <h6>Property Description</h6>
            <div className="row">
                <div className="col-md-12">
                <div className="input-item input-item-textarea ltn__custom-icon">
                    <input type="text" name="ltn__name" placeholder="*Title (mandatory)" />
                </div>
                <div className="input-item input-item-textarea ltn__custom-icon">
                    <textarea name="ltn__message" placeholder="Description" defaultValue={""} />
                </div>
                </div>
            </div>
        </div>
     );
}

export default PropertyDescription;