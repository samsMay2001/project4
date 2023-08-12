import { Link } from "react-router-dom";
import './pageheader.css'

function PageHeader({headertitle, subheader, customclass}) {
    let publicUrl = process.env.PUBLIC_URL+'/'; 
    let HeaderTitle = headertitle
    let Subheader = subheader ? subheader : HeaderTitle
    let CustomClass = customclass ? customclass : ''
return ( 
        <div className={"ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image "+CustomClass} data-bs-bg={publicUrl+"assets/img/bg/14.jpg"}>
			<div className="container my-page-header">
				<div className="row">
				<div className="col-lg-12" >
					<div className="ltn__breadcrumb-inner">
					<h1 className="page-title">{ HeaderTitle }</h1>
					<div className="ltn__breadcrumb-list" >
						<ul>
						<li>
                            <Link to="/">
                                <span className="ltn__secondary-color">
                                    <i  className="fas fa-home" />
                                </span> Home
                            </Link>
                        </li>
						<li >{ Subheader }</li>
						</ul>
					</div>
					</div>
				</div>
				</div>
			</div>
		</div>
     );
}

export default PageHeader;