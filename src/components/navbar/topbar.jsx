import { NavLink } from "react-router-dom";
import Social from "../Social/social";

function TopBar() {
    return ( 
        <div className="ltn__header-top-area section-bg-6 top-area-color-white---">
				<div className="container">
                    <div className="row">
                        <div className="col-md-7">
                        <div className="ltn__top-bar-menu">
                            <ul>
                            <li><a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you"><i className="icon-mail" /> info@webmail.com</a></li>
                            <li><a href="locations.html"><i className="icon-placeholder" /> 15/A, Nest Tower, NYC</a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-md-5">
                        <div className="top-bar-right text-end" >
                            <div className="ltn__top-bar-menu">
                            <ul>
                                <li className="d-none">
                                </li>
                                <li>
                                    <Social />
                                </li>
                                <li>
                                {/* header-top-btn */}
                                    <div className="header-top-btn">
                                        <NavLink to="/add-listing">Add Listing</NavLink>
                                    </div>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
				</div>
			</div>
     );
}

export default TopBar;