
const Service = () => {
  return (
    <>
      <div className="service-area bg-relative py-5">
        <img className="position-bottom-left top_image_bounce" src="assets/img/icon/4.png" alt="img" />
        <div className="container">
            <div className="section-title text-center wow animated fadeInUp">
                <h6 className="sub-title">SERVICES</h6>
                <h2 className="title mb-2">Why Choose <span>Iwebro?</span></h2>
                <p className="mb-0 lead">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."</p>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 wow animated fadeInUp">
                    <div className="single-service-inner text-center d-flex flex-column align-items-center justify-content-center">
                        <div className="thumb">
                            <img src="assets/img/icon/9.png" alt="img" />
                        </div>
                        <div className="details">
                            <h5>48+ hours</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur, sed do eiusmod.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow animated fadeInUp">
                    <div className="single-service-inner text-center d-flex flex-column align-items-center justify-content-center">
                        <div className="thumb">
                            <img src="assets/img/icon/10.png" alt="img" />
                        </div>
                        <div className="details">
                            <h5>3 Days</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow animated fadeInUp">
                    <div className="single-service-inner text-center d-flex flex-column align-items-center justify-content-center">
                        <div className="thumb">
                            <img src="assets/img/icon/8.png" alt="img" />
                        </div>
                        <div className="details">
                            <h5>96% success rate</h5>
                            <p>Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum is simply is our busi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Service;