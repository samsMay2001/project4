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

function ListingDetail() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    return ( 
        <div className="ltn__shop-details-area pb-10">
            <PageHeader headertitle={'Product Details'}/>
		<div className="container" style={{textAlign:'left'}}>
			<div className="row">
				<div className="col-lg-8 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
						<ListingDetailTxt/>
                        <Gallery publicUrl={publicUrl}/>
						<DetailsTable/>
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
                        <Amenities/>
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
					<PropertyVideo publicUrl={publicUrl}/>
					<Reviews publicUrl={publicUrl}/>
					
				</div>
				{/* ************************************************************* */}
				</div>
				<div className="col-lg-4">
				<aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
					{/* Author Widget */}
					<div className="widget ltn__author-widget">
					<div className="ltn__author-widget-inner text-center">
						<img src={publicUrl + 'assets/img/team/4.jpg'} alt="Image" />
						<h5>Rosalina D. Willaimson</h5>
						<small>Traveller/Photographer</small>
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
						<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Veritatis distinctio, odio, eligendi suscipit reprehenderit
						atque.
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
						Drop Messege For Book
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
						<button type="submit" className="btn theme-btn-1">
						Send Messege
						</button>
					</form>
					</div>
					{/* Top Rated Product Widget */}
					<div className="widget ltn__top-rated-product-widget go-top">
					<h4 className="ltn__widget-title ltn__widget-title-border-2">
						Top Rated Product
					</h4>
					<ul>
						<li>
						<div className="top-rated-product-item clearfix">
							<div className="top-rated-product-img">
							<Link to="/product-details">
								<img
								src={publicUrl + 'assets/img/product/1.png'}
								alt="#"
								/>
							</Link>
							</div>
							<div className="top-rated-product-info">
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
									<i className="fas fa-star" />
									</a>
								</li>
								<li>
									<a href="#">
									<i className="fas fa-star" />
									</a>
								</li>
								</ul>
							</div>
							<h6>
								<Link to="/shop">Luxury House In Greenville </Link>
							</h6>
							<div className="product-price">
								<span>$30,000.00</span>
								<del>$35,000.00</del>
							</div>
							</div>
						</div>
						</li>
						<li>
						<div className="top-rated-product-item clearfix">
							<div className="top-rated-product-img">
							<Link to="/product-details">
								<img
								src={publicUrl + 'assets/img/product/2.png'}
								alt="#"
								/>
							</Link>
							</div>
							<div className="top-rated-product-info">
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
									<i className="fas fa-star" />
									</a>
								</li>
								<li>
									<a href="#">
									<i className="fas fa-star" />
									</a>
								</li>
								</ul>
							</div>
							<h6>
								<Link to="/shop">Apartment with Subunits</Link>
							</h6>
							<div className="product-price">
								<span>$30,000.00</span>
								<del>$35,000.00</del>
							</div>
							</div>
						</div>
						</li>
						<li>
						<div className="top-rated-product-item clearfix">
							<div className="top-rated-product-img">
							<Link to="/product-details">
								<img
								src={publicUrl + 'assets/img/product/3.png'}
								alt="#"
								/>
							</Link>
							</div>
							<div className="top-rated-product-info">
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
								</ul>
							</div>
							<h6>
								<Link to="/shop">3 Rooms Manhattan</Link>
							</h6>
							<div className="product-price">
								<span>$30,000.00</span>
								<del>$35,000.00</del>
							</div>
							</div>
						</div>
						</li>
					</ul>
					</div>
					{/* Menu Widget (Category) */}
					<div className="widget ltn__menu-widget ltn__menu-widget-2--- ltn__menu-widget-2-color-2---">
					<h4 className="ltn__widget-title ltn__widget-title-border-2">
						Top Categories
					</h4>
					<ul className="go-top">
						<li>
						<Link to="/blog-grid">
							Apartments <span>(26)</span>
						</Link>
						</li>
						<li>
						<Link to="/blog-grid">
							Picture Stodio <span>(30)</span>
						</Link>
						</li>
						<li>
						<Link to="/blog-grid">
							Office <span>(71)</span>
						</Link>
						</li>
						<li>
						<Link to="/blog-grid">
							Luxary Vilas <span>(56)</span>
						</Link>
						</li>
						<li>
						<Link to="/blog-grid">
							Duplex House <span>(60)</span>
						</Link>
						</li>
					</ul>
					</div>
					{/* Popular Product Widget */}
					<div className="widget ltn__popular-product-widget">
					<h4 className="ltn__widget-title ltn__widget-title-border-2">
						Popular Properties
					</h4>
					<div className="row ltn__popular-product-widget-active slick-arrow-1">
						{/* ltn__product-item */}
						<div className="col-12">
						<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
							<div className="product-img go-top">
							<Link to="/shop">
								<img
								src={publicUrl + 'assets/img/product-3/6.jpg'}
								alt="#"
								/>
							</Link>
							<div className="real-estate-agent">
								<div className="agent-img">
								<Link to="/team-details">
									<img
									src={publicUrl + 'assets/img/blog/author.jpg'}
									alt="#"
									/>
								</Link>
								</div>
							</div>
							</div>
							<div className="product-info">
							<div className="product-price">
								<span>
								$349,00<label>/Month</label>
								</span>
							</div>
							<h2 className="product-title">
								<Link to="/shop">New Apartment Nice View</Link>
							</h2>
							<div className="product-img-location">
								<ul>
								<li>
									<Link to="/shop">
									<i className="flaticon-pin" /> Belmont Gardens,
									Chicago
									</Link>
								</li>
								</ul>
							</div>
							<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
								<li>
								<span>3 </span>
								Bedrooms
								</li>
								<li>
								<span>2 </span>
								Bathrooms
								</li>
								<li>
								<span>3450 </span>
								square Ft
								</li>
							</ul>
							</div>
						</div>
						</div>
						{/* ltn__product-item */}
						<div className="col-12">
						<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
							<div className="product-img">
							<a href="product-details.html">
								<img
								src={publicUrl + 'assets/img/product-3/4.jpg'}
								alt="#"
								/>
							</a>
							<div className="real-estate-agent">
								<div className="agent-img">
								<Link to="/team-details">
									<img
									src={publicUrl + 'assets/img/blog/author.jpg'}
									alt="#"
									/>
								</Link>
								</div>
							</div>
							</div>
							<div className="product-info">
							<div className="product-price">
								<span>
								$349,00<label>/Month</label>
								</span>
							</div>
							<h2 className="product-title">
								<a href="product-details.html">
								New Apartment Nice View
								</a>
							</h2>
							<div className="product-img-location">
								<ul>
								<li>
									<a href="product-details.html">
									<i className="flaticon-pin" /> Belmont Gardens,
									Chicago
									</a>
								</li>
								</ul>
							</div>
							<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
								<li>
								<span>3 </span>
								Bedrooms
								</li>
								<li>
								<span>2 </span>
								Bathrooms
								</li>
								<li>
								<span>3450 </span>
								square Ft
								</li>
							</ul>
							</div>
						</div>
						</div>
						{/* ltn__product-item */}
						<div className="col-12">
						<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
							<div className="product-img">
							<a href="product-details.html">
								<img
								src={publicUrl + 'assets/img/product-3/5.jpg'}
								alt="#"
								/>
							</a>
							<div className="real-estate-agent">
								<div className="agent-img">
								<Link to="/team-details">
									<img
									src={publicUrl + 'assets/img/blog/author.jpg'}
									alt="#"
									/>
								</Link>
								</div>
							</div>
							</div>
							<div className="product-info">
							<div className="product-price">
								<span>
								$349,00<label>/Month</label>
								</span>
							</div>
							<h2 className="product-title">
								<a href="product-details.html">
								New Apartment Nice View
								</a>
							</h2>
							<div className="product-img-location">
								<ul>
								<li>
									<a href="product-details.html">
									<i className="flaticon-pin" /> Belmont Gardens,
									Chicago
									</a>
								</li>
								</ul>
							</div>
							<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
								<li>
								<span>3 </span>
								Bedrooms
								</li>
								<li>
								<span>2 </span>
								Bathrooms
								</li>
								<li>
								<span>3450 </span>
								square Ft
								</li>
							</ul>
							</div>
						</div>
						</div>
						{/*  */}
					</div>
					</div>
					{/* Popular Post Widget */}
					<div className="widget ltn__popular-post-widget go-top">
					<h4 className="ltn__widget-title ltn__widget-title-border-2">
						Leatest Blogs
					</h4>
					<ul>
						<li>
						<div className="popular-post-widget-item clearfix">
							<div className="popular-post-widget-img">
							<Link to="/blog-details">
								<img
								src={publicUrl + 'assets/img/team/5.jpg'}
								alt="#"
								/>
							</Link>
							</div>
							<div className="popular-post-widget-brief">
							<h6>
								<Link to="/blog-details">
								Lorem ipsum dolor sit cing elit, sed do.
								</Link>
							</h6>
							<div className="ltn__blog-meta">
								<ul>
								<li className="ltn__blog-date">
									<a href="#">
									<i className="far fa-calendar-alt" />
									June 22, 2020
									</a>
								</li>
								</ul>
							</div>
							</div>
						</div>
						</li>
						<li>
						<div className="popular-post-widget-item clearfix">
							<div className="popular-post-widget-img">
							<Link to="/blog-details">
								<img
								src={publicUrl + 'assets/img/team/6.jpg'}
								alt="#"
								/>
							</Link>
							</div>
							<div className="popular-post-widget-brief">
							<h6>
								<Link to="/blog-details">
								Lorem ipsum dolor sit cing elit, sed do.
								</Link>
							</h6>
							<div className="ltn__blog-meta">
								<ul>
								<li className="ltn__blog-date">
									<a href="#">
									<i className="far fa-calendar-alt" />
									June 22, 2020
									</a>
								</li>
								</ul>
							</div>
							</div>
						</div>
						</li>
						<li>
						<div className="popular-post-widget-item clearfix">
							<div className="popular-post-widget-img">
							<Link to="/blog-details">
								<img
								src={publicUrl + 'assets/img/team/7.jpg'}
								alt="#"
								/>
							</Link>
							</div>
							<div className="popular-post-widget-brief">
							<h6>
								<Link to="/blog-details">
								Lorem ipsum dolor sit cing elit, sed do.
								</Link>
							</h6>
							<div className="ltn__blog-meta">
								<ul>
								<li className="ltn__blog-date">
									<a href="#">
									<i className="far fa-calendar-alt" />
									June 22, 2020
									</a>
								</li>
								</ul>
							</div>
							</div>
						</div>
						</li>
						<li>
						<div className="popular-post-widget-item clearfix">
							<div className="popular-post-widget-img">
							<Link to="/blog-details">
								<img
								src={publicUrl + 'assets/img/team/8.jpg'}
								alt="#"
								/>
							</Link>
							</div>
							<div className="popular-post-widget-brief">
							<h6>
								<Link to="/blog-details">
								Lorem ipsum dolor sit cing elit, sed do.
								</Link>
							</h6>
							<div className="ltn__blog-meta">
								<ul>
								<li className="ltn__blog-date">
									<a href="#">
									<i className="far fa-calendar-alt" />
									June 22, 2020
									</a>
								</li>
								</ul>
							</div>
							</div>
						</div>
						</li>
					</ul>
					</div>
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