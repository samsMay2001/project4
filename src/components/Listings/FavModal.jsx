import { Link } from "react-router-dom";

function FavModal({publicUrl}) {
    return ( 
        <div className="ltn__modal-area ltn__add-to-cart-modal-area">
				<div className="modal fade" id="liton_wishlist_modal" tabIndex={-1}>
					<div className="modal-dialog modal-md" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="ltn__quick-view-modal-inner">
                                    <div className="modal-product-item">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="modal-product-img">
                                                    <img src={publicUrl+"assets/img/product/7.png"} alt="#" />
                                                </div>
                                                <div className="modal-product-info go-top">
                                                    <h5><Link to="/product-details">Brake Conversion Kit</Link></h5>
                                                    <p className="added-cart"><i className="fa fa-check-circle" />  Successfully added to your Wishlist</p>
                                                    <div className="btn-wrapper">
                                                    <Link to="/wishlist" className="theme-btn-1 btn btn-effect-1">View Wishlist</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
					</div>
				</div>
			</div>
     );
}

export default FavModal;