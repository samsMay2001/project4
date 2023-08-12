function AccountTabs() {
    return ( 
        <div className="col-lg-4">
            <div className="ltn__tab-menu-list mb-50">
                <div className="nav">                                            
                    <a className="active show" data-bs-toggle="tab" href="#ltn_tab_1_1">Dashboard <i className="fas fa-home" /></a>
                    <a data-bs-toggle="tab" href="#ltn_tab_1_2">Profiles <i className="fas fa-user" /></a>
                    <a data-bs-toggle="tab" href="#ltn_tab_1_3">address <i className="fas fa-map-marker-alt" /></a>
                    <a data-bs-toggle="tab" href="#ltn_tab_1_4">Account Details <i className="fas fa-user" /></a>
                    <a data-bs-toggle="tab" href="#ltn_tab_1_5">My Properties <i className="fa-solid fa-list" /></a>
                    <a data-bs-toggle="tab" href="#ltn_tab_1_6">Favorited Properties <i className="fa-solid fa-heart" /></a>
                    <a data-bs-toggle="tab" href="#ltn_tab_1_7">Add Property <i className="fa-solid fa-map-location-dot" /></a>
                    <a href="login.html">Logout <i className="fas fa-sign-out-alt" /></a>
                </div>
            </div>
        </div>
     );
}

export default AccountTabs;