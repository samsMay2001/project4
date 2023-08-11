import { NavLink } from "react-router-dom";

function SideNavResponsive({publicUrl}) {
    return ( 
        <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
				<div className="ltn__utilize-menu-inner ltn__scrollbar">
					<div className="ltn__utilize-menu-head">
					<div className="site-logo">
						<NavLink to="/"><img src={publicUrl+"assets/img/logo.png"} alt="Logo" /></NavLink>
					</div>
					<button className="ltn__utilize-close">×</button>
					</div>
					<div className="ltn__utilize-menu-search-form">
					<form action={"#"}>
						<input type="text" placeholder="Search..." />
						<button><i className="fas fa-search" /></button>
					</form>
					</div>
					<div className="ltn__utilize-menu">
					<ul>
						<li><NavLink to="/">Home</NavLink></li>
						<li><NavLink to="/about">About</NavLink>
						<ul className="sub-menu">
							<li><NavLink to="/about">About</NavLink></li>
							<li><NavLink to="/service">Services</NavLink></li>
							<li><NavLink to="/service-details">Service Details</NavLink></li>
							<li><NavLink to="/portfolio">Portfolio</NavLink></li>
							<li><NavLink to="/portfolio-v2">Portfolio - 02</NavLink></li>
							<li><NavLink to="/portfolio-details">Portfolio Details</NavLink></li>
							<li><NavLink to="/team">Team</NavLink></li>
							<li><NavLink to="/team-details">Team Details</NavLink></li>
							<li><NavLink to="/faq">FAQ</NavLink></li>
							<li><NavLink to="/location">Google Map Locations</NavLink></li>
						</ul>
						</li>
						<li><NavLink to="/shop">Shop</NavLink>
						<ul className="sub-menu">
							<li><NavLink to="/shop">Shop</NavLink></li>
							<li><NavLink to="/shop-grid">Shop Grid</NavLink></li>
							<li><NavLink to="/shop-left-sidebar">Shop Left sidebar</NavLink></li>
							<li><NavLink to="/shop-right-sidebar">Shop Right sidebar</NavLink></li>
							<li><NavLink to="/product-details">Shop Details</NavLink></li>
							<li><NavLink to="/cart">Cart</NavLink></li>
							<li><NavLink to="/checkout">Checkout</NavLink></li>
							<li><NavLink to="/my-account">My Account</NavLink></li>
							<li><NavLink to="/login">Sign in</NavLink></li>
							<li><NavLink to="/register">Register</NavLink></li>
						</ul>
						</li>
						<li><NavLink to="/blog-grid">News</NavLink>
						<ul className="sub-menu">
							<li><NavLink to="/blog">News</NavLink></li>
							<li><NavLink to="/blog-grid">News Grid</NavLink></li>
							<li><NavLink to="/blog-left-sidebar">News Left sidebar</NavLink></li>
							<li><NavLink to="/blog-right-sidebar">News Right sidebar</NavLink></li>
							<li><NavLink to="/blog-details">News details</NavLink></li>
						</ul>
						</li>
						<li><NavLink to="#">Pages</NavLink>
							<ul className="sub-menu">
								<li><NavLink to="/about">About</NavLink></li>
								<li><NavLink to="/service">Services</NavLink></li>
								<li><NavLink to="/service-details">Service Details</NavLink></li>
								<li><NavLink to="/portfolio">Portfolio</NavLink></li>
								<li><NavLink to="/portfolio-2">Portfolio - 02</NavLink></li>
								<li><NavLink to="/portfolio-details">Portfolio Details</NavLink></li>
								<li><NavLink to="/team">Team</NavLink></li>
								<li><NavLink to="/team-details">Team Details</NavLink></li>
								<li><NavLink to="/faq">FAQ</NavLink></li>
								<li><NavLink to="/history">History</NavLink></li>
								<li><NavLink to="/add-listing">Add Listing</NavLink></li>
								<li><NavLink to="/locations">Google Map Locations</NavLink></li>
								<li><NavLink to="/404">404</NavLink></li>
								<li><NavLink to="/contact">Contact</NavLink></li>
								<li><NavLink to="/coming-soon">Coming Soon</NavLink></li>
							</ul>
                    	</li>
						<li><NavLink to="/contact">Contact</NavLink></li>
					</ul>
					</div>
					<div className="ltn__utilize-buttons ltn__utilize-buttons-2">
					<ul>
						<li>
						<NavLink to="/my-account" title="My Account">
							<span className="utilize-btn-icon">
							<i className="far fa-user" />
							</span>
							My Account
						</NavLink>
						</li>
						<li>
						<NavLink to="/wishlist" title="Wishlist">
							<span className="utilize-btn-icon">
							<i className="far fa-heart" />
							<sup>3</sup>
							</span>
							Wishlist
						</NavLink>
						</li>
						<li>
						<NavLink to="/cart" title="Shoping Cart">
							<span className="utilize-btn-icon">
							<i className="fas fa-shopping-cart" />
							<sup>5</sup>
							</span>
							Shoping Cart
						</NavLink>
						</li>
					</ul>
					</div>
					<div className="ltn__social-media-2">
					<ul>
						<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
						<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
						<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
						<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
					</ul>
					</div>
				</div>
			</div>
     );
}

export default SideNavResponsive;