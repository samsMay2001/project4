import About2 from "../About2/about2";
import PageHeader from "../PageHeader/pageheader";
import About3 from "./About3";
import About4 from "./About4";
import About5 from "./About5";

function About() {
    return ( 
        <div>
            <PageHeader headertitle={'About Us'}/>
            <About3/>
            <About2/>
            <About5/>
        </div>
     );
}

export default About;