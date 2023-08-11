import { Link } from "react-router-dom";

const GetStarted = () => {

  return (
    <>
        <div className="get-started pt-5">
          <div className="container">
            <div className="text-center section-title">
              <h6 className="sub-title">GET STARTED</h6> 
              <h4 className="wow animated fadeInUp text-secondary mb-4">Don't Wait! Just Get Started</h4>
              <h2 style={{fontSize:'40px',fontWeight:'900'}} className="wow animated fadeInUp mb-5">Lorem Ipusm new wave of dummy <br /> <span className="text-primary">Remote Designing</span> Teams</h2>
              <Link to='/company' className="btn btn-base page-scroll px-sm-5 wow animated fadeInUp" data-wow-delay='0.3s' style={{borderRadius: '5px'}} >Become Talent Partner</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default GetStarted;