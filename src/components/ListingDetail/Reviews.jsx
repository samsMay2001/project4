import Review from "../Review/review";

function Reviews({publicUrl}) {
    return ( 
        <div className="ltn__shop-details-tab-content-inner--- ltn__shop-details-tab-inner-2 ltn__product-details-review-inner mb-60">
					<h4 className="title-2">Customer Reviews</h4>
					<hr />
					{/* comment-area */}
					<div className="ltn__comment-area mb-30">
						<div className="ltn__comment-inner">
						<ul>
							<li>
                                <Review publicUrl={publicUrl}/>
                            {/* *********** */}
							</li>
							<li>
                                <Review publicUrl={publicUrl}/>
							</li>
							<li>
                                <Review publicUrl={publicUrl}/>
							</li>
						</ul>
						</div>
					</div>
					</div>
     );
}

export default Reviews;