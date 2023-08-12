function PropertyPrice() {
    return ( 
        <div>
            <h6>Property Price</h6>
            <div className="row">
                <div className="col-md-6">
                <div className="input-item  input-item-textarea ltn__custom-icon">
                    <input type="text" name="ltn__name" placeholder="Price in $ (only numbers)" />
                </div>
                </div>
                <div className="col-md-6">
                <div className="input-item input-item-textarea ltn__custom-icon">
                    <input type="text" name="ltn__name" placeholder="After Price Label (ex: /month)" />
                </div>
                </div>
                <div className="col-md-6">
                <div className="input-item input-item-textarea ltn__custom-icon">
                    <input type="text" name="ltn__name" placeholder="Before Price Label (ex: from)" />
                </div>
                </div>
                <div className="col-md-6">
                <div className="input-item input-item-textarea ltn__custom-icon">
                    <input type="text" name="ltn__name" placeholder="Yearly Tax Rate" />
                </div>
                </div>
                <div className="col-md-6">
                <div className="input-item input-item-textarea ltn__custom-icon">
                    <input type="text" name="ltn__name" placeholder="Homeowners Association Fee(monthly)" />
                </div>
                </div>
            </div>
        </div>
     );
}

export default PropertyPrice;