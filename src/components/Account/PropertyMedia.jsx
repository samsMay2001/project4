function PropertyMedia() {
    return ( 
        <div>
            <h6>Listing Media</h6>
          <input type="file" id="myFile" name="filename" className="btn theme-btn-3 mb-10" /><br />
          <p>
            <small>* At least 1 image is required for a valid submission.Minimum size is 500/500px.</small><br />
            <small>* PDF files upload supported as well.</small><br />
            <small>* Images might take longer to be processed.</small>
          </p>
          <h6>Video Option</h6>
          <div className="row">
            <div className="col-md-6">
              <div className="input-item">
                <select className="nice-select">
                  <option>Video from</option>
                  <option>vimeo</option>
                  <option>youtube</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item input-item-textarea ltn__custom-icon">
                <input type="text" name="ltn__name" placeholder="Embed Video ID" />
              </div>
            </div>
          </div>
        </div>
     );
}

export default PropertyMedia;