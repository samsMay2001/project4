function Feature({txt}) {
    return ( 
        <li>
            <div className="property-detail-feature-list-item">
                <i className="flaticon-double-bed" />
                <div>
                    <h6>{txt}</h6>
                    <small>20 x 16 sq feet</small>
                </div>
            </div>
        </li>
     );
}

export default Feature;