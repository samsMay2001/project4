function Review({publicUrl}) {
    return ( 
        <div className="ltn__comment-item clearfix">
								<div className="ltn__commenter-img">
								<img
									src={publicUrl + 'assets/img/testimonial/1.jpg'}
									alt="Image"
								/>
								</div>
								<div className="ltn__commenter-comment">
								<h6>
									<a href="#">Adam Smit</a>
								</h6>
								<div className="product-ratting">
									<ul>
									<li>
										<a href="#">
										<i className="fas fa-star" />
										</a>
									</li>
									<li>
										<a href="#">
										<i className="fas fa-star" />
										</a>
									</li>
									<li>
										<a href="#">
										<i className="fas fa-star" />
										</a>
									</li>
									<li>
										<a href="#">
										<i className="fas fa-star-half-alt" />
										</a>
									</li>
									<li>
										<a href="#">
										<i className="far fa-star" />
										</a>
									</li>
									</ul>
								</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Doloribus, omnis fugit corporis
									iste magnam ratione.
								</p>
								<span className="ltn__comment-reply-btn">
									September 3, 2020
								</span>
								</div>
							</div>
     );
}

export default Review;