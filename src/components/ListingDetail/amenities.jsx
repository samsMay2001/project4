import Amenity from "./amenity";

function Amenities() {
    return ( 
        <div>
            <h4 className="title-2 mb-10">Amenities</h4>
            <div className="property-details-amenities mb-60">
					<div className="row">
						<div className="col-lg-4 col-md-6">
                            <div className="ltn__menu-widget">
                                <ul>
                                    <Amenity txt={'Air conditioning'}/>
                                    <Amenity txt={'Gym'}/>
                                    <Amenity txt={'Microwave'}/>
                                    <Amenity txt={'Swimming Pool'}/>
                                    <Amenity txt={'WiFi'}/>
                                </ul>
                            </div>
						</div>
						<div className="col-lg-4 col-md-6">
						<div className="ltn__menu-widget">
							<ul>
                                <Amenity txt={'Barbeque'}/>
                                <Amenity txt={'Recreation'}/>
                                <Amenity txt={'Microwave'}/>
                                <Amenity txt={'Basketball Court'}/>
                                <Amenity txt={'Fire place'}/>
							</ul>
						</div>
						</div>
						<div className="col-lg-4 col-md-6">
						<div className="ltn__menu-widget">
							<ul>
                                <Amenity txt={'Refrigerator'}/>
                                <Amenity txt={'Window Coverings'}/>
                                <Amenity txt={'Washer'}/>
                                <Amenity txt={'24x7 Security'}/>
                                <Amenity txt={'Indoor Game'}/>
							</ul>
						</div>
						</div>
					</div>
					</div>
        </div>
     );
}

export default Amenities;