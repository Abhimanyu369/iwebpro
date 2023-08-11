import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="banner-area talent bg-relative banner-area-3">
        <div className="container custom-container">
            <div className="bg-gray">
                <img className="img-right d-none d-lg-block" src="assets/img/banner/bg-4.jpg" alt="img" style={{objectFit:'cover'}} />
                <div className="container">
                  <div className="row position-relative">
                    <div className="col-xl-6 col-lg-7 wow animated fadeInLeft" style={{zIndex:'3'}}>
                      <div className="banner-inner text-center text-md-start">
                        <h2 className="" style={{fontSize:'53px',fontWeight:'900'}}>Developing For The Future</h2>
                        <span style={{fontWeight:'900'}} className="text-primary display-1">Iwebro</span>
                        <p className="mb-4 lead col-md-10 col-12">Lorem ipsum dolor consectetur notte massa sapien samet Aucibu sapien consectetur.</p>
                        <Link to='/company' className="btn btn-base page-scroll px-sm-5 me-4 mb-3 mb-sm-0" style={{borderRadius: '5px'}}>Become Talent Partner</Link>
                        <Link to="/active-requirements" className="btn btn-border-base mb-3 mb-sm-0" style={{borderRadius:'5px'}}>Active Jobs</Link>
                        <p className="my-4 lead col-md-10 col-12 mt-0 mt-sm-4">500+ happy clients have already been connected with the best talent partners.</p>
                        <div className="d-flex flex-md-nowrap flex-wrap align-items-md-center justify-content-md-start justify-content-center">
                          <div className="thumb wow animated fadeInLeft pe-md-4 ps-md-0 px-3 mb-md-0 mb-4" data-wow-delay='1.2s'>
                              <img src="/assets/img/client/fff.webp" alt="img" className="mx-auto" />
                          </div>
                          <div className="thumb wow animated fadeInLeft pe-md-4 ps-md-0 px-3 mb-md-0 mb-4" data-wow-delay='0.9s'>
                              <img src="/assets/img/client/fff.webp" alt="img" className="mx-auto" />
                          </div>
                          <div className="thumb wow animated fadeInLeft pe-md-4 ps-md-0 px-3 mb-md-0 mb-4" data-wow-delay='0.6s'>
                              <img src="/assets/img/client/fff.webp" alt="img" className="mx-auto" />
                          </div>
                          <div className="thumb wow animated fadeInLeft pe-md-4 ps-md-0 px-3 mb-md-0 mb-4" data-wow-delay='0.3s'>
                              <img src="/assets/img/client/fff.webp" alt="img" className="mx-auto" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Banner;