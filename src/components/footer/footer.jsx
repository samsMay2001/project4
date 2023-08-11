import { NavL, NavLink, NavLinkink } from "react-router-dom";
import Social from "../Social/social";
import CopyRight from "./copyRight";
import './footer.css'

function Footer() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imgattr = "Footer logo"

    return (
            <footer className="ltn__footer-area  ">
              <div className="footer-top-area  section-bg-2 plr--5">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                      <div className="footer-widget footer-about-widget">
                        <div className="footer-logo">
                          <div className="site-logo">
                            <img src={publicUrl+"assets/img/logo-2.png"} alt="Logo" />
                          </div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</p>
                        <div className="footer-address">
                          <ul>
                            <li>
                              <div className="footer-address-icon">
                                <i className="icon-placeholder" />
                              </div>
                              <div className="footer-address-info">
                                <p>Brooklyn, New York, United States</p>
                              </div>
                            </li>
                            <li>
                              <div className="footer-address-icon">
                                <i className="icon-call" />
                              </div>
                              <div className="footer-address-info">
                                <p><a href="tel:+0123-456789">+0123-456789</a></p>
                              </div>
                            </li>
                            <li>
                              <div className="footer-address-icon">
                                <i className="icon-mail" />
                              </div>
                              <div className="footer-address-info">
                                <p><a href="mailto:example@example.com">example@example.com</a></p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="ltn__social-media mt-20">
                            <Social />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                      <div className="footer-widget footer-menu-widget clearfix">
                        <h4 className="footer-title">Company</h4>
                        <div className="footer-menu go-top">
                          <ul>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li><NavLink to="/shop">Listings</NavLink></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                      <div className="footer-widget footer-menu-widget clearfix">
                        <h4 className="footer-title">Services</h4>
                        <div className="footer-menu go-top">
                          <ul>
                            <li><NavLink to="/wishlist">Wish List</NavLink></li>
                            <li><NavLink to="/login">Agents</NavLink></li>
                            <li><NavLink to="/about">Terms &amp; Conditions</NavLink></li>
                            <li><NavLink to="/shop">Promotional Offers</NavLink></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                      <div className="footer-widget footer-menu-widget clearfix">
                        <h4 className="footer-title">Customer Care</h4>
                        <div className="footer-menu go-top">
                          <ul>
                            <li><NavLink to="/my-account">My account</NavLink></li>
                            <li><NavLink to="/add-listing">Add listing</NavLink></li>
                            <li><NavLink to="/faq">FAQ</NavLink></li>
                            <li><NavLink to="/contact">Contact us</NavLink></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                      <div className="footer-widget footer-newsletter-widget">
                        <h4 className="footer-title">Newsletter</h4>
                        <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
                        <div className="footer-newsletter">
                          <form action="#">
                            <input type="email" name="email" placeholder="Email*" />
                            <div className="btn-wrapper">
                              <button className="theme-btn-1 btn" type="submit"><i className="fas fa-location-arrow" /></button>
                            </div>
                          </form>
                        </div>
                        <h5 className="mt-30">We Accept</h5>
                        <img src={publicUrl+"assets/img/icons/payment-4.png"} alt="Payment Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CopyRight />
                {/* style={{border: '1px dashed red'}} */}
            </footer>
    )
}


export default Footer;