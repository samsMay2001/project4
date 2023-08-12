function PropertyVideo({publicUrl}) {
    return ( 
        <div>
            <h4 className="title-2">Property Video</h4>
					<div
					className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60"
					data-bs-bg={publicUrl + 'assets/img/others/5.jpg'}
					>
					<a
						className="ltn__video-icon-2 ltn__video-icon-2-border---"
						href="https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&showinfo=0"
						data-rel="lightcase:myCollection"
					>
						<i className="fa fa-play" />
					</a>
					</div>
        </div>
     );
}

export default PropertyVideo;