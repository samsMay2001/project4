import { Outlet } from "react-router-dom";
import NavBar from "../navbar/navbar";

function RootLayout() {
    return ( 
        <div className="my-outlet">
            <NavBar/>
            <main>
                <Outlet/>
            </main>
        </div>
     );
}

export default RootLayout;