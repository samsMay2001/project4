import { Link } from "react-router-dom";
import { useAppContext } from "../../App/appContext";

function AccountTabs({
    setprfTab, 
    setAdrTab, 
    setPrlsTab, 
    setFavTab, 
    setAdPrTab, 
    prfTab, 
    adrTab,
    prlsTab,
    favTab,
    adPrTab
}) {
    const {setLoggedUser} = useAppContext()
    function logOut() {
        localStorage.clear()
        setLoggedUser(null)
    }
    return ( 
        <div className="col-lg-4">
            <div className="ltn__tab-menu-list mb-50">
                <div className="nav">     
                    {/* <a className="active show" data-bs-toggle="tab" href="#ltn_tab_1_1">Dashboard <i className="fas fa-home" /></a> */}
                    <a className={`${prfTab && 'active show'}`} data-bs-toggle="tab" onClick={()=>{
                        setprfTab(true); setAdrTab(false); setPrlsTab(false); setFavTab(false); setAdPrTab(false)
                    }}>Profile <i className="fas fa-user" /></a>
                    <a className={`${adrTab && 'active show'}`} data-bs-toggle="tab" href="#" onClick={()=>{
                        setprfTab(false); setAdrTab(true); setPrlsTab(false); setFavTab(false); setAdPrTab(false)
                    }}>address <i className="fas fa-map-marker-alt" /></a>
                    {/* <a data-bs-toggle="tab" href="#ltn_tab_1_4">Account Details <i className="fas fa-user" /></a> */}
                    <a className={`${prlsTab && 'active show'}`} data-bs-toggle="tab" href="#ltn_tab_1_5" onClick={()=>{
                        setprfTab(false); setAdrTab(false); setPrlsTab(true); setFavTab(false); setAdPrTab(false)
                    }}>My Properties <i className="fa-solid fa-list" /></a>
                    <a className={`${favTab && 'active show'}`} data-bs-toggle="tab" href="#ltn_tab_1_6" onClick={()=>{
                        setprfTab(false); setAdrTab(false); setPrlsTab(false); setFavTab(true); setAdPrTab(false)
                    }}>Favorited Properties <i className="fa-solid fa-heart" /></a>
                    <a className={`${adPrTab && 'active show'}`} data-bs-toggle="tab" href="#ltn_tab_1_7" onClick={()=>{
                        setprfTab(false); setAdrTab(false); setPrlsTab(false); setFavTab(false); setAdPrTab(true)
                    }}>Add Property <i className="fa-solid fa-map-location-dot" /></a>
                    <Link to="/login" onClick={logOut}>Logout <i className="fas fa-sign-out-alt" /></Link>
                </div>
            </div>
        </div>
     );
}

export default AccountTabs;