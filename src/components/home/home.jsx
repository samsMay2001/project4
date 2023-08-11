import { NavLink } from "react-router-dom";
import NavBar from "../navbar/navbar";
import Banner from "../Banner/banner";
import About1 from "../About1/about1";
import SearchForm from "../SearchForm/searchform";
import Counter from "../Counter/counter";
import About2 from "../About2/about2";
import Features from "../Features/features";
import CallToAction from "../CallToAction/calltoaction";
import BlogSlider from "../BlogSlider/blogslider";
import Testimonials from "../Testimonials/testimonials";

function Home() {
    
    return ( 
        <div className="my-home">
            <Banner/>
            <SearchForm/>
            <About1/>
            <Counter/>
            <About2/>
            <Features customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"/>
            {/* <BlogSlider customClass="section-subtitle-2"/> */}
            <Testimonials/>
            <CallToAction/>
        </div>
     );
}

export default Home;