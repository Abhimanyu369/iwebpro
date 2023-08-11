    const Banner = () => {
  return (
    <>
    <div className="banner-area bg-relative banner-area-1 pd-bottom-100 bg-cover justify-content-center align-items-center d-flex" style={{height:"985px"}}>
    
        <div className="move-bg">
            <img className="animate-img-1 top_image_bounce" src="/assets/img/banner/2.png" alt="img" />
            <img className="animate-img-2 left_image_bounce" src="/assets/img/banner/5.svg" alt="img" />

            <img className="position-absolute wow d-none d-lg-block fadeInLeft img img-1" src="/assets/img/icon/11.png" alt="img" style={{width : '90px'}} />
            <img className="position-absolute wow d-none d-lg-block fadeInLeft img img-2" src="/assets/img/icon/17.png" alt="img" style={{width : '70px'}} />
            <img className="position-absolute wow d-none d-lg-block fadeInLeft img img-3" src="/assets/img/icon/14.png" alt="img" style={{width : '90px'}} />
            <img className="position-absolute wow d-none d-lg-block fadeInLeft img img-4" src="/assets/img/icon/13.png" alt="img" style={{width : '70px'}} />
            <img className="position-absolute wow d-none d-lg-block fadeInLeft img img-5" src="/assets/img/icon/18.png" alt="img" style={{width : '70px'}} />

            <img className="position-absolute wow d-none d-lg-block fadeInRight img img-6" src="/assets/img/icon/19.png" alt="img" style={{width : '100px'}}/>
            <img className="position-absolute wow d-none d-lg-block fadeInRight img img-7" src="/assets/img/icon/16.png" alt="img" style={{width : '60px'}} />
            <img className="position-absolute wow d-none d-lg-block fadeInRight img img-8" src="/assets/img/icon/15.png" alt="img" style={{width : '90px'}} />
            <img className="position-absolute wow d-none d-lg-block fadeInRight img img-9" src="/assets/img/icon/17.png" alt="img" style={{width : '70px'}} />
            <img className="position-absolute wow d-none d-lg-block fadeInRight img img-10" src="/assets/img/icon/12.png" alt="img" style={{width : '70px'}}/>

            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-8 col-lg-9">
                        <div className="banner-inner text-center section-title">
                            <h6 className="sub-title wow animated fadeInUp">Pixel-perfect design</h6>
                            <h1 className="wow animated fadeInUp mb-sm-4 mb-2" data-wow-delay='0.3s'>Pre- Vetted Near-Shore Developers Remote/Hybrid/On-site</h1>
                            <div className="wow animated fadeInUp element text-center d-flex align-items-center flex-wrap justify-content-center" data-wow-delay='0.6s'>
                                <span className="text-dark py-2 px-4 m-md-3 m-2"> Highly Skilled </span>
                                <span className="text-dark py-2 px-4 m-md-3 m-2"> Excellent Communication</span>
                                <span className="text-dark py-2 px-4 m-md-3 m-2"> Analytical Skills  </span>
                                <span className="text-dark py-2 px-4 m-md-3 m-2"> Leadership </span>
                            </div>
                            <div className="btn-area mt-sm-2">
                                <a className="btn btn-base page-scroll px-sm-5 wow animated fadeInLeft" style={{borderRadius: '5px'}} href="#demo" data-wow-delay='1.2s'>Check Demos</a>
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