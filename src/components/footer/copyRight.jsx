import { NavLink } from "react-router-dom";

function CopyRight() {
    return ( 
        <div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
			<div className="container-fluid ltn__border-top-2">
				<div className="row">
				<div className="col-md-6 col-12" >
					<div className="ltn__copyright-design clearfix" >
					<p>All Rights Reserved @ Company <span className="current-year" /></p>
					</div>
				</div>
				<div className="col-md-6 col-12 align-self-center">
					<div className="ltn__copyright-menu text-end">
					<ul className="go-top">
						<li><NavLink to="/about">Terms &amp; Conditions</NavLink></li>
						<li><NavLink to="/about">Claim</NavLink></li>
						<li><NavLink to="/about">Privacy &amp; Policy</NavLink></li>
					</ul>
					</div>
				</div>
				</div>
			</div>
			</div>
     );
}

export default CopyRight;