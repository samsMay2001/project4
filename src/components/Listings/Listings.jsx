import PageHeader from "../PageHeader/pageheader";
import ShopGridV1 from "./Listings1";

function Listings() {
    return ( 
        <div className="listings">
            <PageHeader headertitle="Shop Left Sidebar" />
            <ShopGridV1 />
        </div>
     );
}

export default Listings;