function PropertyCategory({formik}) {
    return ( 
        <div>
            <h6>Select Categories</h6>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                <div className="input-item">
                    <select className="nice-select" name="category1" value={formik.values.category1} onChange={formik.handleChange}>
                    <option>Apartments</option>
                    <option>Condos</option>
                    <option>Duplexes</option>
                    <option>Houses</option>
                    <option>Offices</option>
                    <option>Retail</option>
                    <option>Villas</option>
                    </select>
                </div>
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="input-item">
                    <select className="nice-select" name="category2" value={formik.values.category2} onChange={formik.handleChange}>
                        <option>Rentals</option>
                        <option>Sales</option>
                    </select>
                </div>
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="input-item">
                    <select className="nice-select" name="category3" value={formik.values.category3} onChange={formik.handleChange}>
                        <option>Active</option>
                        <option>Hot offer</option>
                        <option>New offer</option>
                        <option>Open house</option>
                        <option>Sold</option>
                    </select>
                </div>
                </div>
            </div>   
        </div>
     );
}

export default PropertyCategory;