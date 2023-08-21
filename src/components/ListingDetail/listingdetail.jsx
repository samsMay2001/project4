import { Link } from "react-router-dom";
import Review from "../Review/review";
import PropertyVideo from "./propertyVideo";
import Reviews from "./Reviews";
import Amenities from "./amenities";
import Gallery from "./Galery";
import Feature from "./features";
import DetailsTable from "./detailsTable";
import ListingDetailTxt from "./listingdetailtxt";
import PageHeader from "../PageHeader/pageheader";
import { useAppContext } from "../../App/appContext";

function ListingDetail() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    const {currentListing, currentAgent} = useAppContext()
    return ( 
        <div className="ltn__shop-details-area pb-10">
            <PageHeader headertitle={'Product Details'}/>
		<div className="container" style={{textAlign:'left'}}>
			<div className="row">
				<div className="col-lg-8 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
						<ListingDetailTxt currentListing={currentListing}/>
                        <Gallery publicUrl={publicUrl} currentListing={currentListing}/>
						<DetailsTable currentListing={currentListing}/>
						<h4 className="title-2">Facts and Features</h4>
						<div className="property-detail-feature-list clearfix mb-45">
							<ul>
								<Feature txt={'Dining Area'}/>
								<Feature txt={'Garage'}/>
								<Feature txt={'Living Room'}/>
								<Feature txt={'Bathroom'}/>
								<Feature txt={'Gym Area'}/>
								<Feature txt={'Garden'}/>
								<Feature txt={'Parking'}/>
						    </ul>
					    </div>
                        <Amenities currentListing={currentListing}/>
                        <h4 className="title-2">Location</h4>
                        <div className="property-details-google-map mb-60">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            frameBorder={0}
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex={0}
                        />
					</div>
				</div>
				</div>
				<div className="col-lg-4">
				<aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
					{/* Author Widget */}
					<div className="widget ltn__author-widget">
					<div className="ltn__author-widget-inner text-center">
						<img src={publicUrl + 'assets/img/team/4.jpg'} alt="Image" />
						<h5>{currentAgent.firstname} {currentAgent.lastname}</h5>
						<small>Real Estate Agent</small>
						<div className="product-ratting">
						<ul>
							<li>
							<a href="#">
								<i className="fas fa-star" />
							</a>
							</li>
							<li>
							<a href="#">
								<i className="fas fa-star" />
							</a>
							</li>
							<li>
							<a href="#">
								<i className="fas fa-star" />
							</a>
							</li>
							<li>
							<a href="#">
								<i className="fas fa-star-half-alt" />
							</a>
							</li>
							<li>
							<a href="#">
								<i className="far fa-star" />
							</a>
							</li>
							<li className="review-total">
							{' '}
							<a href="#"> ( 1 Reviews )</a>
							</li>
						</ul>
						</div>
						<p style={{width: '300px', margin: 'auto'}}>
						A seasoned real estate agent in Chicago, combines 10 years of experience with a personalized approach to help clients find their perfect homes.
						</p>
						<div className="ltn__social-media">
						<ul>
							<li>
							<a href="#" title="Facebook">
								<i className="fab fa-facebook-f" />
							</a>
							</li>
							<li>
							<a href="#" title="Twitter">
								<i className="fab fa-twitter" />
							</a>
							</li>
							<li>
							<a href="#" title="Linkedin">
								<i className="fab fa-linkedin" />
							</a>
							</li>
							<li>
							<a href="#" title="Youtube">
								<i className="fab fa-youtube" />
							</a>
							</li>
						</ul>
						</div>
					</div>
					</div>
					{/* Search Widget */}
					<div className="widget ltn__search-widget">
					<h4 className="ltn__widget-title ltn__widget-title-border-2">
						Search Objects
					</h4>
					<form action="#">
						<input
						type="text"
						name="search"
						placeholder="Search your keyword..."
						/>
						<button type="submit">
						<i className="fas fa-search" />
						</button>
					</form>
					</div>
					{/* Form Widget */}
					<div className="widget ltn__form-widget">
					<h4 className="ltn__widget-title ltn__widget-title-border-2">
						Have some questions? 
					</h4>
					<form action="#">
						<input type="text" name="yourname" placeholder="Your Name*" />
						<input
						type="text"
						name="youremail"
						placeholder="Your e-Mail*"
						/>
						<textarea
						name="yourmessage"
						placeholder="Write Message..."
						defaultValue={''}
						/>
						<button type="button" className="btn theme-btn-1">
						    Send Messege
						</button>
					</form>
					</div>
					{/* Top Rated Product Widget */}

					{/* Popular Post Widget */}
					
					{/* Social Media Widget */}
					<div className="widget ltn__social-media-widget">
					<h4 className="ltn__widget-title ltn__widget-title-border-2">
						Follow us
					</h4>
					<div className="ltn__social-media-2">
						<ul>
						<li>
							<a href="#" title="Facebook">
							<i className="fab fa-facebook-f" />
							</a>
						</li>
						<li>
							<a href="#" title="Twitter">
							<i className="fab fa-twitter" />
							</a>
						</li>
						<li>
							<a href="#" title="Linkedin">
							<i className="fab fa-linkedin" />
							</a>
						</li>
						<li>
							<a href="#" title="Instagram">
							<i className="fab fa-instagram" />
							</a>
						</li>
						</ul>
					</div>
					</div>
					{/* Tagcloud Widget */}
					{/* Banner Widget */}
					<div className="widget ltn__banner-widget d-none go-top">
					<Link to="/shop">
						<img src={publicUrl + 'assets/img/banner/2.jpg'} alt="#" />
					</Link>
					</div>
				</aside>
				</div>
			</div>
		</div>
	</div>
     );
}

export default ListingDetail;