import { Link } from "react-router-dom";

function MyProperty({publicUrl, listing}) {
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
            <td><Link to="#">Edit</Link></td>
            <td><Link tp="#"><i className="fa-solid fa-trash-can" /></Link></td>
        </tr>
     );
}

export default MyProperty;