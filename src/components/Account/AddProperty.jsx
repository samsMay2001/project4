import PropertyCategory from "./PropertyCategory";
import PropertyDescription from "./PropertyDescription";
import PropertyDetails from "./PropertyDetails";
import PropertyLocation from "./PropertyLocation";
import PropertyMedia from "./PropertyMedia";
import PropertyPrice from "./PropertyPrice";

function AddProperty() {
    const propertyObj = {}

    function addProperty(){
        // console.log('property added')
    }
    return ( 
        <div className="tab-pane fade" id="ltn_tab_1_7">
        <div className="ltn__myaccount-tab-content-inner">                                                
            <PropertyDescription/>
            <PropertyPrice/>
            <PropertyCategory/>
            <PropertyMedia/>
            <PropertyLocation/>
            <PropertyDetails/>
          <div className="alert alert-warning d-none" role="alert">
            Please note that the date and time you requested may not be available. We will contact you to confirm your actual appointment details.
          </div>
          <div className="btn-wrapper text-center--- mt-30">
            <button className="btn theme-btn-1 btn-effect-1 text-uppercase" onClick={addProperty}>Add Property</button>
          </div>
        </div>
      </div>
     );
}

export default AddProperty;