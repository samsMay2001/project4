import { Link } from "react-router-dom";
import axios from "axios";
import qs from 'qs';
import { useAppContext } from "../../App/appContext";

function MyProperty({publicUrl, listing}) {
    const {setListings} = useAppContext()
    function deleteItem(){
        axios.post('http://localhost:4000/deleteproperty', qs.stringify({propertyId : listing._id}), {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((res)=> {
            setListings((oldVal)=> {
                const listingsCopy = [...oldVal]
                const newCopy = listingsCopy.filter(item => item._id !== listing._id)
                return newCopy
            })
            console.log('property deleted successfuly')
        }).catch(err => console.log(err))
    }
    return ( 
        <tr>
            <td className="ltn__my-properties-img go-top">
            <Link to="/product-details"><img src={publicUrl+"assets/img/product-3/2.jpg"} alt="#" /></Link>
            </td>
            <td>
                <div className="ltn__my-properties-info">
                    <h6 className="mb-10 go-top"><Link to="/product-details">{listing.title}</Link></h6>
                    <small><i className="icon-placeholder" /> {listing.city}, {listing.state}, {listing.country}</small>
                    <div className="product-ratting">
                        <ul>
                            <li><a href="#"><i className="fas fa-star" /></a></li>
                            <li><a href="#"><i className="fas fa-star" /></a></li>
                            <li><a href="#"><i className="fas fa-star" /></a></li>
                            <li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li className="review-total"> <a href="#"> ( 95 Reviews )</a></li>
                        </ul>
                    </div>
                </div>
            </td>
            <td>{listing.dateAvailable}</td>
            <td><Link to="#"></Link></td>
            <td><Link onClick={deleteItem} ><i className="fa-solid fa-trash-can" /></Link></td>
        </tr>
     );
}

export default MyProperty;