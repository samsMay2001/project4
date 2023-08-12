import { Link } from "react-router-dom";
import MyProperty from "./MyProperty";

function MyProperties({publicUrl, title, id}) {
    return ( 
        <div className="tab-pane fade" id={id}>
						<div className="ltn__myaccount-tab-content-inner">
						  <div className="ltn__my-properties-table table-responsive">
							<table className="table">
							  <thead>
								<tr>
								  <th scope="col">{title}</th>
								  <th scope="col" />
								  <th scope="col">Date Added</th>
								  <th scope="col">Actions</th>
								  <th scope="col">Delete</th>
								</tr>
							  </thead>
							  <tbody>
								  <MyProperty publicUrl={publicUrl}/>
								  <MyProperty publicUrl={publicUrl}/>
								  <MyProperty publicUrl={publicUrl}/>
							  </tbody>
							</table>
						  </div>
						  <div className="ltn__pagination-area text-center">
							<div className="ltn__pagination">
							<ul>
								<li><Link to="#"><i className="fas fa-angle-double-left" /></Link></li>
								<li><Link to="#">1</Link></li>
								<li className="active"><Link to="#">2</Link></li>
								<li><Link to="#">3</Link></li>
								<li><Link to="#">...</Link></li>
								<li><Link to="#">10</Link></li>
								<li><Link to="#"><i className="fas fa-angle-double-right" /></Link></li>
							</ul>
							</div>
						</div>
						</div>
					  </div>
     );
}

export default MyProperties;