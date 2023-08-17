import { Formik, useFormik } from "formik";
import PropertyCategory from "./PropertyCategory";
import PropertyDescription from "./PropertyDescription";
import PropertyDetails from "./PropertyDetails";
import PropertyLocation from "./PropertyLocation";
import PropertyMedia from "./PropertyMedia";
import PropertyPrice from "./PropertyPrice";
import axios from "axios";
import * as Yup from 'yup'; 
import qs from 'qs'
import { useAppContext } from "../../App/appContext";
import { useNavigate } from "react-router-dom";
function AddProperty() {
    const {loggedUser, setListings} = useAppContext()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues : {
            title : 'Diamond Maner Apartment', //
            description: '', //
            price: "2000", //
            pricePerMonth: "", //
            yearlyTaxRate: "12", //
            associationFee: "", //
            beforePriceLabel: '', // 
            category1: 'Apartements', //
            category2: 'Rentals', //
            category3: 'Active', //
            address: 'Belmont Gardens, Chicago', //
            country: 'United States', //
            state: 'Illinois', //
            zip: '56301', //
            city: 'Chicago', //
            size: "120 sqft", //
            rooms: "4", //
            dateAvailable: "1st Sep, 2023", //
            parking: "2", //
            floors: "1",
            agentId : loggedUser._id
        }
    })

    function addProperty(){

        axios.post('http://localhost:4000/createproperty', qs.stringify(formik.values), {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((res)=> {
            console.log('added property successful'); 
            formik.resetForm(); 
            setListings((oldVal)=> {
                const listingsCopy = [...oldVal, formik.values]
                return listingsCopy
            })
        }).catch((err)=> console.log(err))
    }
    return ( 
        <div className="tab-pane fade" id="ltn_tab_1_7">
        <div className="ltn__myaccount-tab-content-inner">                                              
            <PropertyDescription formik={formik}/>
            <PropertyPrice formik={formik}/>
            <PropertyCategory formik={formik}/>
            {/* <PropertyMedia formik={formik}/> */}
            <PropertyLocation formik={formik}/>
            <PropertyDetails formik={formik}/>
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