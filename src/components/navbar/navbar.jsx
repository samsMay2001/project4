import { NavLink } from "react-router-dom";
import SideNavResponsive from "./sidenaveresponsive";
import TopBar from "./topbar";

function NavBar () {
    let publicUrl = process.env.PUBLIC_URL+'/'
        return (
		<div>
           <header className="ltn__header-area ltn__header-5 ltn__header-transparent--- gradient-color-4---">
            {/* Blue thin header */}
			<TopBar/>
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
                                            <NavLink to="/listings">Listings</NavLink>
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
                                <NavLink to="/my-account"><i className="icon-user" /></NavLink>
                                <ul className="go-top">
                                    <li><NavLink to="/login">Sign in</NavLink></li>
                                    <li><NavLink to="/register">Register</NavLink></li>
                                    <li><NavLink to="/my-account">My Account</NavLink></li>
                                </ul>
                            </li>
						</ul>
					</div>

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
            {/* Side Nav @Media */}
            {/* as of now it's not visible when you press the menu button */}
            <SideNavResponsive publicUrl = {publicUrl}/>
		</div>
        )
}

export default NavBar ;