import { NavLink } from "react-router-dom";
import Social from "../Social/social";

function NavBar () {
    let publicUrl = process.env.PUBLIC_URL+'/'
        return (
		<div>
           <header className="ltn__header-area ltn__header-5 ltn__header-transparent--- gradient-color-4---">
            {/* Blue thin header */}
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
                        <div className="top-bar-right text-end">
                            <div className="ltn__top-bar-menu">
                            <ul>
                                <li className="d-none">
                                {/* ltn__language-menu */}
                                <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                                    <ul>
                                    <li><a href="#" className="dropdown-toggle"><span className="active-currency">English</span></a>
                                        <ul>
                                        <li><NavLink to="#">Arabic</NavLink></li>
                                        <li><NavLink to="#">Bengali</NavLink></li>
                                        <li><NavLink to="#">Chinese</NavLink></li>
                                        <li><NavLink to="#">English</NavLink></li>
                                        <li><NavLink to="#">French</NavLink></li>
                                        <li><NavLink to="#">Hindi</NavLink></li>
                                        </ul>
                                    </li>
                                    </ul>
                                </div>
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
            {/* main nave section */}
            {/* style={{border: '1px dashed red'}} */}
			<div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white" >
				<div className="container">
				<div className="row">
					<div className="col" >
                        {/* logo area */}
                        <div className="site-logo-wrap">
                            <div className="site-logo go-top" >
                                <NavLink to="/" ><img src={publicUrl+"assets/img/logo.png"} alt="Logo" /></NavLink>
                            </div>
                        </div>
					</div>
                    {/* main nav links */}
					<div className="col header-menu-column">
                        <div className="header-menu d-none d-xl-block">
                            <nav>
                                <div className="ltn__main-menu go-top">
                                    <ul>
                                        <li className="menu-icon">
                                            <NavLink to="/">Home</NavLink>
                                        </li>
                                        <li className="menu-icon">
                                            <NavLink to="/shop-left-sidebar">Listings</NavLink>
                                        </li>
                                        <li className="menu-icon">
                                            <NavLink to="/service">Services</NavLink>
                                        </li>
                                        <li className="menu-icon">
                                            <NavLink to="/about">About</NavLink>
                                        </li>
                                        <li className="menu-icon">
                                            <NavLink to="/blog">Blog</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
					</div>
					<div className="col ltn__header-options ltn__header-options-2 mb-sm-20">
					{/* user-menu */}
					<div className="ltn__drop-menu user-menu">
						<ul>
						<li>
							<NavLink to="#"><i className="icon-user" /></NavLink>
							<ul className="go-top">
							<li><NavLink to="/login">Sign in</NavLink></li>
							<li><NavLink to="/register">Register</NavLink></li>
							<li><NavLink to="/my-account">My Account</NavLink></li>
							</ul>
						</li>
						</ul>
					</div>
					{/* mini-cart */}
					<div className="mini-cart-icon">
                            <a href="#ltn__utilize-cart-menu" className="ltn__utilize-toggle">
                                <i className="icon-shopping-cart"></i>
                                <sup>2</sup>
                            </a>
                    </div>
					{/* mini-cart */}
					{/* Mobile Menu Button */}
					<div className="mobile-menu-toggle d-xl-none">
						<a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
						<svg viewBox="0 0 800 600">
							<path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top" />
							<path d="M300,320 L540,320" id="middle" />
							<path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
						</svg>
						</a>
					</div>
					</div>
				</div>
				</div>
			</div>
			</header>
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
						<li><a href="#">Home</a>
						<ul className="sub-menu">
						<li><NavLink to="/">Home Style 01</NavLink></li>
						<li><NavLink to="/home-v2">Home Style 02</NavLink></li>
						<li><NavLink to="/home-v3">Home Style 03</NavLink></li>
						<li><NavLink to="/home-v4">Home Style 04</NavLink></li>
						<li><NavLink to="/home-v5">Home Style 05 <span className="menu-item-badge">video</span></NavLink></li>
						<li><NavLink to="/home-v6">Home Style 06</NavLink></li>
						<li><NavLink to="/home-v7">Home Style 07</NavLink></li>
						<li><NavLink to="/home-v8">Home Style 08</NavLink></li>
						<li><NavLink to="/home-v9">Home Style 09</NavLink></li>
						<li><NavLink to="/home-v10">Home Style 10</NavLink></li>
						</ul>
						</li>
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

					{/* Utilize Cart Menu Start */}
					<div id="ltn__utilize-cart-menu" className="ltn__utilize ltn__utilize-cart-menu">
				<div className="ltn__utilize-menu-inner ltn__scrollbar">
				<div className="ltn__utilize-menu-head">
					<span className="ltn__utilize-menu-title">Cart</span>
					<button className="ltn__utilize-close">×</button>
				</div>
				<div className="mini-cart-product-area ltn__scrollbar">
					<div className="mini-cart-item clearfix">
					<div className="mini-cart-img go-top">
						<NavLink to="/product-details"><img src={publicUrl+"assets/img/product/1.png"} alt="Image" /></NavLink>
						<span className="mini-cart-item-delete"><i className="icon-cancel" /></span>
					</div>
					<div className="mini-cart-info go-top">
						<h6><NavLink to="/product-details">Wheel Bearing Retainer</NavLink></h6>
						<span className="mini-cart-quantity">1 x $65.00</span>
					</div>
					</div>
					<div className="mini-cart-item clearfix">
					<div className="mini-cart-img go-top">
						<NavLink to="/product-details"><img src={publicUrl+"assets/img/product/2.png"} alt="Image" /></NavLink>
						<span className="mini-cart-item-delete"><i className="icon-cancel" /></span>
					</div>
					<div className="mini-cart-info go-top">
						<h6><NavLink to="/product-details">Brake Conversion Kit</NavLink></h6>
						<span className="mini-cart-quantity">1 x $85.00</span>
					</div>
					</div>
					<div className="mini-cart-item clearfix">
					<div className="mini-cart-img go-top">
						<NavLink to="/product-details"><img src={publicUrl+"assets/img/product/3.png"} alt="Image" /></NavLink>
						<span className="mini-cart-item-delete"><i className="icon-cancel" /></span>
					</div>
					<div className="mini-cart-info go-top">
						<h6><NavLink to="/product-details">OE Replica Wheels</NavLink></h6>
						<span className="mini-cart-quantity">1 x $92.00</span>
					</div>
					</div>
					<div className="mini-cart-item clearfix">
					<div className="mini-cart-img go-top">
						<NavLink to="/product-details"><img src={publicUrl+"assets/img/product/4.png"} alt="Image" /></NavLink>
						<span className="mini-cart-item-delete"><i className="icon-cancel" /></span>
					</div>
					<div className="mini-cart-info go-top">
						<h6><NavLink to="/product-details">Shock Mount Insulator</NavLink></h6>
						<span className="mini-cart-quantity">1 x $68.00</span>
					</div>
					</div>
				</div>
				<div className="mini-cart-footer">
					<div className="mini-cart-sub-total">
					<h5>Subtotal: <span>$310.00</span></h5>
					</div>
					<div className="btn-wrapper go-top">
					<NavLink to="/cart" className="theme-btn-1 btn btn-effect-1">View Cart</NavLink>
					<NavLink to="/cart" className="theme-btn-2 btn btn-effect-2">Checkout</NavLink>
					</div>
					<p>Free Shipping on All Orders Over $100!</p>
				</div>
				</div>
			</div>
			{/* Utilize Cart Menu End */}

		</div>
        )
}

export default NavBar ;