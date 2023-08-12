import { Link } from "react-router-dom";

function ListingDetailTxt() {
    return ( 
        <div>
            <div className="ltn__blog-meta">
                <ul>
                    <li className="ltn__blog-category">
                        <Link to="#">Featured</Link>
                    </li>
                    <li className="ltn__blog-category">
                        <Link className="bg-orange" to="#">
                        For Rent
                    </Link>
                    </li>
                    <li className="ltn__blog-date">
                        <i className="far fa-calendar-alt" />
                        May 19, 2021
                    </li>
                    <li>
                        <Link to="#">
                            <i className="far fa-comments" />
                            35 Comments
                        </Link>
                    </li>
                </ul>
            </div>
            <h1>Diamond Manor Apartment</h1>
            <label>
                <span className="ltn__secondary-color">
                    <i className="flaticon-pin" />
                </span>{' '}
                Belmont Gardens, Chicago
            </label>
            <h4 className="title-2">Description</h4>
            <p>
            Massa tempor nec feugiat nisl pretium. Egestas fringilla
            phasellus faucibus scelerisque eleifend donec Porta nibh
            venenatis cras sed felis eget velit aliquet. Neque volutpat ac
            tincidunt vitae semper quis lectus. Turpis in eu mi bibendum
            neque egestas congue quisque. Sed elementum tempus egestas sed
            sed risus pretium quam. Dignissim sodales ut eu sem. Nibh mauris
            cursus mattis molestee iaculis at erat pellentesque. Id interdum
            velit laoreet id donec ultrices tincidunt.
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