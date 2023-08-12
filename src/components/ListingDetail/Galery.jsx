function Gallery({publicUrl}) {
    return ( 
        <div>
            <h4 className="title-2">From Our Gallery</h4>
					<div className="ltn__property-details-gallery mb-30">
					<div className="row">
						<div className="col-md-6">
						<a
							href={publicUrl + 'assets/img/others/14.jpg'}
							data-rel="lightcase:myCollection"
						>
							<img
							className="mb-30"
							src={publicUrl + 'assets/img/others/14.jpg'}
							alt="Image"
							/>
						</a>
						<a
							href={publicUrl + 'assets/img/others/15.jpg'}
							data-rel="lightcase:myCollection"
						>
							<img
							className="mb-30"
							src={publicUrl + 'assets/img/others/15.jpg'}
							alt="Image"
							/>
						</a>
						</div>
						<div className="col-md-6">
						<a
							href={publicUrl + 'assets/img/others/16.jpg'}
							data-rel="lightcase:myCollection"
						>
							<img
							className="mb-30"
							src={publicUrl + 'assets/img/others/16.jpg'}
							alt="Image"
							/>
						</a>
						</div>
					</div>
					</div>
        </div>
     );
}

export default Gallery;