import { Link } from "react-router-dom";
import PageHeader from "../PageHeader/pageheader";
import AccountTabs from "./AccountTabs";
import DashboardContent from "./DashboardContent";
import ProfileContent from "./ProfileContent";
import Address from "./Address";
import MyProperties from "./MyProperties";
import AccountDetails from "./AccountDetails";
import AddProperty from "./AddProperty";
import './account.css'
function Account() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    return ( 
        <div>
            <PageHeader headertitle={'My Account'}/>
            <div className="liton__wishlist-area pb-70">
	  <div className="container">
		<div className="row">
		  <div className="col-lg-12">
			{/* PRODUCT TAB AREA START */}
			<div className="ltn__product-tab-area">
			  <div className="container">
				<div className="row">
				  <AccountTabs/>
				  <div className="col-lg-8">
					<div className="tab-content">
					  {/* <DashboardContent/> */}
					  <ProfileContent publicUrl={publicUrl}/>
					  <Address publicUrl={publicUrl}/>
                      {/* <AccountDetails/> */}
					  <MyProperties publicUrl={publicUrl} title={'My Properties'} id={'ltn_tab_1_5'}/>
					  <MyProperties publicUrl={publicUrl} title={'Top Properties'} id={'ltn_tab_1_6'}/>
					 <AddProperty/>
					</div>
				  </div>
				</div>
			  </div>
			</div>
			{/* PRODUCT TAB AREA END */}
		  </div>
		</div>
	  </div>
	</div>
        </div>
     );
}

export default Account;