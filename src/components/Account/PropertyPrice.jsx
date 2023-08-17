function PropertyPrice({formik}) {
    return ( 
        <div>
            <h6>Property Price</h6>
            <div className="row">
                <div className="col-md-6">
                <div className="input-item  input-item-textarea ltn__custom-icon">
                    <input type="text" name="price" placeholder="Price in $ (only numbers)" value={formik.values.price} onChange={formik.handleChange} />
                </div>
                </div>
                <div className="col-md-6">
                <div className="input-item input-item-textarea ltn__custom-icon">
                    <input type="text" name="pricePerMonth" placeholder="After Price Label (ex: /month)"  value={formik.values.pricePerMonth} onChange={formik.handleChange} />
                </div>
                </div>
                <div className="col-md-6">
                <div className="input-item input-item-textarea ltn__custom-icon">
                    <input type="text" name="beforePriceLabel"  value={formik.values.beforePriceLabel} onChange={formik.handleChange} placeholder="Before Price Label (ex: from)" />
                </div>
                </div>
                <div className="col-md-6">
                <div className="input-item input-item-textarea ltn__custom-icon">
                    <input type="text" name="yearlyTaxRate" placeholder="Yearly Tax Rate"  value={formik.values.yearlyTaxRate} onChange={formik.handleChange}/>
                </div>
                </div>
                <div className="col-md-6">
                <div className="input-item input-item-textarea ltn__custom-icon">
                    <input type="text" name="associationFee"  value={formik.values.associationFee} onChange={formik.handleChange} placeholder="Homeowners Association Fee(monthly)" />
                </div>
                </div>
            </div>
        </div>
     );
}

export default PropertyPrice;