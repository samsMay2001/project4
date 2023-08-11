import img20 from '../../imgs/20.jpg'
import Testimonial from './testimonail';
import './testimonials.css'
function Testimonials() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    return ( 
        <div className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-70" data-bs-bg={publicUrl+"assets/img/bg/20.jpg"} >
            <div className="backgroundimg">
                <img src={img20} alt='' />
            </div>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Testimonial</h6>
			          <h1 className="section-title">Clients Feedback</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__testimonial-slider-5-active slick-arrow-1">
			    <Testimonial publicUrl={publicUrl} agentName={'Jacob William'}/>
			    <Testimonial publicUrl={publicUrl} agentName={'Kelian Anderson'}/>
			    <Testimonial publicUrl={publicUrl} agentName={'Adam Joseph'}/>
			      {/*  */}
			    </div>
			  </div>
			</div>
     );
}

export default Testimonials;