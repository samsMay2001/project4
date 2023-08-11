import { Outlet } from "react-router-dom";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
import './rootlayout.css'
import CallToAction from "../CallToAction/calltoaction";

function RootLayout() {
    return ( 
        <div className="my-outlet">
            <NavBar/>
            <main className="my-main">
                <Outlet/>
            </main>
            <CallToAction/>
            <Footer/>
        </div>
     );
}

export default RootLayout;