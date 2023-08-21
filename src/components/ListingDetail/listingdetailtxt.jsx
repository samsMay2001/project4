import { useEffect } from "react";
import { Link } from "react-router-dom";

function ListingDetailTxt({currentListing}) {
    return ( 
        <div>
            <div className="ltn__blog-meta">
                <ul>
                    <li className="ltn__blog-category">
                        <Link to="#">Featured</Link>
                    </li>
                    <li className="ltn__blog-category">
                        <Link className="bg-orange" to="#">
                            {currentListing.category2 === "Rentals" &&"For Rent"}
                            {currentListing.category2 === "Sales" &&"For Sell"}
                        </Link>
                    </li>
                    <li className="ltn__blog-date">
                        <i className="far fa-calendar-alt" />
                        {currentListing.dateAvailable}
                    </li>
                </ul>
            </div>
            <h1>{currentListing.title}</h1>
            <label>
                <span className="ltn__secondary-color">
                    <i className="flaticon-pin" />
                </span> {currentListing.address}
                {}
            </label>
            <h4 className="title-2">Description</h4>
            <p>
"Stunning home with modern elegance. Spacious living areas, gourmet kitchen with top-notch appliances. Tranquil outdoor space, perfect for relaxation. Master suite with luxurious bath. High-end finishes throughout. Close to amenities and parks. Don't miss this opportunity!"
            </p>
            <p>
            To the left is the modern kitchen with central island, leading
            through to the unique breakfast family room which feature glass
            walls and doors out onto the garden and access to the separate
            utility room.
            </p>
        </div>
     );
}

export default ListingDetailTxt;