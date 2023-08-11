import { Link } from "react-router-dom";
import img21 from "../../imgs/21.png"
import './banner.css'
// anim
function Banner() {
    return ( 
        <div className="ltn__slider-area ltn__slider-3  section-bg-1 go-top">
            {/* style={{border: '1px dashed red'}} */}
				  <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
				    {/* ltn__slide-item */}
				    <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3" >
				      <div className="ltn__slide-item-inner" >
				        <div className="container">
				          <div className="row">
				            <div className="col-lg-12 align-self-center my-banner-col">
				              <div className="slide-item-info">
				                <div className="slide-item-info-inner">
				                  <div className="slide-video mb-50 d-none">
				                    <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
				                      <i className="fa fa-play" />
				                    </a>
				                  </div>
				                  <h6 className="slide-sub-title white-color--- animated" ><span><i className="fas fa-home" /></span> Real Estate Agency</h6>
				                  <h1 className="slide-title animated ">Find Your Dream <br /> House By Us</h1>
				                  <div className="slide-brief animated">
				                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
				                  </div>
				                  <div className="btn-wrapper animated ">
				                    	<Link to="/about" className="theme-btn-1 btn btn-effect-1 go-top">Make An Enquiry</Link>
				                    <a className="ltn__video-play-btn bg-white" href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0" data-rel="lightcase">
				                      <i className="icon-play  ltn__secondary-color" />
				                    </a>
				                  </div>
				                </div>
				              </div>
				              <div className="slide-item-img">
				                <img src={img21} alt="#" />
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>
				  </div>
			</div>
     );
}

export default Banner;