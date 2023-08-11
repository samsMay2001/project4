function Testimonial({agentName, txt, publicUrl}) {
    return ( 
        <div className="col-lg-4">
            <div className="ltn__testimonial-item ">
                <div className="ltn__testimoni-info">
                <p><i className="flaticon-left-quote-1" /> 
                    Precious ipsum dolor sit amet
                    consectetur adipisicing elit, sed dos
                    mod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad min
                    veniam, quis nostrud Precious ips
                    um dolor sit amet, consecte</p>
                <div className="ltn__testimoni-info-inner">
                    <div className="ltn__testimoni-img">
                    <img src={publicUrl+"assets/img/testimonial/1.jpg"} alt="#" />
                    </div>
                    <div className="ltn__testimoni-name-designation">
                    <h5>{agentName}</h5>
                    <label>Selling Agents</label>
                    </div>
                </div>
                </div>
            </div>
        </div>
     );
}

export default Testimonial;