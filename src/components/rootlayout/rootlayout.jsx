import { Outlet } from "react-router-dom";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
import './rootlayout.css'

function RootLayout() {
    return ( 
        <div className="my-outlet">
            <NavBar/>
            <main className="my-main">
                <Outlet/>
            </main>
            <Footer/>
        </div>
     );
}

export default RootLayout;