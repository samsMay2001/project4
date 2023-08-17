function PropertyDescription({formik}) {
    return ( 
        <div>
             <h6>Property Description</h6>
            <div className="row">
                <div className="col-md-12">
                <div className="input-item input-item-textarea ltn__custom-icon">
                    <input type="text" name="title" placeholder="Title*" value={formik.values.title} onChange={formik.handleChange}/>
                </div>
                <div className="input-item input-item-textarea ltn__custom-icon">
                    <textarea name="description" placeholder="Description" value={formik.values.description} onChange={formik.handleChange}/>
                </div>
                </div>
            </div>
        </div>
     );
}

export default PropertyDescription;